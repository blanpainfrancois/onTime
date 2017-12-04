package com.dytstudio.signup.Dashboard;

import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.dytstudio.signup.Issues.Issue;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.R;

import java.util.List;

/**
 * Created by Mo on 4/12/2017.
 */

public class IssueAdapter extends RecyclerView.Adapter<IssueAdapter.ViewHolder> {

    List<Issue> issues ;
    AccessToken accessToken;


    public IssueAdapter(List<Issue> issues, AccessToken accessToken) {
        this.issues = issues;
        Log.v("issues", issues.toString());
        this.accessToken = accessToken;
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {


        TextView tv_issue_title;
        TextView tv_issue_message;

        public ViewHolder(View itemView) {
            super(itemView);

            tv_issue_title = (TextView) itemView.findViewById(R.id.tv_issue_title);
            tv_issue_message = (TextView) itemView.findViewById(R.id.tv_issue_message);



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

        holder.tv_issue_title.setText(issues.get(position).reason.reasonTitle);
        holder.tv_issue_message.setText(issues.get(position).reason.reason);

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
