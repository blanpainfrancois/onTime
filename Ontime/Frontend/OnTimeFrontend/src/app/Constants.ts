export class Constants {
        /**
         * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
         */
        public static readonly TOKEN_ENDPOINT: string = "http://ontimeapi.azurewebsites.net/connect/token";

        public static readonly REVOCATION_ENDPOINT: string = "/connect/revocation";

        /**
         * @see https://identityserver4.readthedocs.io/en/dev/endpoints/userinfo.html
         */
        public static readonly USERINFO_ENDPOINT: string = "/connect/userinfo";

        public static readonly CLIENT_ID: string = "Angular";

        public static readonly GRANT_TYPE: string = "password";

        public static readonly SCOPE: string = "WebAPI roles";



        //ENDPOINTS

        public static readonly CREATE_USER_ENDPOINT: string = "http://ontimeapi.azurewebsites.net/api/Identity/Create";

        public static readonly DELETE_USER_ENDPOINT: string = "http://ontimeapi.azurewebsites.net/api/Users/deleteuser";

        public static readonly GET_USER_PROFILE: string = "http://ontimeapi.azurewebsites.net/api/users/getuser";


    }
