package com.dytstudio.signup.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by Mo on 27/11/2017.
 */
public class Employer {

    @SerializedName("employerID")
    @Expose
    public Integer employerID;
    @SerializedName("name")
    @Expose
    public String name;
    @SerializedName("username")
    @Expose
    public String username;
    @SerializedName("createdAt")
    @Expose
    public String createdAt;
    @SerializedName("identityID")
    @Expose
    public String identityID;

    /**
     *
     * @param employerID
     * @param username
     * @param identityID
     * @param createdAt
     * @param name
     */
    public Employer(Integer employerID, String name, String username, String createdAt, String identityID) {
        this.employerID = employerID;
        this.name = name;
        this.username = username;
        this.createdAt = createdAt;
        this.identityID = identityID;
    }


    @Override
    public String toString() {
        return "Employer{" +
                "employerID=" + employerID +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", createdAt='" + createdAt + '\'' +
                ", identityID='" + identityID + '\'' +
                '}';
    }
}
