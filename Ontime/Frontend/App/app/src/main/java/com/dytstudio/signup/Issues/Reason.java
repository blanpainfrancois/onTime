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
        @SerializedName("reason")
        @Expose
        public String reason;
         @SerializedName("reasontitle")
         @Expose
         public String reasonTitle;

    public Reason(Integer reasonID, String reason, String reasonTitle) {
        this.reasonID = reasonID;
        this.reason = reason;
        this.reasonTitle = reasonTitle;
    }

    public Reason(String reason, String reasonTitle) {
        this.reason = reason;
        this.reasonTitle = reasonTitle;
    }

}
