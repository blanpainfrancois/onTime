package com.dytstudio.signup.Dashboard.userdashboardfragments;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.dytstudio.signup.Dashboard.UserDashboard;
import com.dytstudio.signup.Issues.AddIssue;
import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.Issue;
import com.dytstudio.signup.R;
import com.dytstudio.signup.Util.APIClient;
import com.dytstudio.signup.Util.APIInterface;
import com.github.johnpersano.supertoasts.library.Style;
import com.github.johnpersano.supertoasts.library.SuperToast;
import com.github.johnpersano.supertoasts.library.utils.PaletteUtils;
import com.google.gson.Gson;

import java.util.Comparator;
import java.util.List;

import de.codecrafters.tableview.SortableTableView;
import de.codecrafters.tableview.TableView;
import de.codecrafters.tableview.model.TableColumnWeightModel;
import de.codecrafters.tableview.toolkit.SimpleTableHeaderAdapter;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A fragment representing a list of Items.
 * <p/>
 * Activities containing this fragment MUST implement the {@link OnListFragmentInteractionListener}
 * interface.
 */
public class IssueFragment extends Fragment {

    // TODO: Customize parameter argument names
    private static final String ARG_COLUMN_COUNT = "column-count";
    // TODO: Customize parameters
    private int mColumnCount = 1;
    private OnListFragmentInteractionListener mListener;

    private static final String[] TABLE_HEADERS = { "ID", "Reason", "Duration"};


    private List<Issue> issues;

    AccessToken accessToken;
    SharedPreferences mPrefs;
    String json;
    APIInterface apiInterface;

    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public IssueFragment() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static IssueFragment newInstance(int columnCount) {
        IssueFragment fragment = new IssueFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mColumnCount = getArguments().getInt(ARG_COLUMN_COUNT);

        }


    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_issue_list, container, false);
        SortableTableView tableView = (SortableTableView) view.findViewById(R.id.tableView);
        tableView.setColumnCount(4);



            mPrefs = PreferenceManager.getDefaultSharedPreferences(getContext());
            apiInterface = APIClient.getClient().create(APIInterface.class);
            Gson gson = new Gson();
            json = mPrefs.getString("token", "");
            accessToken = gson.fromJson(json, AccessToken.class);


            Call<List<Issue>> issues_call = apiInterface.GET_ISSUES(accessToken.getAccess_token());

            issues_call.enqueue(new Callback<List<Issue>>() {
                @Override
                public void onResponse(Call<List<Issue>> call, Response<List<Issue>> response) {
                    if(response.isSuccessful()){
                        tableView.setHeaderAdapter(new SimpleTableHeaderAdapter(getContext(), TABLE_HEADERS));
                        tableView.setDataAdapter(new IssueTableAdapter(getContext(), response.body()));
                        tableView.setColumnComparator(0, new IssueIDComparator());

                    }
                    else{
                        new SuperToast(getContext())
                                .setText("Issues not loaded")
                                .setDuration(Style.DURATION_SHORT)
                                .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_GREEN))
                                .setAnimations(Style.ANIMATIONS_POP)
                                .show();
                    }

                }

                @Override
                public void onFailure(Call<List<Issue>> call, Throwable t) {
                    new SuperToast(getContext())
                            .setText("Issues not loaded")
                            .setDuration(Style.DURATION_SHORT)
                            .setColor(PaletteUtils.getTransparentColor(PaletteUtils.MATERIAL_GREEN))
                            .setAnimations(Style.ANIMATIONS_POP)
                            .show();
                }
            });

        FloatingActionButton fab = (FloatingActionButton) view.findViewById(R.id.fab);
        fab.bringToFront();

        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(getContext(), AddIssue.class);
                startActivity(myIntent);
            }
        });
        return view;

        }




    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnListFragmentInteractionListener) {
            mListener = (OnListFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnListFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p/>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnListFragmentInteractionListener {
        // TODO: Update argument type and name
        void onListFragmentInteraction(Issue item);
    }


    private static class IssueIDComparator implements Comparator<Issue> {
        @Override
        public int compare(Issue issue1, Issue issue2) {
            return issue1.issueID.compareTo(issue2.issueID);
        }
    }
}
