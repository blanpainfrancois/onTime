package com.dytstudio.signup.Dashboard;

import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.dytstudio.signup.Issues.Issue;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by Mo on 4/12/2017.
 */

public class IssueAdapter extends RecyclerView.Adapter<IssueAdapter.ViewHolder> {

    List<Issue> issues ;
    AccessToken accessToken;
    APIInterface apiInterface;


    public IssueAdapter(List<Issue> issues, AccessToken accessToken) {
        this.issues = issues;
        Log.v("issues", issues.toString());
        this.accessToken = accessToken;
        apiInterface = APIClient.getClient().create(APIInterface.class);

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {


        TextView tv_issue_title;
        TextView tv_issue_message;
        RelativeLayout rl_status;

        public ViewHolder(View itemView) {
            super(itemView);

            tv_issue_title = (TextView) itemView.findViewById(R.id.tv_issue_title);
            tv_issue_message = (TextView) itemView.findViewById(R.id.tv_issue_message);
            rl_status = (RelativeLayout) itemView.findViewById(R.id.rl_status_layout);



        }
    }


    @Override
    public IssueAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.issuecard, parent, false);

        ViewHolder viewHolder = new ViewHolder(v);

        return viewHolder;
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {

        holder.tv_issue_title.setText(issues.get(position).reason.reasontitle);
        holder.tv_issue_message.setText(issues.get(position).reason.reason);

        if(issues.get(position).issueClosed){
            holder.rl_status.setBackgroundColor(Color.GREEN);
        }
        else{
            holder.rl_status.setBackgroundColor(Color.RED);
        }

        holder.rl_status.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Call<Void> changestatus = apiInterface.CHANGE_ISSUESTATUS(accessToken.getAccess_token(), issues.get(position).issueID);

                changestatus.enqueue(new Callback<Void>() {
                    @Override
                    public void onResponse(Call<Void> call, Response<Void> response) {
                        if(response.isSuccessful()){
                            Call<List<Issue>> issuecall = apiInterface.GET_ISSUES(accessToken.getAccess_token());
                            issuecall.enqueue(new Callback<List<Issue>>() {
                                @Override
                                public void onResponse(Call<List<Issue>> call, Response<List<Issue>> response) {
                                    if(response.isSuccessful()){

                                        issues = response.body();
                                        notifyDataSetChanged();

                                    }

                                }

                                @Override
                                public void onFailure(Call<List<Issue>> call, Throwable t) {


                                }
                            });
                        }
                    }

                    @Override
                    public void onFailure(Call<Void> call, Throwable t) {

                    }
                });

            }
        });

    }

    @Override
    public int getItemCount() {

        return issues.size();
    }


    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }




}
