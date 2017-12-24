package com.dytstudio.signup.Issues;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dytstudio.signup.Dashboard.UserDashboard;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapView;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.gson.Gson;

import org.joda.time.DateTime;
import org.joda.time.Period;
import org.joda.time.Seconds;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.PeriodFormatter;
import org.joda.time.format.PeriodFormatterBuilder;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class OpenIssue extends AppCompatActivity {

    APIInterface apiInterface;
    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    Issue issue;
    
    MapView mapView;
    
    Button btn_closeissue;
    TextView tv_title, tv_reason_body, tv_open_time;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        apiInterface = APIClient.getClient().create(APIInterface.class);

        Thread t = new Thread() {

            @Override
            public void run() {
                try {

                    PeriodFormatter HoursMinutesSeconds = new PeriodFormatterBuilder()
                            .appendHours()
                            .appendSeparator(":")
                            .appendMinutes()
                            .appendSeparator(":")
                            .appendSeconds()
                            .toFormatter();

                    while (!isInterrupted()) {
                        Thread.sleep(1000);
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {

                                if(issue != null){
                                    DateTime dt = DateTime.now();

                                    Period p = new Period(issue.getDateTime(), dt);

                                    tv_open_time.setText(HoursMinutesSeconds.print(p));
                                }




                            }
                        });
                    }
                } catch (InterruptedException e) {
                }
            }
        };

        t.start();



        

        Call<Issue> get_open_issue = apiInterface.GET_OPEN_ISSUE(accessToken.getAccess_token());

        get_open_issue.enqueue(new Callback<Issue>() {
            @Override
            public void onResponse(Call<Issue> call, Response<Issue> response) {
                if(response.isSuccessful()){
                    issue = response.body();

                    setContentView(R.layout.activity_open_issue);

                    tv_title = (TextView) findViewById(R.id.title_open_issue);
                    btn_closeissue = (Button) findViewById(R.id.btn_close_issue);
                    tv_reason_body = (TextView) findViewById(R.id.close_issue_text);
                    tv_open_time = (TextView) findViewById(R.id.tv_issue_open);



                    
                    mapView = (MapView) findViewById(R.id.mapView);
                    
                    mapView.getMapAsync(new OnMapReadyCallback() {
                        @Override
                        public void onMapReady(GoogleMap googleMap) {
                            Toast.makeText(OpenIssue.this, "geladen", Toast.LENGTH_SHORT).show();
                        }
                    });

                    tv_title.setText(issue.reason.reasontitle);
                    tv_reason_body.setText(issue.reason.reason);



                    btn_closeissue.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {

                            closeissue();

                        }
                    });

                }
            }

            @Override
            public void onFailure(Call<Issue> call, Throwable t) {

            }
        });




    }

    private void closeissue(){
        Call<Void> closeissuecall = apiInterface.close_issue(accessToken.getAccess_token(), issue.issueID);

        ProgressDialog pd = new ProgressDialog(OpenIssue.this,R.style.spinner);
        pd.setCancelable(false);
        pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
        pd.show();


        closeissuecall.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.isSuccessful()){
                    Intent myIntent = new Intent(OpenIssue.this, UserDashboard.class);
                    pd.hide();
                    startActivity(myIntent);
                    finish();
                }

                pd.hide();
                Toast.makeText(OpenIssue.this, "Issue not closed", Toast.LENGTH_SHORT).show();
            }
            

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
            pd.hide();
            }
        });
    }








}
