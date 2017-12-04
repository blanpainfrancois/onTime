package com.dytstudio.signup.Issues;

import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.dytstudio.signup.R;

public class AddIssue extends AppCompatActivity {

    FloatingActionButton btn_save_issue;
    EditText et_reason_subject, et_reason_message;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_issue);
        
        btn_save_issue = (FloatingActionButton) findViewById(R.id.btn_save_issue); 

        btn_save_issue.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                
            }
        });


    }
}
