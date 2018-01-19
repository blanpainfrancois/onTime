package com.dytstudio.signup.Models;


import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Location {

    @SerializedName("lat")
    @Expose
    public float lat;
    @SerializedName("lng")
    @Expose
    public float lng;

    /**
     * No args constructor for use in serialization
     *
     */
    public Location() {
    }

    /**
     *
     * @param lng
     * @param lat
     */
    public Location(float lat, float lng) {
        super();
        this.lat = lat;
        this.lng = lng;
    }

}