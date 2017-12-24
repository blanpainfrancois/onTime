package com.dytstudio.signup.Dashboard;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.dytstudio.signup.Issues.AddIssueActivity;
import com.dytstudio.signup.Issues.OpenIssue;
import com.dytstudio.signup.Models.Employee;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.MainActivity;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.google.gson.Gson;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UserDashboard extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    APIInterface apiInterface;
    RecyclerView recyclerView;

    Employee employee;

    TextView tv_name, tv_extrainfo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);
        apiInterface = APIClient.getClient().create(APIInterface.class);
        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);




        checkSubscribedtoEmployer();


    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }




    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.user_dashboard, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.menu_item_logout) {
            SharedPreferences.Editor editor = mPrefs.edit();
            editor.remove("token");
            if(editor.commit()){
                Intent intent = new Intent(UserDashboard.this, Login.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK);
                UserDashboard.this.startActivity(intent);
                finish();

            }
        }

        if( id == R.id.menu_item_delete_user){

            Call<Void> deletecall = apiInterface.DELETE_EMPLOYER(accessToken.getAccess_token());
            deletecall.enqueue(new Callback<Void>() {
                @Override
                public void onResponse(Call<Void> call, Response<Void> response) {
                    if(response.isSuccessful()){

                        Toast.makeText(UserDashboard.this, "Account deleted", Toast.LENGTH_SHORT).show();
                        
                        Intent intent = new Intent(UserDashboard.this, MainActivity.class);
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                        finish();
                    }
                }

                @Override
                public void onFailure(Call<Void> call, Throwable t) {

                }
            });

        }




        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_camera) {
            // Handle the camera action
        } else if (id == R.id.nav_gallery) {

        } else if (id == R.id.nav_slideshow) {

        } else if (id == R.id.nav_manage) {

        } else if (id == R.id.nav_share) {

        } else if (id == R.id.nav_send) {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    protected void onResume() {
        super.onResume();
        checkAvaileble();
        checkOpenIssue();
    }

    private void checkAvaileble(){

        if(json == null || json.equals("")){
            Intent myIntent = new Intent(this, MainActivity.class);
            startActivity(myIntent);
        }
    }




  private void checkSubscribedtoEmployer(){

      Call<Employee> getemployeecall = apiInterface.GET_EMPLOYEE_FROM_TOKEN(accessToken.getAccess_token());

      getemployeecall.enqueue(new Callback<Employee>() {
          @Override
          public void onResponse(Call<Employee> call, Response<Employee> response) {

              if(response.isSuccessful()){

                  //if no employer has assigned
                  if(response.body().employer == null){
                      Intent intent = new Intent(UserDashboard.this, NoEmployerAssigned.class);
                      startActivity(intent);
                      finish();

                  }

                  else{
                      employee = response.body();
                      //  tv_name.setText(employee.username);
                      //  tv_extrainfo.setText("Hi, " + employee.givenname + employee.familyname );
                      checkOpenIssue();
                  }





              }

          }

          @Override
          public void onFailure(Call<Employee> call, Throwable t) {

          }
      });

  }


  private void checkOpenIssue(){

      Call<Issue> get_open_issue = apiInterface.GET_OPEN_ISSUE(accessToken.getAccess_token());

      get_open_issue.enqueue(new Callback<Issue>() {
          @Override
          public void onResponse(Call<Issue> call, Response<Issue> response) {
              if(response.isSuccessful()){
                  Intent intent = new Intent(UserDashboard.this, OpenIssue.class);
                  startActivity(intent);
                  finish();
              }


              else{
                  setContentView(R.layout.activity_user_dashboard);

                  FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
                  recyclerView = (RecyclerView) findViewById(R.id.issue_list);
                  LinearLayoutManager llm = new LinearLayoutManager(UserDashboard.this);
                  recyclerView.setLayoutManager(llm);

                  tv_name = (TextView) findViewById(R.id.name);
                  tv_extrainfo = (TextView) findViewById(R.id.extrainfo);

                  DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
                  Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
                  setSupportActionBar(toolbar);

                  ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                          UserDashboard.this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
                  drawer.addDrawerListener(toggle);
                  toggle.syncState();

                  NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
                  navigationView.setNavigationItemSelectedListener(UserDashboard.this);


                  fab.setOnClickListener(new View.OnClickListener() {
                      @Override
                      public void onClick(View view) {
                          Intent myIntent = new Intent(UserDashboard.this, AddIssueActivity.class);
                          UserDashboard.this.startActivity(myIntent);
                      }
                  });
              }


                 }

          @Override
          public void onFailure(Call<Issue> call, Throwable t) {

          }
      });


  }

}
