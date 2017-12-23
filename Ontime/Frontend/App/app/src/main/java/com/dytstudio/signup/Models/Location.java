package com.dytstudio.signup.Models;

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
    public Float latitude;
    @SerializedName("longitude")
    @Expose
    public Float longitude;

    /**
     * No args constructor for use in serialization
     *
     */
    public Location() {
    }

    /**
     *
     * @param longitude
     * @param latitude
     */
    public Location(Float latitude, Float longitude) {

        this.locationID = locationID;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
