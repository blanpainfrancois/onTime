package com.dytstudio.signup.Models;

import android.os.Parcelable;

import java.io.Serializable;

/**
 * Created by Mo on 24/11/2017.
 */

public class AccessToken implements Serializable {

    private String access_token;
    private String token_type;
    private String expires_in;

    private String scope ;
    private String client_id;
    private String grant_type ;
    private String username;
    private String password;

    public AccessToken(String access_token, String token_type, String expires_in) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
    }



    public String getAccess_token() {
        return "Bearer " + access_token;
    }

    public String getToken_type() {
        return token_type;
    }

    public String getExpires_in() {
        return expires_in;
    }





}
