package com.dytstudio.signup;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

import com.dytstudio.signup.Models.AccessToken;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Login extends AppCompatActivity {

    EditText password, username;
    Button loginbtn;
    APIInterface apiInterface;
    ImageView iv_back;

    private final String scope = "WebAPI openid profile roles";
    private final  String client_id = "android";
    private final String grant_type = "password";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        apiInterface = APIClient.getClient().create(APIInterface.class);


        password = (EditText) findViewById(R.id.et_password_login);
        username = (EditText) findViewById(R.id.et_username_login);
        loginbtn = (Button) findViewById(R.id.btn_login);

        iv_back = (ImageView) findViewById(R.id.iv_back);
        iv_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Login.this, MainActivity.class));
                finish();
            }
        });

        loginbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                 Call<AccessToken> token_call = apiInterface.POST_TOKEN_CALL(username.getText().toString(), password.getText().toString(), client_id ,grant_type ,scope);

                token_call.enqueue(new Callback<AccessToken>() {
                    @Override
                    public void onResponse(Call<AccessToken> call, Response<AccessToken> response) {
                        if(response.isSuccessful()){

                            Intent intent = new Intent(Login.this, UserDashboard.class);
                            intent.putExtra("token", response.body());
                            Login.this.startActivity(intent);

                        }
                    }

                    @Override
                    public void onFailure(Call<AccessToken> call, Throwable t) {

                    }
                });



            }
        });




    }
}
