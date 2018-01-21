package com.dytstudio.signup.Issues;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.ActivityNotFoundException;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.location.Location;
import android.net.Uri;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.dytstudio.signup.Dashboard.UserDashboard;
import com.dytstudio.signup.Issues.Geofencing.GeofencerService;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.github.johnpersano.supertoasts.library.Style;
import com.github.johnpersano.supertoasts.library.SuperToast;
import com.github.johnpersano.supertoasts.library.utils.PaletteUtils;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.GeofencingClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;

import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.CircleOptions;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.LatLngBounds;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.gson.Gson;

import org.joda.time.DateTime;
import org.joda.time.Period;
import org.joda.time.format.PeriodFormatter;
import org.joda.time.format.PeriodFormatterBuilder;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Timer;
import java.util.TimerTask;

import io.nlopez.smartlocation.OnLocationUpdatedListener;
import io.nlopez.smartlocation.SmartLocation;
import io.nlopez.smartlocation.location.config.LocationParams;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class OpenIssue extends AppCompatActivity {

    APIInterface apiInterface;
    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    Issue issue;
    Thread t;
    RequestQueue queue;

    com.dytstudio.signup.Models.Location locationEmployer;

    GoogleMap googlemap;
    Location currentlocation;
    LatLng employerlocation;
    private GeofencingClient mGeofencingClient;

    Button btn_closeissue, btn_delete_issue, btn_open_in_waze;
    TextView tv_title, tv_reason_body, tv_open_time;

    final String GOOGLEDIRECTIONMATRIXAPI = "AIzaSyBaaaCvAoDIrm3_Ah14-yLhN0E3ko1F_MM";



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        apiInterface = APIClient.getClient().create(APIInterface.class);
        mGeofencingClient = LocationServices.getGeofencingClient(this);
        queue = Volley.newRequestQueue(OpenIssue.this);

         t = gettimer();
         t.start();

        Call<Issue> get_open_issue = apiInterface.GET_OPEN_ISSUE(accessToken.getAccess_token());

        get_open_issue.enqueue(new Callback<Issue>() {
            @Override
            public void onResponse(Call<Issue> call, Response<Issue> response) {
                if(response.isSuccessful()){
                    issue = response.body();

                    setContentView(R.layout.activity_open_issue);

                    tv_title = (TextView) findViewById(R.id.title_open_issue);
                    btn_closeissue = (Button) findViewById(R.id.btn_close_issue);
                    tv_reason_body = (TextView) findViewById(R.id.close_issue_text);
                    tv_open_time = (TextView) findViewById(R.id.tv_issue_open);
                    btn_delete_issue = (Button) findViewById(R.id.btn_deleteissue);
                    btn_open_in_waze = (Button) findViewById(R.id.btn_openinwaze);

                    DialogInterface.OnClickListener dialogClickListener = new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            switch (which){
                                case DialogInterface.BUTTON_POSITIVE:

                                    ProgressDialog pd = new ProgressDialog(OpenIssue.this,R.style.spinner);
                                    pd.setCancelable(false);
                                    pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
                                    pd.show();


                                    Call<Void> delete_call = apiInterface.DELETE_OPEN_ISSUE(accessToken.getAccess_token());
                                    delete_call.enqueue(new Callback<Void>() {
                                        @Override
                                        public void onResponse(Call<Void> call, Response<Void> response) {
                                            if(response.isSuccessful()){
                                                new SuperToast(OpenIssue.this)
                                                        .setText("Issue deleted")
                                                        .setDuration(Style.DURATION_SHORT)
                                                        .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_GREEN))
                                                        .setAnimations(Style.ANIMATIONS_POP)
                                                        .show();
                                                t.interrupt();
                                                pd.hide();
                                                Intent myIntent = new Intent(OpenIssue.this, UserDashboard.class);
                                                startActivity(myIntent);
                                                finish();

                                            }
                                            else{
                                                new SuperToast(OpenIssue.this)
                                                        .setText("Issue not deleted")
                                                        .setDuration(Style.DURATION_SHORT)
                                                        .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                                                        .setAnimations(Style.ANIMATIONS_POP)
                                                        .show();

                                                pd.hide();

                                            }
                                        }

                                        @Override
                                        public void onFailure(Call<Void> call, Throwable t) {
                                            new SuperToast(OpenIssue.this)
                                                    .setText("Issue not deleted")
                                                    .setDuration(Style.DURATION_SHORT)
                                                    .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                                                    .setAnimations(Style.ANIMATIONS_POP)
                                                    .show();

                                            pd.hide();
                                        }
                                    });
                                    break;

                                case DialogInterface.BUTTON_NEGATIVE:
                                    new SuperToast(OpenIssue.this)
                                            .setText("Issue not deleted")
                                            .setDuration(Style.DURATION_SHORT)
                                            .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                                            .setAnimations(Style.ANIMATIONS_POP)
                                            .show();                                    break;
                            }
                        }
                    };


                    btn_delete_issue.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {
                            AlertDialog.Builder builder = new AlertDialog.Builder(OpenIssue.this, R.style.DialogTheme);
                            builder.setMessage("Are you sure to delete this issue?").setPositiveButton("Yes", dialogClickListener)
                                    .setNegativeButton("No", dialogClickListener).show();
                        }
                    });


                    Call<com.dytstudio.signup.Models.Location> getlocationemployercall = apiInterface.GET_LOCATION_FROM_ADDRESS_EMPLOYER(accessToken.getAccess_token());
                    getlocationemployercall.enqueue(new Callback<com.dytstudio.signup.Models.Location>() {
                        @Override
                        public void onResponse(Call<com.dytstudio.signup.Models.Location> call, Response<com.dytstudio.signup.Models.Location> response) {

                            if(response.isSuccessful()){
                                locationEmployer = response.body();

                                btn_open_in_waze.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View view) {

                                        DialogInterface.OnClickListener dialogClickListener = new DialogInterface.OnClickListener() {
                                            @Override
                                            public void onClick(DialogInterface dialog, int which) {
                                                switch (which){
                                                    case DialogInterface.BUTTON_POSITIVE:
                                                        try
                                                        {
                                                            // Launch Waze to look for Hawaii:
                                                            String url = "https://waze.com/ul?ll=" + String.valueOf(locationEmployer.lat)+","+ String.valueOf(locationEmployer.lng)+"&navigate=yes";
                                                            Log.v("waze", url);

                                                            Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( url ) );
                                                            startActivity( intent );
                                                        }
                                                        catch ( ActivityNotFoundException ex  )
                                                        {
                                                            // If Waze is not installed, open it in Google Play:
                                                            Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( "market://details?id=com.waze" ) );
                                                            startActivity(intent);
                                                        }                                                        break;

                                                    case DialogInterface.BUTTON_NEGATIVE:
                                                        //No button clicked
                                                        break;
                                                }
                                            }
                                        };

                                        AlertDialog.Builder builder = new AlertDialog.Builder(OpenIssue.this, R.style.DialogTheme);
                                        builder.setMessage("Do you want to open Waze?").setPositiveButton("Yes", dialogClickListener)
                                                .setNegativeButton("No", dialogClickListener).show();

                                    }
                                });


                                SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                                        .findFragmentById(R.id.map);
                                mapFragment.getMapAsync(new OnMapReadyCallback() {
                                    @Override
                                    public void onMapReady(GoogleMap googleMap) {

                                        googlemap = googleMap;

                                        Intent intent = new Intent(OpenIssue.this, GeofencerService.class);
                                        intent.putExtra("lat", locationEmployer.lat);
                                        intent.putExtra("lng", locationEmployer.lng);
                                        intent.putExtra("issueID", issue.issueID);


                                        startService(intent);
                                        postETA(accessToken, issue);

                                        try{
                                            googlemap.setMyLocationEnabled(true);

                                        }
                                        catch (SecurityException e){
                                            e.printStackTrace();
                                        }

                                        employerlocation = new LatLng(locationEmployer.lat,locationEmployer.lng);

                                        googlemap.addMarker(new MarkerOptions().position(employerlocation).title("locationemployeer"));
                                        googlemap.addCircle(new CircleOptions().center(employerlocation).strokeWidth(0).fillColor(Color.RED).radius(30));

                                        SmartLocation.with(OpenIssue.this).location().oneFix().start(new OnLocationUpdatedListener() {
                                            @Override
                                            public void onLocationUpdated(Location location) {


                                                currentlocation = location;

                                                    CameraPosition initcamera = new CameraPosition.Builder()
                                                            .target(new LatLng(location.getLatitude(),location.getLongitude()))
                                                            .zoom(8)
                                                            .build();

                                                    CameraPosition locationcamera = new CameraPosition.Builder()
                                                            .target(new LatLng(location.getLatitude(),location.getLongitude()))
                                                            .zoom(14)
                                                            .build();

                                                    CameraPosition employercameraposition = new CameraPosition.Builder()
                                                            .target(new LatLng(locationEmployer.lat,locationEmployer.lng))
                                                            .zoom(14)
                                                            .build();

                                                    googlemap.moveCamera(CameraUpdateFactory.newCameraPosition(initcamera));

                                                    googlemap.getUiSettings().setZoomControlsEnabled(true);

                                                googlemap.animateCamera(CameraUpdateFactory.newCameraPosition(locationcamera), 5000, new GoogleMap.CancelableCallback() {
                                                        @Override
                                                        public void onFinish() {

                                                            googlemap.animateCamera(CameraUpdateFactory.newCameraPosition(employercameraposition), 4000, new GoogleMap.CancelableCallback() {
                                                                @Override
                                                                public void onFinish() {


                                                                        LatLngBounds.Builder builder = new LatLngBounds.Builder();
                                                                        builder.include(new LatLng(location.getLatitude(),location.getLongitude())).include(new LatLng(locationEmployer.lat,locationEmployer.lng));




                                                                    googlemap.animateCamera(CameraUpdateFactory.newLatLngBounds(builder.build(), 200), 2000, new GoogleMap.CancelableCallback() {
                                                                        @Override
                                                                        public void onFinish() {

                                                                            changelocationmarker();

                                                                        }

                                                                        @Override
                                                                        public void onCancel() {
                                                                            changelocationmarker();

                                                                        }

                                                                    });


                                                                }

                                                                @Override
                                                                public void onCancel() {
                                                                    changelocationmarker();

                                                                }
                                                            });
                                                        }

                                                        @Override
                                                        public void onCancel() {
                                                            changelocationmarker();

                                                        }
                                                    });
                                                }

                                        });

                                    }
                                });




                            }

                        }

                        @Override
                        public void onFailure(Call<com.dytstudio.signup.Models.Location> call, Throwable t) {

                        }
                    });





                    tv_title.setText(issue.reason.reasontitle);
                    tv_reason_body.setText(issue.reason.reason);





                    btn_closeissue.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {

                            closeissue();

                        }
                    });

                }
            }

            @Override
            public void onFailure(Call<Issue> call, Throwable t) {

            }
        });




    }




    private void closeissue(){


        Call<Void> closeissuecall = apiInterface.close_issue(accessToken.getAccess_token(), issue.issueID);

        ProgressDialog pd = new ProgressDialog(OpenIssue.this,R.style.spinner);
        pd.setCancelable(false);
        pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
        pd.show();


        closeissuecall.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.isSuccessful()){

                    new SuperToast(OpenIssue.this)
                            .setText("Issue closed")
                            .setDuration(Style.DURATION_SHORT)
                            .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_GREEN))
                            .setAnimations(Style.ANIMATIONS_POP)
                            .show();

                    Intent myIntent = new Intent(OpenIssue.this, UserDashboard.class);
                    pd.hide();
                    startActivity(myIntent);
                    t.interrupt();
                    finish();
                }

               else {
                    new SuperToast(OpenIssue.this)
                            .setText("Issue not closed")
                            .setDuration(Style.DURATION_SHORT)
                            .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                            .setAnimations(Style.ANIMATIONS_POP)
                            .show();

                    pd.hide();
                }


            }
            

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
            pd.hide();
            }
        });
    }
    private void changelocationmarker(){

        googlemap.clear();
        googlemap.setTrafficEnabled(true);
        googlemap.getUiSettings().setZoomControlsEnabled(true);



        SmartLocation.with(OpenIssue.this).location().config(LocationParams.NAVIGATION).start(new OnLocationUpdatedListener() {
            @Override
            public void onLocationUpdated(Location location) {

                employerlocation = new LatLng(locationEmployer.lat,locationEmployer.lng);

                googlemap.addMarker(new MarkerOptions().position(employerlocation).title("locationemployeer"));
                googlemap.addCircle(new CircleOptions().center(employerlocation).strokeWidth(0).fillColor(Color.RED).radius(75));
                currentlocation = location;

            }
        });
    }

    private void postETA(AccessToken accessToken, Issue issue){

        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                if(currentlocation != null && employerlocation != null){
                    setEta(accessToken, issue, new LatLng(employerlocation.latitude, employerlocation.longitude), new LatLng(currentlocation.getLatitude(), currentlocation.getLongitude()));

                }
            }
        }, 0 , 10000);

    }



    private void setEta(AccessToken accessToken, Issue issue , LatLng workplace, LatLng mylocation ){

        if(workplace != null && mylocation != null){

            String url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + workplace.latitude +"," + workplace.longitude+
                    "&destination="+mylocation.latitude+","+mylocation.longitude+"&key="+GOOGLEDIRECTIONMATRIXAPI;


            JsonObjectRequest jsObjRequest = new JsonObjectRequest
                    (Request.Method.GET, url, null, new com.android.volley.Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject response) {
                            if(response.has("routes")){
                                try{
                                    JSONArray temp1 = response.getJSONArray("routes");
                                    JSONObject temp2 = temp1.getJSONObject(0);
                                    JSONArray temp3 = temp2.getJSONArray("legs");
                                    JSONObject temp4 = temp3.getJSONObject(0);
                                    String ETA = temp4.getJSONObject("duration").getString("text");

                                    Call<Void> postetacall = apiInterface.PUT_TIMESTAMP(accessToken.getAccess_token(), issue.issueID, ETA );
                                    postetacall.enqueue(new Callback<Void>() {
                                        @Override
                                        public void onResponse(Call<Void> call, Response<Void> response) {
                                            if(response.isSuccessful()){

                                            }
                                        }

                                        @Override
                                        public void onFailure(Call<Void> call, Throwable t) {

                                        }
                                    });




                                }catch (JSONException e){
                                    e.printStackTrace();
                                }
                            }
                        }
                    }, new com.android.volley.Response.ErrorListener() {

                        @Override
                        public void onErrorResponse(VolleyError error) {


                        }
                    });

            queue.add(jsObjRequest);

        }






    }



    private Thread gettimer(){


        return new Thread() {

            @Override
            public void run() {
                try {

                    PeriodFormatter HoursMinutesSeconds = new PeriodFormatterBuilder()
                            .printZeroAlways()
                            .minimumPrintedDigits(2)
                            .appendHours()
                            .appendSeparator(":")
                            .printZeroAlways()
                            .minimumPrintedDigits(2)
                            .appendMinutes()
                            .appendSeparator(":")
                            .printZeroAlways()
                            .minimumPrintedDigits(2)
                            .appendSeconds()
                            .toFormatter();

                    while (!isInterrupted()) {
                        Thread.sleep(1000);
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {

                                if(issue != null){
                                    DateTime dt = DateTime.now();

                                    //Door verschillende tijdzones
                                    Period p = new Period(issue.getDateTime(), dt).minusHours(1);

                                    tv_open_time.setText(HoursMinutesSeconds.print(p));
                                }

                            }
                        });
                    }
                } catch (InterruptedException e) {
                }
            }
        };
    }



}
