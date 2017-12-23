package com.dytstudio.signup.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by mo on 23/12/2017.
 */

public class Employee {



    @SerializedName("employeeID")
    @Expose
    public int employeeID;
    @SerializedName("givenname")
    @Expose
    public String givenname;
    @SerializedName("username")
    @Expose
    public String username;
    @SerializedName("familyname")
    @Expose
    public String familyname;
    @SerializedName("address")
    @Expose
    public Address address;
    @SerializedName("issues")
    @Expose
    public Issue issues;
    @SerializedName("employer")
    @Expose
    public Employer employer;
    @SerializedName("identityID")
    @Expose
    public String identityID;

    public Employee(int employeeID, String givenname, String username, String familyname, Address address, Issue issues, Employer employer, String identityID) {
        this.employeeID = employeeID;
        this.givenname = givenname;
        this.username = username;
        this.familyname = familyname;
        this.address = address;
        this.issues = issues;
        this.employer = employer;
        this.identityID = identityID;
    }
}
