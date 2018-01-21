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

        public static readonly GET_EMPLOYER: string = "http://ontimeapi.azurewebsites.net/api/Employers";

        public static readonly POST_ADDRESS_TO_EMPLOYER : string = "http://ontimeapi.azurewebsites.net/api/Employers/postaddress";
        public static readonly POST_HOUR_COST : string = "http://ontimeapi.azurewebsites.net/api/Employers/posthourcostemployer";
        public static readonly GET_ADDRESS_OF_EMPLOYER : string = "http://ontimeapi.azurewebsites.net/api/Employers/getaddressofemployer";
        public static readonly GET_COST_HOUR : string = "http://ontimeapi.azurewebsites.net/api/Employers/getcostofhour";


        //METRICS
        public static readonly GET_HOURSCOST_OF_EMPLOYER : string = "http://ontimeapi.azurewebsites.net/api/Metrics/GetCostofHoursToLate";
        public static readonly GET_COUNT_OF_EMPLOYEES : string = "http://ontimeapi.azurewebsites.net/api/Metrics/getNumberofEmployeesFromEmployer";
        public static readonly GET_TOP_REASON : string = "http://ontimeapi.azurewebsites.net/api/Metrics/GetTopReason";
        public static readonly GET_TOP_WEEKDAY: string = "http://ontimeapi.azurewebsites.net/api/Metrics/gettopweekday";
        public static readonly GET_OPEN_ISSUES: string = "http://ontimeapi.azurewebsites.net/api/Metrics/Getopenissues";
        public static readonly GET_START_END: string = "http://ontimeapi.azurewebsites.net/api/Metrics/Getfromdatafromperiod?startdate=1%2F01%2F2017&enddate=1%2F01%2F2018";
        public static readonly GET_SHARE_EMPLOYEE: string = "http://ontimeapi.azurewebsites.net/api/Metrics/Getshareemployer";
        public static readonly GET_COUNT_ISSUE: string = "http://ontimeapi.azurewebsites.net/api/Metrics/GetCountOfIssues";

    }
