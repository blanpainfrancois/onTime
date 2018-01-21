package com.dytstudio.signup.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

/**
 * Created by Mo on 28/11/2017.
 */

public class Issue {

    @SerializedName("issueID")
    @Expose
    public Integer issueID;
    @SerializedName("issueClosed")
    @Expose
    public Boolean issueClosed;
    @SerializedName("reason")
    @Expose
    public Reason reason;
    @SerializedName("timestamp")
    @Expose
    public String timestamp;
    @SerializedName("issueCreated")
    @Expose
    public String issueCreated;
    @SerializedName("issueClosedDate")
    @Expose
    public String issueClosedDate;
    @SerializedName("location")
    @Expose
    public Location location;
    @SerializedName("eta")
    @Expose
    public String eta;

    public Issue(Integer issueID, Boolean issueClosed, Reason reason, String timestamp, String issueCreated, String issueClosedDate, Location location, Object employee, String eta) {
        super();
        this.issueID = issueID;
        this.issueClosed = issueClosed;
        this.reason = reason;
        this.timestamp = timestamp;
        this.issueCreated = issueCreated;
        this.issueClosedDate = issueClosedDate;
        this.location = location;
        this.eta = eta;
    }

    public Issue(){
    }

    public DateTime getDateTime(){

        DateTime dt = DateTime.parse(issueCreated);
        return dt;
    }


}
