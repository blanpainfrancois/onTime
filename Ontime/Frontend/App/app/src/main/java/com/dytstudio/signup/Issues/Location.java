package com.dytstudio.signup.Issues;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by Mo on 28/11/2017.
 */

public class Location {

    @SerializedName("locationID")
    @Expose
    public Integer locationID;
    @SerializedName("latitude")
    @Expose
    public Integer latitude;
    @SerializedName("longtitude")
    @Expose
    public Integer longtitude;

    public Location(Integer locationID, Integer latitude, Integer longtitude) {
        this.locationID = locationID;
        this.latitude = latitude;
        this.longtitude = longtitude;
    }
}
