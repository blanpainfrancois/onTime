package com.dytstudio.signup.Issues;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by Mo on 28/11/2017.
 */

public class Reason{



    @SerializedName("reasonID")
    @Expose
    public Integer reasonID;
    @SerializedName("reasontitle")
    @Expose
    public String reasontitle;
    @SerializedName("reason")
    @Expose
    public String reason;

    public Reason() {
    }

    /**
     *
     * @param reasontitle
     * @param reason
     * @param reasonID
     */
    public Reason(Integer reasonID, String reasontitle, String reason) {
        super();
        this.reasonID = reasonID;
        this.reasontitle = reasontitle;
        this.reason = reason;
    }



}
