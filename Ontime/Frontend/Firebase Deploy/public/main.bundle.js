webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
     */
    Constants.TOKEN_ENDPOINT = "http://ontimeapi.azurewebsites.net/connect/token";
    Constants.REVOCATION_ENDPOINT = "/connect/revocation";
    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/userinfo.html
     */
    Constants.USERINFO_ENDPOINT = "/connect/userinfo";
    Constants.CLIENT_ID = "Angular";
    Constants.GRANT_TYPE = "password";
    Constants.SCOPE = "WebAPI roles";
    //ENDPOINTS
    Constants.CREATE_USER_ENDPOINT = "http://ontimeapi.azurewebsites.net/api/Identity/Create";
    Constants.DELETE_USER_ENDPOINT = "http://ontimeapi.azurewebsites.net/api/Users/deleteuser";
    Constants.GET_EMPLOYER = "http://ontimeapi.azurewebsites.net/api/Employers";
    Constants.POST_ADDRESS_TO_EMPLOYER = "http://ontimeapi.azurewebsites.net/api/Employers/postaddress";
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menubar></app-menubar>\r\n<app-body></app-body>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_routes__ = __webpack_require__("../../../../../src/app/routes/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_getemployees_service__ = __webpack_require__("../../../../../src/app/services/getemployees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filterlist_filterlist_component__ = __webpack_require__("../../../../../src/app/filterlist/filterlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_mainmetric_mainmetric_component__ = __webpack_require__("../../../../../src/app/dashboard/mainmetric/mainmetric.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_tocapital_pipe__ = __webpack_require__("../../../../../src/app/pipes/tocapital.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menubar_menubar_component__["a" /* MenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notfound_notfound_component__["a" /* NotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__dashboard_mainmetric_mainmetric_component__["a" /* MainmetricComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dashboard_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_tocapital_pipe__["a" /* TocapitalPipe */],
                __WEBPACK_IMPORTED_MODULE_17__filterlist_filterlist_component__["a" /* TableFilter */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__routes_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["e" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["b" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["f" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCMBIzGWubc2qVa2vrjYcxlttDC4BxVJC4'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_getemployees_service__["a" /* GetemployeesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n  margin: 0\r\n}\r\n  .rowcontainer{\r\n    display: block;\r\n    overflow: auto;\r\n    \r\n  }\r\n\r\n\r\n  .main{\r\n    padding: 10px 10px 0 10px;\r\n  }\r\n\r\n @media (min-width: 765px) {\r\n\r\n    .main{\r\n      position: absolute;\r\n      width: calc(100% - 40px); \r\n      margin-left: 40px;\r\n      float: right;\r\n    }\r\n\r\n    nav.sidebar + .main{\r\n      margin-left: 200px;\r\n    }\r\n\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n      margin-left: 0px;\r\n    }\r\n\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n      text-align: center;\r\n      width: 100%;\r\n      margin-left: 0px;\r\n    }\r\n    \r\n    nav.sidebar a{\r\n      padding-right: 13px;\r\n    }\r\n\r\n    nav.sidebar .navbar-nav > li:first-child{\r\n      border-top: 1px #e5e5e5 solid;\r\n    }\r\n\r\n    nav.sidebar .navbar-nav > li{\r\n      border-bottom: 1px #e5e5e5 solid;\r\n    }\r\n\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n      position: static;\r\n      float: none;\r\n      width: auto;\r\n      margin-top: 0;\r\n      background-color: transparent;\r\n      border: 0;\r\n      box-shadow: none;\r\n    }\r\n\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n      padding: 0 0px 0 0px;\r\n    }\r\n\r\n    .sidenav {\r\n      padding: 0;\r\n  }\r\n    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a {\r\n      color: #777;\r\n    }\r\n\r\n    nav.sidebar{\r\n      width: 200px;\r\n      height: 100%;\r\n      margin-left: -160px;\r\n      float: left;\r\n      margin-bottom: 0px;\r\n    }\r\n\r\n    nav.sidebar li {\r\n      width: 100%;\r\n    }\r\n\r\n    nav.sidebar{\r\n      margin-left: 0px;\r\n    }\r\n\r\n    .forAnimate{\r\n      opacity: 0;\r\n    }\r\n  }\r\n   \r\n  @media (min-width: 1330px) {\r\n\r\n    .main{\r\n      width: calc(100% - 200px);\r\n      margin-left: 200px;\r\n    }\r\n\r\n    nav.sidebar{\r\n      margin-left: 0px;\r\n      float: left;\r\n    }\r\n\r\n    nav.sidebar .forAnimate{\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  nav.sidebar .navbar-nav .open .dropdown-menu>li>a, nav.sidebar .navbar-nav .open .dropdown-menu>li>a:focus {\r\n    color: #CCC;\r\n    background-color: transparent;\r\n  }\r\n\r\n  nav .forAnimate{\r\n    opacity: 1;\r\n  }\r\n  section{\r\n    padding-left: 15px;\r\n  }\r\n\r\n  .IceMaker{\r\n    background:\"#7f0000\";\r\n    height: 100vh;\r\n  }\r\n  \r\n  .user{\r\n  \r\n  }\r\n\r\n  .msgtext{\r\n    color: #202020;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .msgbart{\r\n    background-color: #F5F5F5;\r\n    height: 100vh;\r\n    margin-bottom: 0;\r\n    padding-top: 1vh;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">    \r\n    <div class=\"row content\">\r\n      <div class=\"col-sm-2 sidenav\">\r\n          <mat-toolbar class=\"IceMaker\">\r\n              <span routerLink=\"/dashboard\">Dashboard</span>\r\n            \r\n              <mat-toolbar-row>\r\n                <span routerLink=\"/dashboard/profile\">Profile</span>\r\n                <span class=\"example-spacer\"></span>\r\n              </mat-toolbar-row>\r\n            \r\n\r\n              <mat-toolbar-row>\r\n                <span routerLink=\"/dashboard/filterlist\">EmployersList</span>\r\n                <span class=\"example-spacer\"></span>\r\n              </mat-toolbar-row>\r\n              \r\n          \r\n            </mat-toolbar>\r\n      </div>\r\n      <div class=\"col-sm-8 text-left\"> \r\n        <router-outlet class=\"dashboardrouter\"></router-outlet>    \r\n        \r\n      </div>\r\n      <div class=\"col-sm-2 sidenav msgbart\">\r\n        <p class=\"msgtext\">MESSAGEBAR</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n                           \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, userService) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        if (authService.getToken()) {
            if (authService.isTokenExpired()) {
                this.signOut();
            }
            this.userService.getuser().subscribe(function (data) {
                _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
                _this.user.employerID = data["employerID"];
                _this.user.username = data["username"];
                _this.user.createdAt = data["createdAt"];
                _this.user.identityID = data["identityID"];
                _this.user.username = data["userName"];
                _this.userService.setUser(_this.user);
                //console.log(data)
                _this.userService.user.subscribe(function (data) { return _this.user = data; });
            }, function (error) {
                _this.authService.logout();
            });
        }
        else {
            this.signOut();
        }
    }
    DashboardComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    DashboardComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser().subscribe(function (data) {
            if (data["succeeded"]) {
                _this.signOut();
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/mainmetric/mainmetric.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 100vh;\r\n    width: 100%;  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/mainmetric/mainmetric.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n    <div class=\"row content\">\r\n\r\n      <div class=\"row\">\r\n\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [streetViewControl]=\"allOptions\" >\r\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            </agm-map>\r\n\r\n      </div>\r\n\r\n         \r\n        \r\n       \r\n      </div>\r\n    \r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/mainmetric/mainmetric.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainmetricComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainmetricComponent = (function () {
    function MainmetricComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.zoom = 13;
        this.allOptions = false;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        this.userService.getuser().subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
            _this.user.employerID = user["employerID"];
            _this.user.username = user["username"];
            _this.user.createdAt = user["createdAt"];
            _this.user.identityID = user["identityID"];
            _this.user.username = user["userName"];
        });
    }
    MainmetricComponent.prototype.ngOnInit = function () {
    };
    MainmetricComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mainmetric',
            template: __webpack_require__("../../../../../src/app/dashboard/mainmetric/mainmetric.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/mainmetric/mainmetric.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], MainmetricComponent);
    return MainmetricComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <h1>Profile</h1>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6  toppad\" >\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\"> {{user?.name | tocapital}} </h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n              <div class=\" col-md-9 col-lg-9 \"> \r\n                <table class=\"table table-user-information\">\r\n                  <tbody>\r\n                      <tr>\r\n                          <td>EmployerID</td>\r\n                          <td>{{user?.employerID}}</td>\r\n                        </tr>\r\n                    <tr>\r\n                      <td>username</td>\r\n                      <td>{{user?.username}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Name</td>\r\n                      <td>{{user?.name | tocapital}}</td>\r\n                    </tr>\r\n                    \r\n                    <tr>\r\n                      <td>Created at</td>\r\n                      <td> {{user?.createdAt}} </td>\r\n                    </tr>\r\n                    \r\n                  </tbody>\r\n                </table>\r\n          \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6  toppad\" >\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">Post Address</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n              <div class=\" col-md-9 col-lg-9 \"> \r\n                \r\n                <form  [formGroup]=\"addressform\" class=\"form-signin\" novalidate>\r\n                  \r\n\r\n                <input matInput formControlName=\"streetname\" placeholder=\"Streetname\" id=\"streetname\" type=\"text\">\r\n                <input matInput formControlName=\"housenumber\" placeholder=\"Housenumber\" id=\"housenumber\" type=\"text\">\r\n                <input matInput formControlName=\"city\" placeholder=\"City\" id=\"city\" type=\"text\">\r\n                <input matInput formControlName=\"zipcode\" placeholder=\"Zipcode\" id=\"zipcode\" type=\"text\">\r\n                <input matInput formControlName=\"country\" placeholder=\"Country\" id=\"country\" type=\"text\">\r\n                <button (click)=\"postaddress()\"  class=\"btn btn-lg btn-primary btn-block btn-signin\"  mat-button>Post Address</button>\r\n\r\n                </form>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, fb) {
        var _this = this;
        this.userService = userService;
        this.fb = fb;
        this.userService.getuser().subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
            _this.user.employerID = user["employerID"];
            _this.user.username = user["username"];
            _this.user.createdAt = user["createdAt"];
            _this.user.identityID = user["identityID"];
            _this.user.name = user["name"];
        });
        this.addressform = this.fb.group({
            streetname: [''],
            housenumber: [''],
            city: [''],
            zipcode: [''],
            country: ['']
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.postaddress = function () {
        this.userService.postAddress(this.addressform.value).subscribe(function (data) { return alert("address updatet, " + data); });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filterlist/filterlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.filterl{\r\n  height: 100vh;\r\n}\r\n\r\n.filtert{\r\n  height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filterlist/filterlist.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container mat-elevation-z8 filterl\">\r\n  <div class=\"header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" class=\"filtert\">\r\n\r\n    <!-- Position Column -->\r\n   <div>\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let employee\" #givenname (click)=\"linkEmployees('test')\"> {{employee.givenname}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Lastname\">\r\n      <mat-header-cell *matHeaderCellDef> Lastname </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let employee\" #familyname (click)=\"linkEmployees(employee.givenname)\"> {{employee.familyname}}  </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"isChecked\" >\r\n      <mat-header-cell *matHeaderCellDef > IsChecked </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let employee\" > {{employee.username}} </mat-cell>\r\n    </ng-container>\r\n   </div>\r\n\r\n\r\n    <!-- Name Column -->\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>\r\n    <mat-row  *matRowDef=\"let data; columns: displayedColumns;\" >{{this.data}}</mat-row>\r\n  </mat-table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/filterlist/filterlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_getemployees_service__ = __webpack_require__("../../../../../src/app/services/getemployees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_transitions__ = __webpack_require__("../../../../../src/app/router.transitions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @title Table with filtering
 */
var TableFilter = (function () {
    function TableFilter(getservice) {
        var _this = this;
        this.getservice = getservice;
        this.displayedColumns = ['name', 'Lastname', 'isChecked'];
        getservice.getAllEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material_table__["a" /* MatTableDataSource */](_this.employees);
        });
        getservice.employeeToEmployer(5).subscribe(function (data) {
            _this.logdata = data;
            console.log(_this.logdata);
        });
    }
    TableFilter.prototype.linkEmployees = function (naam) {
        //alert("Pas op, " + firstName +  lastName +"!"); 
        console.log(naam);
    };
    TableFilter.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableFilter.prototype.ngOnInit = function () {
    };
    TableFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filterlist',
            styles: [__webpack_require__("../../../../../src/app/filterlist/filterlist.component.css")],
            template: __webpack_require__("../../../../../src/app/filterlist/filterlist.component.html"),
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_transitions__["b" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_getemployees_service__["a" /* GetemployeesService */]])
    ], TableFilter);
    return TableFilter;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section no-pad-bot {\r\n    background: #A5B452;\r\n}\r\n\r\n.lblock{\r\n    background: #A5B452;\r\n    height: 275px;\r\n}\r\n\r\n.mblock{\r\n    background: #C8D96F;\r\n    height: 275px;\r\n}\r\n\r\n.rblock{\r\n    background: #C4F7A1;\r\n    height: 275px;\r\n}\r\n\r\n.htext{\r\n    color: #3A3042;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-weight: thin; \r\n}\r\n\r\n.blockhead{\r\n    color: #3A3042;\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.orderbtn{\r\n    margin-top: 10px;\r\n    border: 1.5px solid #3A3042;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n    background-color: transparent;\r\n}\r\n\r\n.orderbtn:hover{\r\n    border: 1.5px solid #3A3042;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n    background-color: #3A3042;\r\n    color: white;\r\n    transition: 0.5s ease;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeIn]>\r\n  <div class=\"section no-pad-bot\" id=\"index-banner\">\r\n    <div class=\"container\">\r\n      <br>\r\n      <br>\r\n      <h1 class=\"header center htext\">OnTime</h1>\r\n      <div class=\"row center\">\r\n        <h4 class=\"header col s12 light\">\r\n          Get started : Manage your team!\r\n        </h4>\r\n      <div class=\"row center\">\r\n        <button class=\"orderbtn\" href=\"/login\">Log in</button>\r\n      </div>\r\n      <br>\r\n      <br>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"section \">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m4 lblock\">\r\n          <div class=\"icon-block\">\r\n            <h4 class=\"center blockhead\">50 Gebruikers</h4>\r\n            <div class=\"center\">\r\n              <p>50 Gebruikers</p>\r\n              <p>Ongelimiteerde toegang tot de applicatie</p>\r\n              <p>Dashboard space</p>\r\n              <p><b>€3.200</b></p>\r\n              <button class=\"orderbtn\" href=\"/order\">Order now</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4 mblock\">\r\n          <div class=\"icon-block\">\r\n            <h4 class=\"center blockhead\">200 Users</h4>\r\n            <div class=\"center\">\r\n              <p>200 Gebruikers</p>\r\n              <p>Ongelimiteerde toegang tot de applicatie</p>\r\n              <p>Dashboard space</p>\r\n              <p><b>€11.500</b> <b class=\"red-text\">-10%</b></p>\r\n              <button class=\"orderbtn\" href=\"/order\">Order now</button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4 rblock\">\r\n          <div class=\"icon-block\">\r\n            <h4 class=\"center blockhead\">500 Users</h4>\r\n            <div class=\"center\">\r\n              <p>500 Gebruikers</p>\r\n              <p>Ongelimiteerde toegang tot de applicatie</p>\r\n              <p>Dashboard space</p>\r\n              <p><b>€50.000</b> <b class=\"red-text\">-20%</b></p>\r\n              <button class=\"orderbtn\" href=\"/order\">Order now</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_transitions__ = __webpack_require__("../../../../../src/app/router.transitions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_transitions__["a" /* fadeIn */])()]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@routerTransition]>\r\n    <div class=\"card card-container\">\r\n           \r\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\r\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\r\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n                <strong>Danger!</strong> {{error?.error_description}}\r\n              </div>\r\n        <form  [formGroup]=\"loginForm\" class=\"form-signin\">\r\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n            <input matInput  formControlName=\"username\" placeholder=\"Username\" id=\"username\" type=\"text\">\r\n            <input matInput  formControlName=\"password\" placeholder=\"Password\" id=\"password\" type=\"password\" (keyup.enter)=\"login()\">\r\n            \r\n           <!-- <div id=\"remember\" class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n                </label>\r\n            </div> -->\r\n            <button (click)=\"login()\"  class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled]=\"!loginForm.valid\" mat-button>Sign in</button>\r\n        </form><!-- /form -->\r\n        <a href=\"#\" class=\"forgot-password\">\r\n            Forgot the password?\r\n        </a>\r\n    </div><!-- /card-container -->\r\n</div><!-- /container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__("../../../../../src/app/router.transitions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authService, router, userService, fb) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.userService.setUser(null);
        if (authService.getToken()) {
            if (authService.isTokenExpired()) {
                this.signOut();
            }
            else {
                this.router.navigateByUrl('/dashboard');
            }
        }
        else {
            this.signOut();
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]]
        });
        new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (data) {
                if (data["access_token"]) {
                    _this.authService.setToken(data);
                    _this.router.navigate(["/dashboard"]);
                }
            }, function (error) { _this.error = JSON.parse(error); });
        }
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["b" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\na, a:hover {\r\n  color: currentColor;\r\n  text-decoration: none;\r\n}\r\n\r\n.mat-toolbar.mat-primary{\r\n  color: #47525E;\r\n  background: #FFF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n\r\n  <button mat-button routerLink=\"/\">Home</button>\r\n  <button mat-button>Concept</button>\r\n  <button class=\"swaggerbutton\" mat-button><a href=\"http://ontimeapi.azurewebsites.net/swagger\">Swagger API</a></button>\r\n  <button *ngIf=\"!user\" routerLink=\"/register\" mat-button>Register</button>\r\n  <span class=\"fill-space\"></span>\r\n  <button *ngIf=\"!user\" routerLink=\"/login\" mat-button>Login</button>\r\n  <div *ngIf=\"user\">\r\n      \r\n\r\n  <button  mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"signOut()\" >\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>Sign out</span>\r\n      </button>\r\n      <button (click)=\"deleteUser()\" mat-menu-item>\r\n        <mat-icon>delete</mat-icon>\r\n        <span>Delete your account</span>\r\n      </button>\r\n\r\n    </mat-menu>\r\n  </div>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenubarComponent = (function () {
    function MenubarComponent(authService, userService) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.userService.user.subscribe(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                _this.user = data;
            }
        });
    }
    MenubarComponent.prototype.signOut = function () {
        this.user = null;
        this.authService.logout();
    };
    MenubarComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser().subscribe(function (data) {
            if (data["succeeded"]) {
                _this.user = null;
                _this.signOut();
            }
        });
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menubar/menubar.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".browser-window {\r\n    text-align: left;\r\n    width: 100%;\r\n    height: auto;\r\n    display: inline-block;\r\n    border-radius: 5px 5px 2px 2px;\r\n    background-clip: padding-box;\r\n    background-color: transparent;\r\n    margin: 20px 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n.browser-window .top-bar {\r\n    height: 30px;\r\n    border-radius: 5px 5px 0 0;\r\n    background-clip: padding-box;\r\n    border-top: thin solid #eaeae9;\r\n    border-bottom: thin solid #dfdfde;\r\n    background: linear-gradient(#e7e7e6, #E2E2E1);\r\n}\r\n\r\n.browser-window .content {\r\n    margin: 0;\r\n    width: 100%;\r\n    display: inline-block;\r\n    border-radius: 0 0 5px 5px;\r\n    background-color: #fafafa;\r\n}\r\n\r\n.browser-window .circles {\r\n    margin: 5px 12px;\r\n}\r\n\r\n#close-circle {\r\n    background-color: #FF5C5A;\r\n}\r\n#minimize-circle {\r\n    background-color: #FFBB50;\r\n}\r\n#maximize-circle {\r\n    background-color: #1BC656;\r\n}\r\n\r\n.browser-window .circle {\r\n    height: 10px;\r\n    width: 10px;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    background-color: white;\r\n    margin-right: 1px;\r\n}\r\n\r\n.caption-uppercase {\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n    margin-bottom: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#site-layout-example-right {\r\n    background-color: #26a69a;\r\n    height: 300px;\r\n}\r\n\r\n.browser-window .row {\r\n    margin: 0;\r\n}\r\n\r\n#site-layout-example-top {\r\n    background-color: #E57373;\r\n    height: 50px;\r\n}\r\n\r\n.text-long-shadow {\r\n    text-shadow: rgb(29, 125, 116) 1px 1px, rgb(29, 125, 116) 2px 2px, rgb(29, 125, 116) 3px 3px, rgb(29, 125, 116) 4px 4px, rgb(29, 125, 116) 5px 5px, rgb(29, 125, 116) 6px 6px, rgb(29, 125, 116) 7px 7px, rgb(29, 125, 116) 8px 8px, rgb(29, 125, 116) 9px 9px, rgb(29, 125, 116) 10px 10px, rgb(29, 125, 116) 11px 11px, rgb(29, 125, 116) 12px 12px, rgb(29, 125, 116) 13px 13px, rgb(29, 125, 116) 14px 14px, rgb(29, 126, 117) 15px 15px, rgb(29, 128, 119) 16px 16px, rgb(30, 130, 120) 17px 17px, rgb(30, 132, 122) 18px 18px, rgb(30, 133, 124) 19px 19px, rgb(31, 135, 125) 20px 20px, rgb(31, 137, 127) 21px 21px, rgb(32, 139, 129) 22px 22px, rgb(32, 141, 130) 23px 23px, rgb(32, 142, 132) 24px 24px, rgb(33, 144, 134) 25px 25px, rgb(33, 146, 135) 26px 26px, rgb(34, 148, 137) 27px 27px, rgb(34, 149, 139) 28px 28px, rgb(34, 151, 140) 29px 29px, rgb(35, 153, 142) 30px 30px, rgb(35, 155, 144) 31px 31px, rgb(36, 157, 145) 32px 32px, rgb(36, 158, 147) 33px 33px, rgb(36, 160, 149) 34px 34px, rgb(37, 162, 150) 35px 35px, rgb(37, 164, 152) 36px 36px, rgb(38, 166, 154) 37px 37px;\r\n    background-color: rgb(38, 166, 154);\r\n    /* height: 100%; */\r\n    width: 100%;\r\n    font-size: 10rem;\r\n    color: #fff !important;\r\n    text-align: center;\r\n    padding: 20px 0 !important;\r\n}\r\n\r\n#site-layout-example-right {\r\n    background-color: #26a69a;\r\n    height: 300px;\r\n}\r\n\r\n.btn:hover, .btn-large:hover {\r\n    background-color: #ff5a92;\r\n}\r\n\r\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\r\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n#error-page{\r\n    width: 50%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"error-page\" >\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"browser-window\">\r\n            <div class=\"top-bar\">\r\n              <div class=\"circles\">\r\n                <div id=\"close-circle\" class=\"circle\"></div>\r\n                <div id=\"minimize-circle\" class=\"circle\"></div>\r\n                <div id=\"maximize-circle\" class=\"circle\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content\">\r\n              <div class=\"row\">\r\n                <div id=\"site-layout-example-top\" class=\"col s12\">\r\n                  <p class=\"flat-text-logo center white-text caption-uppercase\">Sorry but we couldn’t find this page.</p>\r\n                </div>\r\n                <div id=\"site-layout-example-right\" class=\"col s12 m12 l12\">\r\n                  <div class=\"row center\">\r\n                    <h1 class=\"text-long-shadow col s12\">404</h1>\r\n                  </div>\r\n                \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__("../../../../../src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/tocapital.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TocapitalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TocapitalPipe = (function () {
    function TocapitalPipe() {
    }
    TocapitalPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    };
    TocapitalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tocapital'
        })
    ], TocapitalPipe);
    return TocapitalPipe;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}\r\n\r\n.title{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" [@routerTransition]>\r\n    <div class=\"card card-container\">\r\n        <div class=\"title\"><h4>Register  </h4></div>\r\n        \r\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\r\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\r\n        <form  [formGroup]=\"registerForm\" class=\"form-signin\" novalidate>\r\n            \r\n\r\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n        <strong>Danger!</strong> {{error}}\r\n      </div>\r\n            <input matInput formControlName=\"username\" placeholder=\"Username\" id=\"username\" type=\"text\">\r\n            <input matInput formControlName=\"email\" placeholder=\"E-mail\" id=\"email\" type=\"email\">\r\n            <input matInput formControlName=\"givenname\" placeholder=\"Firstname\" id=\"givenname\" type=\"text\">\r\n            <input matInput formControlName=\"familyname\" placeholder=\"Familyname\" id=\"familyname\" type=\"text\">\r\n            <input matInput formControlName=\"password\" placeholder=\"Password\" id=\"password\" type=\"password\" class=\"validate\">\r\n            <input matInput formControlName=\"passwordvalidate\" placeholder=\"Reenter password\" id=\"password-again\" type=\"password\">\r\n            <button (click)=\"register()\"  class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled]=\"!registerForm.valid\" mat-button>Register</button>\r\n        </form><!-- /form -->\r\n        <a href=\"#\" class=\"forgot-password\">\r\n            Forgot the password?\r\n        </a>\r\n    </div><!-- /card-container -->\r\n</div><!-- /container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__("../../../../../src/app/router.transitions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(registerService, authService, router, fb) {
        this.registerService = registerService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].minLength(8)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].minLength(8)]],
            passwordvalidate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            givenname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            familyname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            role: ['employer']
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.registerService.register(this.registerForm.value).subscribe(function (data) {
                _this.authService.logIn(_this.registerForm.value.username, _this.registerForm.value.password).subscribe(function (data) {
                    if (data) {
                        _this.authService.setToken(data);
                        console.log(data);
                        _this.router.navigate(["/dashboard"]);
                    }
                });
            }, function (error) { _this.error = error["error"]; });
        }
        else {
            this.registerService.register(this.registerForm.value).subscribe(function (data) {
                if (data["succeeded"]) {
                    _this.authService.logIn(_this.registerForm.value.username, _this.registerForm.value.password).subscribe(function (data) {
                        if (data) {
                            _this.authService.setToken(data);
                            _this.router.navigate(["/dashboard"]);
                        }
                    });
                }
            }, function (error) { _this.error = error["error"]; });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["b" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/router.transitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = routerTransition;
/* harmony export (immutable) */ __webpack_exports__["a"] = fadeIn;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

function routerTransition() {
    return slideToRight();
}
function fadeIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: '1' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: '0' }))
        ])
    ]);
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/routes/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filterlist_filterlist_component__ = __webpack_require__("../../../../../src/app/filterlist/filterlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_mainmetric_mainmetric_component__ = __webpack_require__("../../../../../src/app/dashboard/mainmetric/mainmetric.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_mainmetric_mainmetric_component__["a" /* MainmetricComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'filterlist', component: __WEBPACK_IMPORTED_MODULE_6__filterlist_filterlist_component__["a" /* TableFilter */] },
        ] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__notfound_notfound_component__["a" /* NotfoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('tokenUser')) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constants__ = __webpack_require__("../../../../../src/app/Constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('tokenUser')) {
            this.token = JSON.parse(localStorage.getItem('tokenUser'));
        }
    }
    AuthService.prototype.setToken = function (token) {
        if (token["access_token"]) {
            this.token = token;
            this.tokenExpire = new Date();
            this.tokenExpire.setSeconds((token["expires_in"]));
            this.token["expires_on"] = this.tokenExpire;
            localStorage.setItem('tokenUser', JSON.stringify(this.token));
        }
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isTokenExpired = function () {
        if (this.token) {
            var now = new Date();
            var expiredate = new Date(this.token["expires_on"]);
            if (now > expiredate) {
                return true;
            }
            else
                return false;
        }
    };
    AuthService.prototype.logIn = function (username, password) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('username', username)
            .set('password', password)
            .set('scope', __WEBPACK_IMPORTED_MODULE_6__Constants__["a" /* Constants */].SCOPE)
            .set('client_id', __WEBPACK_IMPORTED_MODULE_6__Constants__["a" /* Constants */].CLIENT_ID)
            .set('grant_type', __WEBPACK_IMPORTED_MODULE_6__Constants__["a" /* Constants */].GRANT_TYPE);
        return this.http.post("http://ontimeapi.azurewebsites.net/connect/token", body.toString(), {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('tokenUser');
        this.router.navigateByUrl('/login');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/getemployees.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetemployeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetemployeesService = (function () {
    function GetemployeesService(client, router, authService) {
        this.client = client;
        this.router = router;
        this.authService = authService;
    }
    GetemployeesService.prototype.getAllEmployees = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
        return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees", { headers: headers });
    };
    GetemployeesService.prototype.employeeToEmployer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
        return this.client.post("http://ontimeapi.azurewebsites.net/api/Employers/employeetoemployer?id=" + id, { headers: headers });
    };
    GetemployeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], GetemployeesService);
    return GetemployeesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constants__ = __webpack_require__("../../../../../src/app/Constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (model) {
        console.log(model);
        var body = {
            "username": model.username,
            "password": model.password,
            "passwordvalidate": model.passwordvalidate,
            "givenName": model.givenname,
            "familyName": model.familyname,
            "role": model.role,
            "email": model.email
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__Constants__["a" /* Constants */].CREATE_USER_ENDPOINT, body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json-patch+json').append("Accept", ": application/json").append("Access-Control-Allow-Origin", "*")
        });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Constants__ = __webpack_require__("../../../../../src/app/Constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]());
        this.user = this.userSource.asObservable();
    }
    UserService.prototype.getuser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Constants__["a" /* Constants */].GET_EMPLOYER, { headers: headers });
    };
    UserService.prototype.setUser = function (user) {
        this.userSource.next(user);
    };
    UserService.prototype.deleteUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__Constants__["a" /* Constants */].DELETE_USER_ENDPOINT, { headers: headers });
    };
    UserService.prototype.postAddress = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__Constants__["a" /* Constants */].POST_ADDRESS_TO_EMPLOYER, model, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map