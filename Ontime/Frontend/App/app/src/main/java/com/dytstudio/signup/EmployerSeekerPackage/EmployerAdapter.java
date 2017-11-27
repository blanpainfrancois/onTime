package com.dytstudio.signup.EmployerSeekerPackage;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.dytstudio.signup.APIClient;
import com.dytstudio.signup.APIInterface;
import com.dytstudio.signup.Login;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Employer;
import com.dytstudio.signup.R;
import com.dytstudio.signup.UserDashboard;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by Mo on 27/11/2017.
 */

public class EmployerAdapter extends RecyclerView.Adapter<EmployerAdapter.ViewHolder> {

    List<Employer> employers;
    APIInterface apiInterface;
    Context context;
    AccessToken accessToken;


    public static class ViewHolder extends RecyclerView.ViewHolder {

        Employer employer;
        CardView cv;
        TextView employerid;
        TextView employername;
        ImageView employerphoto;



        public ViewHolder(View v) {
            super(v);

            cv = (CardView)itemView.findViewById(R.id.cv);
            employerid = (TextView)itemView.findViewById(R.id.tv_employer_id);
            employername = (TextView)itemView.findViewById(R.id.tv_employer_name);
            employerphoto = (ImageView)itemView.findViewById(R.id.person_photo);



        }
    }



    public EmployerAdapter(Context context, AccessToken accessToken,  List<Employer> employers){
        this.employers = employers;
        this.context = context;
        this.accessToken = accessToken;
        apiInterface = APIClient.getClient().create(APIInterface.class);

    }

    @Override
    public EmployerAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.employer_choose_card, parent, false);


        ViewHolder viewHolder = new ViewHolder(v);

        v.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Call<Void> call = apiInterface.POST_EMPLOYEE_TO_EMPLOYER(accessToken.getAccess_token(),viewHolder.employer.identityID);
                call.enqueue(new Callback() {
                    @Override
                    public void onResponse(Call call, Response response) {
                        if(response.isSuccessful()){
                            context.startActivity(new Intent(context, UserDashboard.class));


                        }
                    }

                    @Override
                    public void onFailure(Call call, Throwable t) {

                    }
                });


            }
        });

        return viewHolder;
    }

    @Override
    public void onBindViewHolder(EmployerAdapter.ViewHolder holder, int position) {

        holder.employerid.setText(employers.get(position).identityID);
        holder.employername.setText(employers.get(position).name);
        holder.employer = employers.get(position);
       // holder.employerphoto.setImageResource(persons.get(i).photoId);

    }

    @Override
    public int getItemCount() {
        return employers.size();
    }

    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }
}
