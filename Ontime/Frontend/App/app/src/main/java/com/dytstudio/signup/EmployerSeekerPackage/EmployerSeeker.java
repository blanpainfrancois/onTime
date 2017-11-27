package com.dytstudio.signup.EmployerSeekerPackage;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.animation.OvershootInterpolator;

import com.arlib.floatingsearchview.FloatingSearchView;
import com.dytstudio.signup.APIClient;
import com.dytstudio.signup.APIInterface;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Employer;
import com.dytstudio.signup.R;
import com.google.gson.Gson;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import jp.wasabeef.recyclerview.adapters.AlphaInAnimationAdapter;
import jp.wasabeef.recyclerview.adapters.ScaleInAnimationAdapter;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class EmployerSeeker extends AppCompatActivity {
    SharedPreferences mPrefs;
    AccessToken accessToken;
    FloatingSearchView searchView;
    APIInterface apiInterface;
    List<Employer> employers;

    RecyclerView recyclerView;
    EmployerAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_employer_seeker);

        recyclerView = (RecyclerView) findViewById(R.id.search_results_list);


        mPrefs = PreferenceManager.getDefaultSharedPreferences(this);
        apiInterface = APIClient.getClient().create(APIInterface.class);

        //gettokenfromlocalstorage
        Gson gson = new Gson();
        String json = mPrefs.getString("token", "");
        accessToken = gson.fromJson(json, AccessToken.class);

        final Call<List<Employer>> employerCall = apiInterface.GET_EMPLOYERS(accessToken.getAccess_token());
        
        employerCall.enqueue(new Callback<List<Employer>>() {
            @Override
            public void onResponse(Call<List<Employer>> call, Response<List<Employer>> response) {
                if(response.isSuccessful()){
                    employers = response.body();

                    adapter = new EmployerAdapter(getApplicationContext(), accessToken ,employers);

                    ScaleInAnimationAdapter scaleInAnimationAdapter = new ScaleInAnimationAdapter(adapter);
                    scaleInAnimationAdapter.setInterpolator(new OvershootInterpolator());

                    scaleInAnimationAdapter.setFirstOnly(false);

                    recyclerView.setAdapter(scaleInAnimationAdapter);

                }
            }

            @Override
            public void onFailure(Call<List<Employer>> call, Throwable t) {

            }
        });




        LinearLayoutManager llm = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(llm);




        searchView = (FloatingSearchView) findViewById(R.id.floating_search_view);

        searchView.setOnQueryChangeListener(new FloatingSearchView.OnQueryChangeListener() {
            @Override
            public void onSearchTextChanged(String oldQuery, final String newQuery) {

                List<Employer> queriedEmployers = employers.stream()
                        .filter(item -> item.name.toLowerCase().contains(newQuery))
                        .collect(Collectors.toList());

                if(!queriedEmployers.isEmpty()){
                    adapter = new EmployerAdapter(getApplicationContext(), accessToken, queriedEmployers);

                    ScaleInAnimationAdapter scaleInAnimationAdapter = new ScaleInAnimationAdapter(adapter);
                    scaleInAnimationAdapter.setInterpolator(new OvershootInterpolator());

                    scaleInAnimationAdapter.setFirstOnly(false);

                    recyclerView.setAdapter(scaleInAnimationAdapter);

                }


            }
        });


    }
}
