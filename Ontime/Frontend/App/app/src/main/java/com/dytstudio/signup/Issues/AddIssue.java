package com.dytstudio.signup.Issues;

import android.app.ProgressDialog;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.dytstudio.signup.Login.Login;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.Models.Location;
import com.dytstudio.signup.Models.Reason;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.github.johnpersano.supertoasts.library.Style;
import com.github.johnpersano.supertoasts.library.SuperToast;
import com.github.johnpersano.supertoasts.library.utils.PaletteUtils;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.CircleOptions;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.LatLngBounds;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.gson.Gson;

import io.nlopez.smartlocation.OnLocationUpdatedListener;
import io.nlopez.smartlocation.SmartLocation;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddIssue extends AppCompatActivity {

    FloatingActionButton btn_save_issue;
    EditText et_reason_subject, et_reason_message;
    Spinner spinner;
    LinearLayout ll_reasonlayout;

    APIInterface apiInterface;
    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;

    Location locationemployer;

    String selecteditem;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_issue);

        apiInterface = APIClient.getClient().create(APIInterface.class);
        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);
        Gson gson = new Gson();
        json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

      //  et_reason_message = (EditText) findViewById(R.id.et_reason_message);
        et_reason_subject = (EditText) findViewById(R.id.et_reason_subject);
        btn_save_issue = (FloatingActionButton) findViewById(R.id.btn_save_issue);
        spinner = (Spinner) findViewById(R.id.reasons_spinner);
        et_reason_message = new EditText(getApplicationContext());
        ll_reasonlayout = (LinearLayout) findViewById(R.id.ll_reasonlayout);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.reasons, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                 selecteditem = (String) parent.getItemAtPosition(position);

                 if(selecteditem.equals("Custom")){
                     ll_reasonlayout.addView(et_reason_message);
                 }
                 else{
                     ll_reasonlayout.removeView(et_reason_message);
                 }

            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });


        btn_save_issue.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(isEmpty(et_reason_message) && isEmpty(et_reason_subject)){
                    Toast.makeText(AddIssue.this, "Issue cannot be empty", Toast.LENGTH_SHORT).show();
                }
                else{
                    btn_save_issue.setEnabled(false);

                    Reason r = new Reason();
                    r.reasontitle = et_reason_subject.getText().toString();

                    if (selecteditem.equals("Custom")) {

                        r.reason = et_reason_message.getText().toString();

                    }
                    else{
                        r.reason = selecteditem;
                    }

                    Issue issue = new Issue();
                    issue.reason = r;
                    issue.issueClosed = false;
                    issue.location = new Location();

                    Call<Issue> issue_call = apiInterface.POST_ISSUE(accessToken.getAccess_token(), issue );

                    ProgressDialog pd = new ProgressDialog(AddIssue.this,R.style.spinner);
                    pd.setCancelable(false);
                    pd.setProgressStyle(android.R.style.Widget_ProgressBar_Small);
                    pd.show();

                    issue_call.enqueue(new Callback<Issue>() {
                        @Override
                        public void onResponse(Call<Issue> call, Response<Issue> response) {
                            if(response.isSuccessful()){
                                pd.hide();
                                new SuperToast(AddIssue.this)
                                        .setText("Report added")
                                        .setDuration(Style.DURATION_SHORT)
                                        .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_GREEN))
                                        .setAnimations(Style.ANIMATIONS_POP)
                                        .show();
                                finish();
                            }

                            else{
                                btn_save_issue.setEnabled(true);
                                pd.hide();
                                new SuperToast(AddIssue.this)
                                        .setText("Report not added")
                                        .setDuration(Style.DURATION_SHORT)
                                        .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                                        .setAnimations(Style.ANIMATIONS_POP)
                                        .show();
                            }
                        }

                        @Override
                        public void onFailure(Call<Issue> call, Throwable t) {
                            btn_save_issue.setEnabled(true);
                            pd.hide();
                            new SuperToast(AddIssue.this)
                                    .setText("Report not added")
                                    .setDuration(Style.DURATION_SHORT)
                                    .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_RED))
                                    .setAnimations(Style.ANIMATIONS_POP)
                                    .show();

                        }
                    });



                }







            }
        });

        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.mapaddissue);

        Call<Location> locationcall = apiInterface.GET_LOCATION_FROM_ADDRESS_EMPLOYER(accessToken.getAccess_token());
        locationcall.enqueue(new Callback<Location>() {
            @Override
            public void onResponse(Call<Location> call, Response<Location> response) {
                if(response.isSuccessful()){
                    locationemployer = response.body();

                    mapFragment.getMapAsync(new OnMapReadyCallback() {
                        @Override
                        public void onMapReady(GoogleMap googleMap) {
                            try{
                                googleMap.setMyLocationEnabled(true);
                                googleMap.setTrafficEnabled(true);
                                LatLng latLng = new LatLng(locationemployer.lat,locationemployer.lng);
                                googleMap.addMarker(new MarkerOptions().position(latLng).title("locationemployeer"));
                                googleMap.addCircle(new CircleOptions().center(latLng).strokeWidth(0).fillColor(Color.RED).radius(30));



                                SmartLocation.with(AddIssue.this).location().oneFix().start(new OnLocationUpdatedListener() {
                                    @Override
                                    public void onLocationUpdated(android.location.Location location) {

                                        LatLng mylocation = new LatLng(location.getLatitude(),location.getLongitude());

                                        CameraPosition locationcamera = new CameraPosition.Builder()
                                                .target(mylocation)
                                                .zoom(14)
                                                .build();

                                        CameraPosition employercameraposition = new CameraPosition.Builder()
                                                .target(latLng)
                                                .zoom(14)
                                                .build();
                                        CameraPosition initcamera = new CameraPosition.Builder()
                                                .target(latLng)
                                                .zoom(8)
                                                .build();

                                        googleMap.moveCamera(CameraUpdateFactory.newCameraPosition(initcamera));
                                        LatLngBounds.Builder builder = new LatLngBounds.Builder();
                                        builder.include(latLng).include(mylocation);


                                        googleMap.animateCamera(CameraUpdateFactory.newLatLngBounds(builder.build(), 200));




                                    }
                                });



                            }
                            catch(SecurityException e){
                                e.printStackTrace();
                            }

                        }
                    });

                }
            }

            @Override
            public void onFailure(Call<Location> call, Throwable t) {

            }
        });






    }



    private boolean isEmpty(EditText etText) {
        return etText.getText().toString().trim().length() == 0;
    }
}
