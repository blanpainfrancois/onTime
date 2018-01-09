package com.dytstudio.signup.Dashboard;

import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.R;

public class employerhasnoaddress extends AppCompatActivity {

    Button logout_btn;
    SharedPreferences mPrefs;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_employerhasnoaddress);

        logout_btn = (Button) findViewById(R.id.logout_noaddress);

        logout_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                logout();
            }
        });

    }


    private void logout(){
        SharedPreferences.Editor editor = mPrefs.edit();
        editor.remove("token");
        editor.commit();
        Toast.makeText(this, "Token removed", Toast.LENGTH_SHORT).show();

        Intent intent = new Intent(employerhasnoaddress.this, Login.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK);
        employerhasnoaddress.this.startActivity(intent);
        finish();
    }

    }

