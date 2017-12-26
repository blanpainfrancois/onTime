package com.dytstudio.signup.Issues;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.location.Location;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dytstudio.signup.Dashboard.UserDashboard;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.google.android.gms.location.FusedLocationProviderClient;
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



    com.dytstudio.signup.Models.Location locationEmployer;
    
    GoogleMap googlemap;
    private FusedLocationProviderClient mFusedLocationClient;
    Location currentlocation;
    MarkerOptions currentmarkeroptions;
    LatLng employerlocation;

    Button btn_closeissue;
    TextView tv_title, tv_reason_body, tv_open_time;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);

        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        apiInterface = APIClient.getClient().create(APIInterface.class);

         t = new Thread() {

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


                    Call<com.dytstudio.signup.Models.Location> getlocationemployercall = apiInterface.GET_LOCATION_FROM_ADDRESS_EMPLOYER(accessToken.getAccess_token());
                    getlocationemployercall.enqueue(new Callback<com.dytstudio.signup.Models.Location>() {
                        @Override
                        public void onResponse(Call<com.dytstudio.signup.Models.Location> call, Response<com.dytstudio.signup.Models.Location> response) {

                            if(response.isSuccessful()){
                                locationEmployer = response.body();

                                Toast.makeText(OpenIssue.this, Double.toString(locationEmployer.lat), Toast.LENGTH_SHORT).show();


                                SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                                        .findFragmentById(R.id.map);
                                mapFragment.getMapAsync(new OnMapReadyCallback() {
                                    @Override
                                    public void onMapReady(GoogleMap googleMap) {

                                        googlemap = googleMap;

                                        googlemap.setMyLocationEnabled(true);

                                        employerlocation = new LatLng(locationEmployer.lat,locationEmployer.lng);

                                        googlemap.addMarker(new MarkerOptions().position(employerlocation).title("locationemployeer"));
                                        googlemap.addCircle(new CircleOptions().center(employerlocation).strokeWidth(0).fillColor(Color.RED).radius(75));

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


                                                                    LatLngBounds edges = new LatLngBounds( new LatLng(locationEmployer.lat,locationEmployer.lng), new LatLng(location.getLatitude(),location.getLongitude()));

                                                                    googlemap.animateCamera(CameraUpdateFactory.newLatLngBounds(edges, 200), 2000, new GoogleMap.CancelableCallback() {
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
                    Intent myIntent = new Intent(OpenIssue.this, UserDashboard.class);
                    pd.hide();
                    startActivity(myIntent);
                    t.interrupt();
                    finish();
                }

               else {
                    pd.hide();
                    Toast.makeText(OpenIssue.this, "Issue not closed", Toast.LENGTH_SHORT).show();
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





}
