package com.dytstudio.signup.Issues;

import android.app.ProgressDialog;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.Models.Location;
import com.dytstudio.signup.Models.Reason;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.google.gson.Gson;

import java.util.Date;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddIssueActivity extends AppCompatActivity {

    FloatingActionButton btn_save_issue;
    EditText et_reason_subject, et_reason_message;
    APIInterface apiInterface;
    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_issue);

        apiInterface = APIClient.getClient().create(APIInterface.class);
        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        et_reason_message = (EditText) findViewById(R.id.et_reason_message);
        et_reason_subject = (EditText) findViewById(R.id.et_reason_subject);


        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        btn_save_issue = (FloatingActionButton) findViewById(R.id.btn_save_issue); 

        btn_save_issue.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(isEmpty(et_reason_message) && isEmpty(et_reason_subject)){
                    Toast.makeText(AddIssueActivity.this, "Issue cannot be empty", Toast.LENGTH_SHORT).show();
                }
                else{
                    btn_save_issue.setEnabled(false);

                    Reason r = new Reason();
                    r.reasontitle = et_reason_subject.getText().toString();
                    r.reason = et_reason_message.getText().toString();

                    Issue issue = new Issue();
                    issue.reason = r;
                    issue.issueClosed = false;
                    issue.location = new Location();



                    Call<Issue> issue_call = apiInterface.POST_ISSUE(accessToken.getAccess_token(), issue );

                    ProgressDialog pd = new ProgressDialog(AddIssueActivity.this,R.style.spinner);
                    pd.setCancelable(false);
                    pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
                    pd.show();

                    issue_call.enqueue(new Callback<Issue>() {
                        @Override
                        public void onResponse(Call<Issue> call, Response<Issue> response) {
                            if(response.isSuccessful()){
                                pd.hide();
                                finish();
                            }

                            else{
                                btn_save_issue.setEnabled(true);
                                pd.hide();
                                Toast.makeText(AddIssueActivity.this, "Issue not added", Toast.LENGTH_SHORT).show();
                            }
                        }

                        @Override
                        public void onFailure(Call<Issue> call, Throwable t) {
                            btn_save_issue.setEnabled(true);
                            pd.hide();
                            Toast.makeText(AddIssueActivity.this, "Issue not added", Toast.LENGTH_SHORT).show();
                        }
                    });

                }







            }
        });


    }



    private boolean isEmpty(EditText etText) {
        return etText.getText().toString().trim().length() == 0;
    }
}
