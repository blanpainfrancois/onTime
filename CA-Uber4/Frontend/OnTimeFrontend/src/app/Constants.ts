export class Constants {
        /**
         * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
         */
        public static readonly TOKEN_ENDPOINT: string = "http://localhost:5000/connect/token";
    
        public static readonly REVOCATION_ENDPOINT: string = "/connect/revocation";
    
        /**
         * @see https://identityserver4.readthedocs.io/en/dev/endpoints/userinfo.html
         */
        public static readonly USERINFO_ENDPOINT: string = "/connect/userinfo";
    
        public static readonly CLIENT_ID: string = "ng";
    
        public static readonly GRANT_TYPE: string = "password";

        public static readonly SCOPE: string = "WebAPI openid profile";



        //ENDPOINTS
    
        public static readonly CREATE_USER_ENDPOINT: string = "http://localhost:5000/api/Identity/Create";

        public static readonly DELETE_USER_ENDPOINT: string = "http://localhost:5000/api/Users/deleteuser";

        public static readonly GET_USER_PROFILE: string = "http://localhost:5000/api/users/getuser";
        
        
    }