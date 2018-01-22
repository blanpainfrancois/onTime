package com.dytstudio.signup.Dashboard.userdashboardfragments;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.dytstudio.signup.Models.Issue;

import java.util.ArrayList;
import java.util.List;

import de.codecrafters.tableview.TableDataAdapter;

/**
 * Created by mo on 22/01/2018.
 */

public class IssueTableAdapter extends TableDataAdapter<Issue> {

    Context context;

    public IssueTableAdapter(Context context, List<Issue> data) {
        super(context, data);
        this.context = context;
    }

    @Override
    public View getCellView(int rowIndex, int columnIndex, ViewGroup parentView) {
        Issue issue = getRowData(rowIndex);
        View renderedView = null;

        switch (columnIndex) {
            case 0:
                renderedView = renderTextView(String.valueOf(issue.issueID));
                break;
            case 1:
                renderedView = renderTextView(issue.reason.reason);
                break;
            case 2:
                renderedView = renderTextView(issue.getPeriod().substring(0, 8));
                break;

        }

        return renderedView;
    }

    private View renderTextView(String string){

        TextView t = new TextView(context);
        t.setText(string);
        return t;
    }

}
