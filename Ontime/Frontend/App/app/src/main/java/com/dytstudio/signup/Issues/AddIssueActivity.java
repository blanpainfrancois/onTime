package com.dytstudio.signup.Issues;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.dytstudio.signup.Models.AccessToken;
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

                btn_save_issue.setEnabled(false);
                    Issue issue = issueBuilder(et_reason_subject.getText().toString().trim(), et_reason_message.getText().toString().trim(), new Location(5,5));

                    Call<Issue> issue_call = apiInterface.POST_ISSUE(accessToken.getAccess_token(), issue );
                    issue_call.enqueue(new Callback<Issue>() {
                        @Override
                        public void onResponse(Call<Issue> call, Response<Issue> response) {
                            if(response.isSuccessful()){
                                finish();
                            }

                            else{
                                btn_save_issue.setEnabled(true);
                            }
                        }

                        @Override
                        public void onFailure(Call<Issue> call, Throwable t) {
                            btn_save_issue.setEnabled(true);

                        }
                    });




            }
        });


    }


    private Issue issueBuilder(String issuetitle, String isssueareason, Location location){

        Reason reason = new Reason( isssueareason, issuetitle);

        Issue issue = new Issue(reason , new Date(), false, location);

        return issue;
    }
}
