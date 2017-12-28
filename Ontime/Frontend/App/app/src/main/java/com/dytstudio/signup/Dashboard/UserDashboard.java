package com.dytstudio.signup.Dashboard;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
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

import com.dytstudio.signup.Dashboard.userdashboardfragments.IssueFragment;
import com.dytstudio.signup.Dashboard.userdashboardfragments.dummy.DummyContent;
import com.dytstudio.signup.Issues.AddIssue;
import com.dytstudio.signup.Issues.OpenIssue;
import com.dytstudio.signup.Models.Employee;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.MainActivity;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.github.johnpersano.supertoasts.library.Style;
import com.github.johnpersano.supertoasts.library.SuperToast;
import com.github.johnpersano.supertoasts.library.utils.PaletteUtils;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UserDashboard extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener , IssueFragment.OnListFragmentInteractionListener {

    static boolean active = false;

    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    APIInterface apiInterface;

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
                startActivity(intent);
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

        active = true;


        checkSubscribedtoEmployer();
        checkOpenIssue();

    }

    @Override
    public void onStart() {
        super.onStart();
        active = true;
    }

    @Override
    protected void onPause(){
        super.onPause();
        active = false;


    }

    @Override
    public void onStop() {
        super.onStop();
        active = false;
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

                      if(employee.employer.address == null){
                          Intent intent = new Intent(UserDashboard.this, employerhasnoaddress.class);
                          startActivity(intent);
                          finish();
                      }

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

              if(active){
                  if(response.isSuccessful()){
                      Intent intent = new Intent(UserDashboard.this, OpenIssue.class);
                      startActivity(intent);
                      finish();
                  }

                  else{



                      setContentView(R.layout.activity_user_dashboard);



                      tv_name = (TextView) findViewById(R.id.name);
                      tv_extrainfo = (TextView) findViewById(R.id.extrainfo);

                      DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
                      Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
                      setSupportActionBar(toolbar);



                      FragmentManager fragmentManager = getSupportFragmentManager();
                      FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();

                      IssueFragment issueFragment = new IssueFragment();
                      fragmentTransaction.add(R.id.ll_userdashboard, issueFragment);
                      fragmentTransaction.commit();


                      ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                              UserDashboard.this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
                      drawer.addDrawerListener(toggle);
                      toggle.syncState();

                      NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
                      navigationView.setNavigationItemSelectedListener(UserDashboard.this);




                  }
              }







                 }

          @Override
          public void onFailure(Call<Issue> call, Throwable t) {

          }
      });


  }

    @Override
    public void onListFragmentInteraction(Issue item) {




    }
}
