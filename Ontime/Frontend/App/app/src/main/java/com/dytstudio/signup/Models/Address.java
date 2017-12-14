package com.dytstudio.signup.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by Mo on 28/11/2017.
 */

public class Address {

    @SerializedName("addressID")
    @Expose
    public Integer addressID;
    @SerializedName("streetname")
    @Expose
    public String streetname;
    @SerializedName("housenumber")
    @Expose
    public String housenumber;
    @SerializedName("city")
    @Expose
    public String city;
    @SerializedName("zipcode")
    @Expose
    public String zipcode;
    @SerializedName("country")
    @Expose
    public String country;

    public Address(Integer addressID, String streetname, String housenumber, String city, String zipcode, String country) {
        this.addressID = addressID;
        this.streetname = streetname;
        this.housenumber = housenumber;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
    }

}
