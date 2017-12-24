package com.dytstudio.signup.Issues;

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
import com.google.gson.Gson;

import org.w3c.dom.Text;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class OpenIssue extends AppCompatActivity {

    APIInterface apiInterface;
    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    Issue issue;
    
    Button btn_closeissue;
    TextView tv_title;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        apiInterface = APIClient.getClient().create(APIInterface.class);
        

        

        Call<Issue> get_open_issue = apiInterface.GET_OPEN_ISSUE(accessToken.getAccess_token());

        get_open_issue.enqueue(new Callback<Issue>() {
            @Override
            public void onResponse(Call<Issue> call, Response<Issue> response) {
                if(response.isSuccessful()){
                    issue = response.body();

                    setContentView(R.layout.activity_open_issue);

                    tv_title = (TextView) findViewById(R.id.title_open_issue);
                    btn_closeissue = (Button) findViewById(R.id.btn_close_issue);

                    tv_title.setText(issue.reason.reasontitle);

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
        Call<Void> closeissuecall = apiInterface.close_issue(accessToken.toString(), issue.issueID);

        closeissuecall.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.isSuccessful()){
                    Intent myIntent = new Intent(OpenIssue.this, UserDashboard.class);
                    startActivity(myIntent);
                    finish();
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {

            }
        });
    }


}
