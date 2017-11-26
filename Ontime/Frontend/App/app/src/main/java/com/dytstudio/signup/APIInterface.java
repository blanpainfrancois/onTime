package com.dytstudio.signup;

import com.dytstudio.signup.Models.AccessToken;
import com.dytstudio.signup.Models.CreateIceMakerUser;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

/**
 * Created by Mo on 24/11/2017.
 */

public interface APIInterface {


        @POST("/api/Identity/CreateIceMaker")
        Call<CreateIceMakerUser> CREATE_ICE_MAKER_USER_CALL(@Body CreateIceMakerUser createIceMakerUser);

        @FormUrlEncoded
        @POST("/connect/token")
        Call<AccessToken> POST_TOKEN_CALL (@Field("username") String username, @Field("password") String password, @Field("client_id") String client_id, @Field("grant_type") String grant_type, @Field("scope") String scope);

}
