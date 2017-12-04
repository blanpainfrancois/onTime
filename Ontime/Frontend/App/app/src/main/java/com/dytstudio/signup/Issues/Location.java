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
    public double latitude;
    @SerializedName("longitude")
    @Expose
    public double longitude;

    public Location(Integer locationID, Integer latitude, Integer longitude) {
        this.locationID = locationID;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Location(Integer latitude, Integer longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
