package com.dytstudio.signup.Dashboard;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import com.dytstudio.signup.Issues.AddIssueActivity;
import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.MainActivity;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UserDashboard extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    APIInterface apiInterface;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_dashboard);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        
        apiInterface = APIClient.getClient().create(APIInterface.class);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(UserDashboard.this, AddIssueActivity.class);
                UserDashboard.this.startActivity(myIntent);
            }
        });

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);



        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);



        Toast.makeText(this, accessToken.getAccess_token(), Toast.LENGTH_SHORT).show();



        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
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

        checkavaileble();

    }

    private void checkavaileble(){

        if(json == null || json.equals("")){
            Intent myIntent = new Intent(this, MainActivity.class);
            startActivity(myIntent);
        }
    }


}
