package com.dytstudio.signup.Login;

import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.dytstudio.signup.Dashboard.UserDashboard;
import com.dytstudio.signup.MainActivity;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.dytstudio.signup.Util.Easing;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Login extends AppCompatActivity {

    EditText password, username;
    Button loginbtn;
    APIInterface apiInterface;
    ImageView iv_back;
    LinearLayout ll_button, ll_bottom;
    SharedPreferences mPrefs;


    private final String scope = "WebAPI openid profile roles";
    private final  String client_id = "Android";
    private final String grant_type = "password";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        if(mPrefs.contains("token")){
            Intent intent = new Intent(Login.this, UserDashboard.class);
            Login.this.startActivity(intent);

        }

        changeStatusBarColor();

        ll_button = (LinearLayout) findViewById(R.id.ll_button);
        ll_bottom = (LinearLayout) findViewById(R.id.ll_bottom);

        ease(ll_button);
        ease2(ll_bottom);

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

                ProgressDialog pd = new ProgressDialog(Login.this,R.style.spinner);
                pd.setCancelable(false);
                pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
                pd.show();
                 Call<AccessToken> token_call = apiInterface.POST_TOKEN_CALL(username.getText().toString(), password.getText().toString(), client_id ,grant_type ,scope);

                token_call.enqueue(new Callback<AccessToken>() {
                    @Override
                    public void onResponse(Call<AccessToken> call, Response<AccessToken> response) {
                        if(response.isSuccessful()){

                            Intent intent = new Intent(Login.this, UserDashboard.class);
                            SharedPreferences.Editor prefsEditor = mPrefs.edit();
                            Gson gson = new Gson();
                            String json = gson.toJson(response.body());
                            prefsEditor.putString("token", json);
                            if(prefsEditor.commit()){
                                Login.this.startActivity(intent);
                                finish();
                                pd.hide();
                            }

                        }
                        else{
                            Toast.makeText(Login.this, "Login not succeeded", Toast.LENGTH_SHORT).show();
                            pd.hide();
                        }


                    }

                    @Override
                    public void onFailure(Call<AccessToken> call, Throwable t) {

                        Toast.makeText(Login.this, "Login not succeeded", Toast.LENGTH_SHORT).show();
                        pd.hide();
                    }
                });



            }
        });




    }

    private void changeStatusBarColor() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(Color.TRANSPARENT);
        }
    }
    private void ease(final View view) {
        Easing easing = new Easing(1000);
        AnimatorSet animatorSet = new AnimatorSet();
        float fromY = 600;
        float toY = view.getTop();
        ValueAnimator valueAnimatorY = ValueAnimator.ofFloat(fromY,toY);

        valueAnimatorY.setEvaluator(easing);

        valueAnimatorY.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                view.setTranslationY((float) animation.getAnimatedValue());
            }
        });

        animatorSet.playTogether(valueAnimatorY);
        animatorSet.setDuration(700);
        animatorSet.start();
    }
    private void ease2(final View view) {
        Easing easing = new Easing(1200);
        AnimatorSet animatorSet = new AnimatorSet();
        float fromY = 600;
        float toY = view.getTop();
        ValueAnimator valueAnimatorY = ValueAnimator.ofFloat(fromY,toY);

        valueAnimatorY.setEvaluator(easing);

        valueAnimatorY.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                view.setTranslationY((float) animation.getAnimatedValue());
            }
        });

        animatorSet.playTogether(valueAnimatorY);
        animatorSet.setDuration(1100);
        animatorSet.start();
    }
}
