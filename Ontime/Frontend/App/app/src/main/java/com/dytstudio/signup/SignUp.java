package com.dytstudio.signup;

import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.DataOutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;

public class SignUp extends AppCompatActivity {


    EditText username, email, password;
    ImageView iv_back;
    LinearLayout ll_button, ll_bottom;
    Button bbtn_sign_up;
    static final String URLSTRING = "http://ontimeapi.azurewebsites.net/api/Identity/CreateEmployee";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }




        changeStatusBarColor();
        username = (EditText) findViewById(R.id.et_username);
        username.setPadding(0,15,0,15);
        email = (EditText) findViewById(R.id.et_email);
        email.setPadding(0,15,0,15);
        password= (EditText) findViewById(R.id.et_password);
        password.setPadding(0,15,0,15);
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
                String usernameS = username.getText().toString().trim();
                String passwordS = password.getText().toString().trim();
                String emailS = email.getText().toString().trim();

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
