package com.dytstudio.signup;

import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
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

import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.CreateIceMakerUser;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SignUp extends AppCompatActivity {


    EditText username, email, password, passwordvalidate , givenname, familyname;
    ImageView iv_back;
    LinearLayout ll_button, ll_bottom;
    Button bbtn_sign_up;
    APIInterface apiInterface;
    CreateIceMakerUser user;
    private final String scope = "WebAPI openid profile roles";
    private final  String client_id = "android";
    private final String grant_type = "password";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }

        apiInterface = APIClient.getClient().create(APIInterface.class);



        changeStatusBarColor();
        username = (EditText) findViewById(R.id.et_username);
        username.setPadding(0,15,0,15);
        email = (EditText) findViewById(R.id.et_email);
        email.setPadding(0,15,0,15);
        password= (EditText) findViewById(R.id.et_password);
        password.setPadding(0,15,0,15);
        passwordvalidate= (EditText) findViewById(R.id.et_password);
        passwordvalidate.setPadding(0,15,0,15);
        givenname= (EditText) findViewById(R.id.et_givenname);
        givenname.setPadding(0,15,0,15);
        familyname= (EditText) findViewById(R.id.et_familyname);
        familyname.setPadding(0,15,0,15);


        ll_button = (LinearLayout) findViewById(R.id.ll_button);
        ll_bottom = (LinearLayout) findViewById(R.id.ll_bottom);
        bbtn_sign_up = (Button) findViewById(R.id.btn_sign_up);
        ease(ll_button);
        ease2(ll_bottom);
        iv_back = (ImageView) findViewById(R.id.iv_back);
        iv_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(SignUp.this, MainActivity.class));
                finish();
            }
        });

        bbtn_sign_up.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                user = new CreateIceMakerUser(username.getText().toString().trim(), email.getText().toString().trim(), password.getText().toString().trim(), passwordvalidate.getText().toString().trim(), givenname.getText().toString().trim(), familyname.getText().toString().trim());

                Call<CreateIceMakerUser> call = apiInterface.CREATE_ICE_MAKER_USER_CALL(user);

                call.enqueue(new Callback<CreateIceMakerUser>() {
                    @Override
                    public void onResponse(Call<CreateIceMakerUser> call, retrofit2.Response<CreateIceMakerUser> response) {

                        if(response.isSuccessful()){



                            final Call<AccessToken> token_call = apiInterface.POST_TOKEN_CALL(username.getText().toString(), "Admin01*", client_id ,grant_type ,scope);

                            //ToDo: loading screen on

                            token_call.enqueue(new Callback<AccessToken>() {
                                @Override
                                public void onResponse(Call<AccessToken> call, Response<AccessToken> response) {



                                    if(response.isSuccessful()){

                                        Intent intent = new Intent(SignUp.this, UserDashboard.class);
                                       intent.putExtra("token", response.body());
                                        SignUp.this.startActivity(intent);

                                    }
                                    else{
                                        //Todo: display error
                                    }


                                }

                                @Override
                                public void onFailure(Call<AccessToken> call, Throwable t) {
                                    //Todo: display error

                                }
                            });


                        }


                    }

                    @Override
                    public void onFailure(Call<CreateIceMakerUser> call, Throwable t) {

                    }
                });









            }
        });

    }
    /**
     * Making notification bar transparent
     */




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