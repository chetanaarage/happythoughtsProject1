webpackJsonp([1,5],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/validate.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    AuthService.prototype.registerUser = function (user) {
        console.log("in authenticate service register", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        console.log("in authenticate service login", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgottenPasswordUser = function (user) {
        console.log('in AuthService forgotten forgottenPassword', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/forgottenPassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (user) {
        console.log("in resetPassword service ", user.token);
        // let token=user.token;
        // console.log("user.token",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        //let body = JSON.stringify(user);
        //console.log("body.token",body.token);
        return this.http.post('http://localhost:3000/reset/' + user.token, user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.pay = function (donationAmount) {
        console.log("amount need to be paid", donationAmount);
        return this.http.post("http://localhost:3000/paypal/buy", JSON.stringify(donationAmount), this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/auth.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_text_text_component__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'forgotten-password', component: __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'text', component: __WEBPACK_IMPORTED_MODULE_18__components_text_text_component__["a" /* TextComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_text_text_component__["a" /* TextComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgottenPasswordComponent = (function () {
    function ForgottenPasswordComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgottenPasswordComponent.prototype.onResetLinkSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        this.authService.forgottenPasswordUser(user).subscribe(function (data) {
            console.log("data in forgotten-password", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to send  reset link', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    ForgottenPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/forgotten-password.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    // paybutton: boolean = false;
    // @ViewChild('paybtn') paybtn;
    HomeComponent.prototype.ngOnInit = function () {
        //console.log('paybtn', this.paybtn);
    };
    HomeComponent.prototype.pay = function (amount) {
        var _this = this;
        document.getElementById("loading").style.display = "block";
        //console.log(this.load);
        var donationAmount = {
            amt: this.amount
        };
        console.log("donationAmount", donationAmount);
        this.authService.pay(donationAmount).subscribe(function (data) {
            _this.redirectURL = data.href;
            window.location.href = _this.redirectURL;
        }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/home.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log("onLoginSubmit");
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in successfully', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/login.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    //@ViewChild('toggle') menu_up;
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.collapse = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(this.authService.loggedIn()){
        this.authService.getProfile().subscribe(function (profile) {
            console.log("profile ", profile);
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        //}
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(707),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            console.log("profile ", profile);
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(708),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/profile.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        // const adress={
        // 		street:this.street,
        // 		landmark:this.landmark,
        // 		postalcode:this.postalcode,
        // 		city:this.city,
        // 		state:this.state
        // }
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            // dob:this.dob,
            // address:adress,
            mobno: this.mobno,
            email: this.email,
            username: this.username,
            password: this.password
        };
        console.log("onRegisterSubmit", user);
        //Required fields
        // if(!this.validateService.validateRegister(user)){
        // 	this.flashMessage.show("Please fill in all fields",{cssClass:'alert-danger',timeout:3000});
        // 	return false;
        // }
        //Validate email
        // if(!this.validateService.validateEmail(user.email)){
        // 	this.flashMessage.show("Please enter a valid email",{cssClass:'alert-danger',timeout:3000});
        // 	return false;
        // }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Registered successfully,,!! You can login now..", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong..!!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(709),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/register.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = (function () {
    function ResetComponent(validateService, flashMessage, authService, route, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ResetComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //    this.token = params['token']; // --> Name must match wanted parameter
        //  });
        this.token = this.route.snapshot.params["token"];
    };
    ResetComponent.prototype.onResetPassword = function () {
        //  console.log(this.token);
        var _this = this;
        // console.log("access_token",resetToken);
        var user = {
            password: this.password,
            confirm: this.confirm,
            token: this.token
        };
        console.log("in reset component user", user);
        this.authService.resetPassword(user).subscribe(function (data) {
            console.log("data in reset resetPassword", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.password = "";
                _this.confirm = "";
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to change password', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/forgotten-password']);
            }
        });
    };
    ResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(710),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _e) || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/reset.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(711),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], TextComponent);
    return TextComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/text.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/environment.js.map

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".carousel {\n    position: relative;\n}\n\n.main-slider {\n    /* height: 450px; */\n    overflow: hidden;\n}\n\n.carousel-indicators {\n    bottom: 20px;\n}\n\n.carousel-indicators {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    z-index: 15;\n    width: 60%;\n    padding-left: 0;\n    margin-left: -30%;\n    text-align: center;\n    list-style: none;\n}\n\n.carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n}\n\n@media (min-width: 992px)\n.col-md-3 {\n    width: 25%;\n}\n\n@media (min-width: 992px)\n.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {\n    float: left;\n}\n.mver20 {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n}\n\n.notifications {\n    background-color: #fff4f0;\n    height: 400px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: 1pt solid #eee;\n}\n\n.row {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n.sapf-heading {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 37px;\n}\n\n.row {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n.our-blog-heading {\n    color: #727475;\n    font-size: 50px;\n    line-height: 50px;\n}\n\n@media (min-width: 1200px)\n.container {\n    width: 1170px;\n}\n\n.find-my-village {\n    background-color: #404040;\n}\n\n.pver80 {\n    padding-bottom: 80px !important;\n    padding-top: 80px !important;\n}\n\n.white {\n    color: white!important;\n}\n.m0 {\n    margin: 0 !important;\n}\n.find-my-village-heading {\n    font-family: 'Poppins', sans-serif;\n    font-size: 47px;\n    line-height: 47px;\n    color: #eee;\n    margin-bottom: 20px;\n}\n\n.find-my-village-button {\n    padding: 15px 20px;\n    background-color: #00baa3;\n    color: white;\n    width: 100%!important;\n    cursor: pointer;\n}\n.find-my-village-input {\n    background-color: #f9f9f9!important;\n    border: 1px solid #f1f1f1!important;\n    padding: 15px 20px!important;\n    color: #a3a3a3!important;\n    width: 100%!important;\n}\n\nh3 {\n    color: white!important;\n    font-size: 24px;\n}\n.mtop10 {\n    margin-top: 10px!important;\n}\n\n.mbot0 {\n    margin-bottom: 0!important;\n}\n\n.f20 {\n    font-size: 20px!important;\n}\n\n.thumbnail {\n    width: 280pt;\n    height: 350pt;\n} \n\n.thumbnail a>img{\n    width: 280pt;\n    height: 200pt;\n    margin-left: auto;\n    margin-top: auto;\n}\n\n#loading {\n   width: 100%;\n   height: 100%;\n   top: 0;\n   left: 0;\n   position: fixed;\n   display: none;\n   opacity: 0.7;\n   background-color: #fff;\n   z-index: 99;\n   text-align: center;\n}\n\n#loading-image {\n  position: absolute;\n  top: 100px;\n  left: 240px;\n  z-index: 100;\n}"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "\n/*\nbody{\n  background: #00589F;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00589F', endColorstr='#0073CF', GradientType=0);\n  background: -webkit-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\n  background: -moz-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\n  background: -ms-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\n  background: -o-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\n  background: linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\n  color: white;\n}*/\n\n/*div.well{\n  height: 250px;\n} \n*/\n.Absolute-Center {\n  margin: auto;\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n}\n\n.Absolute-Center.is-Responsive {\n  width: 50%; \n  height: 50%;\n  min-width: 200px;\n  max-width: 400px;\n  padding: 40px;\n  margin-top: 30pt;\n}\n\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ".navbar {\n   background-color: hsla(0, 0%, 0%, 0.45);\n   background: rgba(0, 0, 0, 0.75);\n   border-color: transparent;\n}\n\n.navbar li { color: #000 } \n\n\n/* CSS used here will be applied after bootstrap.css */\n\n.dropdown {\n    display:inline-block;\n    margin-left:20px;\n    padding:10px;\n  }\n\n\n.glyphicon-bell {\n   \n    font-size:1.5rem;\n    padding-top: inherit;\n  }\n\n/*.notifications {\n   min-width:420px; \n  }\n  \n.notifications-wrapper {\n     overflow:auto;\n      max-height:250px;\n    }*/\n  /*  \n .menu-title {\n     color:#ff7788;\n     font-size:1.5rem;\n      display:inline-block;\n      }*/\n \n.glyphicon-circle-arrow-right {\n      margin-left:10px;     \n   }\n  \n   \n /*.notification-heading, .notification-footer  {\n \tpadding:2px 10px;\n       }\n      */\n        \n.dropdown-menu.divider {\n  margin:5px 0;          \n  }\n\n/*.item-title {\n  \n font-size:1.3rem;\n color:#000;\n    \n}*/\n\n/*.notifications a.content {\n text-decoration:none;\n background:#ccc;\n\n }\n    \n.notification-item {\n padding:10px;\n margin:5px;\n background:#ccc;\n border-radius:4px;\n }*/\n\n\n.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {\n    color: #555;\n    background-color: #736e6e;\n}\n\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "\n\n.Absolute-Center {\n  margin: auto;\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n}\n\n.Absolute-Center.is-Responsive {\n  width: 50%; \n  height: 50%;\n  min-width: 200px;\n  max-width: 400px;\n  padding: 40px;\n  margin-top: 30pt;\n}"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "\n\n\n<app-navbar></app-navbar>\n\n<!-- \n<div class=\"container\"> -->\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n<!-- </div> -->\n\n\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Forgotten Password</h2>\n<p>Enter the email address you use to sign in to your Tesco.com account and we'll send you a link to reset your password.</p>\n<form (submit)=\"onResetLinkSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" \n\t\tplaceholder=\"ename@example.com\">\n\t</div>\n\t\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Get reset link\"/>\n</form>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "\n\n<body class=\"home page-template page-template-welcome page-template-welcome-php page page-id-5 page-animate fullpage-loaded fp-viewing-1\" style=\"overflow: hidden; height: 100%;\">\n\n<div id=\"main-slider\" class=\"carousel slide main-slider\" data-ride=\"carousel\">\n \n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n    <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    <li data-target=\"#main-slider\" data-slide-to=\"3\"></li>\n    <li data-target=\"#main-slider\" data-slide-to=\"4\"></li>\n    \n  </ol>\n\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img  src=\"../../../../images/homepage1.jpg\" alt=\"Chania\" style=\"width:1100pt;height:350pt;\">\n      <!-- <div class=\"carousel-caption\">\n        <h3>Los Angeles</h3>\n        <p>LA is always so much fun!</p>\n      </div> -->\n    </div>\n    <div class=\"item\">\n      <img  src=\"../../../../images/1.jpg\" alt=\"Chania\" style=\"width:1100pt;height:350pt;\">\n     \n    </div>\n  <!--   <div class=\"item\">\n      <img  src=\"../../../../images/pic.jpg\" alt=\"Chania\" style=\"width:1100pt;height:350pt;\">\n      \n    </div> -->\n   <!--  <div class=\"item\">\n      <img  src=\"../../../../images/homepage4.jpg\" alt=\"Chania\" style=\"width:1100pt;height:350pt;\">\n     \n    </div> -->\n    <div class=\"item\">\n      <img  src=\"../../../../images/homepage5.jpg\" alt=\"Chania\" style=\"width:1100pt;height:350pt;\">\n      <!-- <div class=\"carousel-caption\">\n        <h3>Los Angeles</h3>\n        <p>LA is always so much fun!</p>\n      </div> -->\n    </div>\n    <!-- <div class=\"item\">\n      <img src=\"../../../../images/rk1.jpg\" alt=\"Chicago\" style=\"width:1100pt;height:350pt;\">\n      \n    </div> -->\n    <div class=\"item\">\n      <img src=\"../../../../images/rk2.jpg\" alt=\"Chicago\" style=\"width:1100pt;height:350pt;\">\n      <!-- <div class=\"carousel-caption\">\n        <h3>Chicago</h3>\n        <p>Thank you, Chicago!</p>\n      </div> -->\n    </div>\n\n   <!--  <div class=\"item\">\n      <img   src=\"../../../../images/rk3.jpg\" alt=\"New York\" style=\"width:1100pt;height:350pt;\">\n     \n    </div> -->\n    <!--  <div class=\"item\">\n      <img   src=\"../../../../images/rk4.jpg\" alt=\"banglore\" style=\"width:1100pt;height:350pt;\">\n      \n    </div> -->\n    <div class=\"item\">\n      <img   src=\"../../../../images/pics.jpg\" alt=\"banglore\" style=\"width:1100pt;height:350pt;\">\n      <!-- class=\"d-block img-fluid\" -->\n      <!-- <div class=\"carousel-caption\">\n        <h3>bnjdsd</h3>\n        <p>We love the Big Apple!</p>\n      </div> -->\n    </div>\n  <!--   <div class=\"item\">\n      <img   src=\"../../../../images/rk6.jpg\" alt=\"banglore\" style=\"width:1100pt;height:350pt;\">\n     \n    </div> -->\n    <!-- <div class=\"item\">\n      <img   src=\"../../../../images/rk7.jpg\" alt=\"banglore\" style=\"width:1100pt;height:350pt;\">\n     \n    </div> -->\n  </div>\n\n\n  <a class=\"left carousel-control\" href=\"#main-slider\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#main-slider\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<br/>\n<div class=\"row \">\n        <div class=\"col-md-6 mver20\" >\n          <div class=\"sapf-heading\" style=\"margin-left: 10pt;\">RKVBPET</div>\n          <div class=\"clearfix underline-yellow\"></div>\n          <p class=\"mtop10 sapf-content\" style=\"margin-left: 10pt;\">RKVB Peta was a former zamindar, most prominent during the Vijayanagara Empire. The Bommaraju family trace their origins back to an ancestor who migrated from the Pithapuram area of the Godavari Delta in the 8th or 9th century. One ancestor obtained the favour of the Eastern Chalukya king Vimala Aditya, and Saluva Narasa was appointed the chief of the country around Tirupati, where he founded his capital called Narayanavanam. The rulers later built their new capital, Nagaram, here by clearing the forest. Narasa was granted permission by his patron to use the royal seal and boar-signet of the Chalukyas, a proud distinction still kept up. At one point Saluva Venkatapati was deposed by the Cholas, but Saluva Bhima recovered their territory. Saluva Narsimha assisted a Keralan king named Kirti Varman and assumed independence, ruling for 36 years.  </p>\n        </div>\n<!-- \n        <div> -->\n          <!-- <div class=\"notifications-heading\">Notifications</div> -->\n        <!--   <hr class=\"m0\"> -->\n          <!-- <div> -->\n         <table class=\"col-sm-6 col-md-3 notifications mver20\" style=\"position: relative; height: 300px; overflow: hidden; display: block;\">\n            <tr class=\"notifications-heading\"><th>Notification</th></tr>\n            <tr>\n            <marquee direction='up' scrollspeed='true' scrolldelay='200' loop='-1'>\n              <h5><strong>Cleanliness is the only medicine to all diseases</strong></h5>\n                 <p> Our team discussed about development activities \n                  Which is going to be held in 2018</p>\n              <hr>\n              <h5><strong>Be Clean - Go Eco-friendly</strong></h5>\n                 <p> All the roads will be cleaned every month and we are \n                    Planning to put slogan boards through out the village\n                    Two major trees has been planted in-front of temple \n                    in the entrance of village.</p>\n              <hr>\n             <h5><strong>Put waste in the right place</strong></h5>\n                 <p> Website and App is getting ready. Branding has to\n                    finalise for our group. All the work should be done\n                    Under this group.Facebook page and google maps \n                    has been created for village. </p>\n              <hr>\n              <h5><strong>Think clean & Use dust bin</strong></h5>\n                 <p> We are placing Dust bins all over the village and \n                    Making name plates for each and every street at\n                    the entrance of street.</p>\n              <hr>\n             \n            </marquee>\n            </tr>\n         </table>\n\n          <table class=\"col-sm-6 col-md-3 notifications mver20\" style=\"position: relative; height: 300px; overflow: hidden; display: block;background-color: cadetblue;\">\n            \n            <tr>\n              <a href=\"https://www.facebook.com/RKVBPeta/\">\n                <img src=\"../../../../images/facebook.jpg\" style=\"height: 100pt;margin-left: 30pt\"></a></tr>\n              <br/>\n            <tr>\n              <a href=\"https://www.google.co.in/maps/place/R+K+V+B+Pet,+Tirumalakondamambagaripeta,+Andhra+Pradesh+517582/@13.3962523,79.4196778,746m/data=!3m1!1e3!4m5!3m4!1s0x3a4d54897b536651:0xb1a972927bb6f2ee!8m2!3d13.3962128!4d79.4215085\">\n                <img src=\"../../../../images/maps.jpg\" style=\"height: 100pt;width:100pt;margin-left: 30pt\"></a>\n            </tr>\n           \n           \n         </table>\n\n            \n         <!--  </div> -->\n     <!--    </div> -->\n\n        \n        <!-- </div> -->\n\n      </div>\n      <div class=\"find-my-village pver80\">\n        <div class=\"container\">\n          <div class=\"col-lg-3\">\n            <h3 class=\"m0 white\">Join Us</h3>\n            <div class=\"find-my-village-heading\">\n              Donate for Our village\n            </div>\n          </div>\n          <div class=\"col-lg-7\">\n           <!--  <div class=\"col-sm-6\">\n              <div style=\"display: inline-block; width: 287.5px;\">\n                <input type=\"text\" class=\"find-my-village-input mtop10 district xdsoft_input\" autocomplete=\"off\" placeholder=\"Please enter District\" style=\"font-size: 14px;\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div style=\"display: inline-block; width: 287.5px;\">\n            <input type=\"text\" class=\"find-my-village-input mtop10 area xdsoft_input\" autocomplete=\"off\" disabled=\"\" placeholder=\"Urban/Rural\" style=\"font-size: 14px;\">\n             </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div style=\"display: inline-block; width: 287.5px;\">\n            <input type=\"text\" class=\"find-my-village-input mtop10 panchayatWard xdsoft_input\" autocomplete=\"off\" disabled=\"\" placeholder=\"Please enter Panchayat/Ward\" style=\"font-size: 14px;\">\n             </div>\n            </div> -->\n             <div class=\"col-sm-6\">\n              <div style=\"display: inline-block; width: 350px;margin-left:80pt;\">\n                <h4><strong style=\"margin-left: 70pt;color: floralwhite;font-size: 20px;\">Paytm to 9945344335</strong></h4>\n            <!-- <input type=\"text\" class=\"find-my-village-input mtop10 panchayatWard xdsoft_input\" \n            [(ngModel)]=\"amount\"  name=\"amount\" placeholder=\"Please enter the amount you want to donate\" style=\"font-size: 14px;\"> -->\n             </div>\n           </div>\n            <div class=\"col-sm-6\" style=\"width: 200pt;margin-left: 120pt;margin-top: 30pt;\">\n            \n\n            <!--  <div class=\"find-my-village-button mtop10 text-center\">  -->\n            <!-- \n              <button   class=\"find-my-village-button mtop10 text-center\" (click)=\"pay(amount)\" [disabled]=\"paybutton\"> Pay</button> \n\n              <div id=\"loading\">\n\n                  <img id=\"loading-image\" src=\"../../../../images/loading.gif\" alt=\"Loading...\" />\n                  \n              </div>  -->\n             \n           <!--  </div> -->\n           <div>\n                <img  src=\"../../../../images/qrcode.png\" alt=\"Loading...\"  style=\"width: 150pt;margin-left: 30pt;\"/>\n          </div> \n\n          <!--  <div class=\"find-my-village-button mtop10 text-center disabledbutton\" (click)=\"pay(amount)\"> \n            \n            Pay\n              <div id=\"loading\">\n                <img id=\"loading-image\" src=\"../../../../images/loading.gif\" alt=\"Loading...\" />\n              </div> \n            </div> -->\n           \n\n          </div>\n          </div>\n          <div class=\"col-lg-2\">\n            <div class=\"clearfix\"></div>\n                <h3 class=\"mtop10 mbot0 white f20 visible-lg\">Become a patner.</h3>\n                <h3 class=\"mtop20 mbot0 clr-1 f20 visible-lg\">Check all our projects!</h3>\n                <h3 class=\"mtop20 mbot0 white f20 text-center hidden-lg\">Become a partner.</h3>\n                <h3 class=\"mtop10 mbot0 clr-1 f20 text-center hidden-lg\">Check all our projects!</h3>\n            </div>\n\n\n        </div>\n\n      </div>\n      <div class=\"container\">\n      <h1 class=\"our-blog-heading\">\n        <a href=\"case-studies.html\">Success Stories</a>\n        </h1>\n        <br>\n        <div class=\"row blog-items\">\n          <div class=\"col-sm-6 col-md-4 blog-story\">\n              <div class=\"thumbnail p0\">\n                <a href=\"case-study.html?Id=11\">\n                <img src=\"../../../../images/leadership.jpg\" alt=\"...\">\n                </a> \n               <!--  <div class=\"blog-story-author\">\n                <span class=\"fa fa-user-o\"></span>\n                      <span>Admin</span>\n                      <span class=\"fa fa-comment-o mleft15\"></span>\n                      <span>0 Comments</span>\n                </div> -->\n                <div class=\"blog-story-content\">\n                <div class=\"blog-story-info\">\n                      <h3 class=\"blog-story-heading f20\">Celebrating Leadership and Smartness</h3>\n                      <p class=\"blog-story-description\">\"There was spark in the village leadership and strong sense of determination to make a difference. The leadership of a village is critical in shaping the future.If the supervision of a village is good and effective, the people are bound to be successful.\"</p>\n                  </div>\n                        <!-- <p class=\"blog-story-link\"><a class=\"clr-3 blog-story-link\" href=\"case-study.html?Id=11\">Read more »</a></p> -->\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-md-4 blog-story\">\n              <div class=\"thumbnail p0\">\n                <a href=\"case-study.html?Id=11\">\n                  <img src=\"../../../../images/festival2.jpg\" alt=\"...\">\n              <!-- <marquee direction='left' scrolldelay='50' style=\"width:250pt;height:180pt;\">\n                <img src=\"../../../../images/festival.jpg\" alt=\"...\"> </marquee>\n              <marquee direction='left' scrolldelay='50' style=\"width:250pt;height:180pt;\">\n                <img src=\"../../../../images/festival1.jpg\" alt=\"...\"> </marquee>\n              <marquee direction='left' scrolldelay='50' style=\"width:250pt;height:180pt;\">\n                <img src=\"../../../../images/festival2.jpg\" alt=\"...\">\n\n              </marquee> -->\n                </a> \n               <!--  <div class=\"blog-story-author\">\n                <span class=\"fa fa-user-o\"></span>\n                      <span>Admin</span>\n                      <span class=\"fa fa-comment-o mleft15\"></span>\n                      <span>0 Comments</span>\n                </div> -->\n                <div class=\"blog-story-content\">\n                <div class=\"blog-story-info\">\n                      <h3 class=\"blog-story-heading f20\">Celebrating Festivals</h3>\n                      <p class=\"blog-story-description\">“The first step to developing relationships with people is that they should accept you as one among them. For this purpose, We have started celebrating festivals in the village- Sankaranti, Deepavali, Gangamma Jathara, Vinayaka Chathurthi, Sri Rama navami usthvalu, Navarathri usthvalu and many festivals”</p>\n                  </div>\n                        <!-- <p class=\"blog-story-link\"><a class=\"clr-3 blog-story-link\" href=\"case-study.html?Id=11\">Read more »</a></p> -->\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-md-4 blog-story\">\n              <div class=\"thumbnail p0\">\n                <a href=\"case-study.html?Id=11\">\n                <img src=\"../../../../images/vision.jpg\" alt=\"...\">\n                </a> \n               <!--  <div class=\"blog-story-author\">\n                <span class=\"fa fa-user-o\"></span>\n                      <span>Admin</span>\n                      <span class=\"fa fa-comment-o mleft15\"></span>\n                      <span>0 Comments</span>\n                </div> -->\n                <div class=\"blog-story-content\">\n                <div class=\"blog-story-info\">\n                      <h3 class=\"blog-story-heading f20\">Vision</h3>\n                      <p class=\"blog-story-description\">“Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.”</p>\n                  </div>\n                        <!-- <p class=\"blog-story-link\"><a class=\"clr-3 blog-story-link\" href=\"case-study.html?Id=11\">Read more »</a></p> -->\n                  </div>\n              </div>\n          </div>\n                \n\n\n        </div>\n    </div>\n\n</body>\n\n\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t <div class=\"Absolute-Center is-Responsive\">\n\n<form (submit)=\"onLoginSubmit()\"> \n\n\t\n\t\t \t<h2 class=\"page-header\" style=\"margin-left: 85pt;border-bottom: none;\">Login</h2>\n\t<div class=\"form-group input-group\" >\n\t\t<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"username\">\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n\t\t<!-- <label>Password</label> -->\n\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\">\n\t</div>\n\t<div class=\"form-group text-center\">\n\t<a [routerLink]=\"['/forgotten-password']\">\n\t\t<span>I've forgotten my password</span>\n\t</a>\n\t</div>\t\n\t<!-- <br/> -->\n<!-- \t<br/> -->\n\t<!-- <div class=\"form-group\">\n            <button type=\"button\"  style=\"width: 240pt\" class=\"btn btn-primary\">Login</button>\n    </div> -->\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" style=\"width: 240pt\">\n\t\n\n</form>\n\t</div>\n\t</div>\n</div>\n\t\n<!-- \n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"Absolute-Center is-Responsive\">\n      <div id=\"logo-container\"></div>\n      <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n        <form action=\"\" id=\"loginForm\">\n          <div class=\"form-group input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input class=\"form-control\" type=\"text\" name='username' placeholder=\"username\"/>          \n          </div>\n          <div class=\"form-group input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input class=\"form-control\" type=\"password\" name='password' placeholder=\"password\"/>     \n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> I agree to the <a href=\"#\">Terms and Conditions</a>\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-def btn-block\">Login</button>\n          </div>\n          <div class=\"form-group text-center\">\n            <a href=\"#\">Forgot Password</a>&nbsp;|&nbsp;<a href=\"#\">Support</a>\n          </div>\n        </form>        \n      </div>  \n    </div>    \n  </div>\n</div> -->"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\n\t\t\t</button>\n      <div class=\"navbar-collapse js-navbar-collapse\">\n      <ul class=\"nav navbar-nav page-menu\">\n        <li><a class=\"navbar-brand\" [routerLink]=\"['/text']\" style=\"color: whitesmoke; margin-top: 10pt;\n              margin-right: 20pt;\">\n      <span class=\"glyphicon glyphicon-home\"></span></a></li>\n      <li><a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: whitesmoke;\">\n      <h5 style=\"color: whitesmoke;\">RKVBPET</h5></a>\n      <br/>\n      <h6 style=\"color: whitesmoke;\">Smart Village</h6></li>\n      <li *ngIf=\"user\">\n       <li *ngIf=\"authService.loggedIn()\" style=\"margin-top: 20pt;margin-left: 20pt;color: blanchedalmond;\">Welcome {{user.username}}..!!</li>\n      </ul>\n\t\t\t\n      </div>\n\n\t\t\n\t    </div>\n     \n     <!-- Right part-->\n\n     <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n       <!--  <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li> -->\n        <li class=\"dropdown\">\n          <a href=\"#\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: whitesmoke;\">Programs <span>\n                   <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n          </span></a>\n          <ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n          <li><a href=\"#\">Education</a></li>\n          <li><a href=\"#\">Skill Development</a></li>\n          <li><a href=\"#\">Health Care</a></li>\n          <li><a href=\"#\">Sports</a></li>\n        </ul>\n        </li>\n        <li class=\"dropdown\">\n           <a href=\"#\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: ghostwhite;\">Community Participation\n       <span>\n        <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n              </span></a>\n    <ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n      <li><a href=\"#\">Post a Problem</a></li>\n      <li><a href=\"#\">Share your Queries</a></li>\n      <li><a href=\"#\">List post views</a></li>\n      <li><a href=\"#\">List Success Stories</a></li>\n    </ul>\n  </li>\n  <li class=\"dropdown\">\n           <a href=\"#\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" style=\"color: whitesmoke;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" >About Us\n       <span class=\"pull-right\">\n                   <!-- <i class=\"icon icon-up-arrow up-arrow\" aria-hidden=\"true\"></i> -->\n                  <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n              </span></a>\n    <ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n      <li><a href=\"#\">Profile</a></li>\n                  <li><a href=\"#\">Vision</a></li>\n                  <li><a href=\"#\">Mission</a></li>\n      <li><a href=\"#\">Objectives</a></li>\n    </ul>\n  </li>\n   <li class=\"dropdown\">\n           <a href=\"#\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" style=\"color: whitesmoke;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" >Contact Us\n       <span class=\"pull-right\">\n                   <!-- <i class=\"icon icon-up-arrow up-arrow\" aria-hidden=\"true\"></i> -->\n                  <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n              </span></a>\n    <ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n      <li><a href=\"#\">9945344335</a></li>\n      <li><a href=\"#\">rkvbpet.smartvillage@gmail.com</a></li>\n                 \n    </ul>\n  </li>\n\n\n  \n      </ul>\n     \n      <ul class=\"nav navbar-nav navbar-right\">\n         <li>\n          <a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\" style=\"color: whitesmoke;\">Profile </a>\n        </li>\n        <li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/login']\" style=\"color: whitesmoke;    margin-top: 7pt;\">\n              <span class=\"fa fa-unlock-alt\"></span>\n              Login </a>\n        </li>\n        <li class=\"dropdown\">\n          <a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\" \n              style=\"color: whitesmoke;\">\n              <span class=\"fa fa-user\"></span>\n              Register </a>\n        </li>\n         <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\" \n              style=\"color: whitesmoke;\">Logout </a>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n\n \t</div>\n </nav>\n\n\n\n   "

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<!-- <h2 class=\"page-header\">{{user.name}}</h2> -->\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"> Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\"> Email : {{user.email}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<div class=\"well\"> -->\n<div class=\"container\">\t\t\n\t<div class=\"row\">\n\t\t<div class=\"Absolute-Center is-Responsive\">\n\t\t<h2 class=\"page-header\" style=\"margin-left: 68pt;margin-top:10pt;border-bottom: none;\">Register</h2>\n\t\t<form (submit)=\"onRegisterSubmit()\"> \n\t\t<!-- <div class=\"col-md-5\"> -->\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\" \n\t\t\t\tplaceholder=\"FirstName\" style=\"width: 240pt\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\" \n\t\t\t\tplaceholder=\"LastName\" style=\"width: 240pt\"> \n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t    <!-- <div class=\"field-wrap\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"postalcode\" name=\"postalcode\" class=\"form-control\" \n\t\t\tplaceholder=\"Postalcode\">\n\t\t\t</div>\n\t\t\t<div cclass=\"field-wrap\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\"\n\t\t\t\t placeholder=\"City\">\n\t\t\t</div>\n\n\t\t\t<div class=\"field-wrap\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"street\" name=\"street\" class=\"form-control\" \n\t\t\tplaceholder=\"Street\">\n\t\t    </div>\n\t\n\t\t\t<div class=\"field-wrap\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"form-control\" \n\t\t\t\tplaceholder=\"State\">\n\t\t\t</div>\n\t\t\t<div class=\"field-wrap\">\n\t\t\t\t<input type=\"date\" [(ngModel)]=\"dob\" name=\"dob\" class=\"form-control\" \n\t\t\t\tplaceholder=\"Date Of Birth\">\n\t\t\t</div> -->\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" \n\t\t\t\tplaceholder=\"Email\" style=\"width: 240pt\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"mobno\" name=\"mobno\" class=\"form-control\"\n\t\t\t\tplaceholder=\"Mobile No\" style=\"width: 240pt\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\"\n\t\t\t\tplaceholder=\"UserName\" style=\"width: 240pt\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" \n\t\t\t\tplaceholder=\"Password\" style=\"width: 240pt\">\n\t\t\t</div>\n\t\t\t<!-- <div class=\"form-group\">\n            <button type=\"button\"  style=\"width: 240pt\" class=\"btn btn-primary\">Sign Up</button>\n    \t\t</div> -->\n\t\t<!-- </div> -->\n\t\t<input type=\"submit\" style=\"width: 240pt\" class=\"btn btn-primary\" value=\"Sign up\">\n\t\t<!-- <a href=\"/\" class=\"btn btn-default\" style=\"width: 240pt\"> Cancel</a> -->\n\t\t</form>\n\t</div>\n\t</div>\n</div>\n\n<!-- <form (submit)=\"onRegisterSubmit()\"> \n\t<div class=\"form-group input-group\">\n\t\t<label>First Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<label>Last Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<label>Date of Birth</label>\n\t\t<input type=\"date\" [(ngModel)]=\"dob\" name=\"dob\" class=\"form-control\">\n\t</div>\n\n\t<div class=\"form-group input-group\">\n\t\t<label>Address</label>\n\t\t<div class=\"form-group\">\n\t\t<label>Street</label>\n\t\t<input type=\"text\" [(ngModel)]=\"street\" name=\"street\" class=\"form-control\">\n\t\t<label>Postal Code</label>\n\t\t<input type=\"text\" [(ngModel)]=\"postalcode\" name=\"postalcode\" class=\"form-control\">\n\t\t<label>City</label>\n\t\t<input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\">\n\t\t<label>State</label>\n\t\t<input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"form-control\">\n\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<label>Mobile No</label>\n\t\t<input type=\"number\" [(ngModel)]=\"mobno\" name=\"mobno\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group input-group\">\n\t\t<label>UserName</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t\n\t\n\t\n\t<div class=\"form-group input-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\t<a href=\"/\" class=\"btn btn-default\"> Cancel</a>\n\t\n</form>\n</div>\n\n\n -->\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Reset Password</h2>\n<form (submit)=\"onResetPassword()\"> \n\t<div class=\"form-group\">\n\t\t<label>New Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" \n\t\tplaceholder=\"New Password\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Confirm Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"confirm\" name=\"confirm\" class=\"form-control\" \n\t\tplaceholder=\"Confirm Password\">\n\t</div>\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Update Password\"/>\n</form>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<!-- <body style=\"margin-left: 20pt;\"> -->\n<h3 style=\"margin-left: 20pt;color: cadetblue;font-style: italic;\">\n\t<strong>RKVB PET AT A GLANCE</strong>\n</h3>\n<br/>\n\n<p style=\"margin-left: 20pt;color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\">Raja Kumara Venkata Perumal Bahadhur Peta so called as RKVB Pet.<p>\n\n<h3 style=\"margin-left: 20pt;color: cadetblue;font-style: italic;\"><strong>LOCALITY</strong></h3>\n\n<p style=\"margin-left: 20pt;color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\">R.k.v.b. Peta is a Village in Karvetinagar Mandal in Chittoor District of Andhra Pradesh State, India. It belongs to Rayalaseema region . It is located 48 KM towards East from District head quarters Chittoor. 4 KM from Mandal head quarters of Karvetinagar. 445 KM from State capital Amaravati.R.k.v.b. Peta Pin code is 517582 and postal head office is Karvetinagar.\n\nPuttur , Nagari , Tirupati , Chittoor are the near by Cities to R.k.v.b. Peta.This Place is in the border of the Chittoor District and Thiruvallur District. Thiruvallur District Pallipattu is South towards this place . It is near to the Tamil Nadu State Border.\n\nThe nearest international airport is at Chennai (115 km), and Tirupati (45 km) away.\n\nAssembly Constituency is G.D.Nellore and Parliamentary Constituency is Chittoor</p>\n\n<h3 style=\"margin-left: 20pt;color: cadetblue;font-style: italic;\"><strong>DEMOGRAPHICS OF RKVBPET</strong>\n</h3>\n\n<p style=\"margin-left: 20pt;color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\">Telugu is the Local Language here. Total population of R.k.v.b. Peta is 3302 .Males are 1653 and Females are 1,649 approximately. Total area of R.k.v.b. Peta is around 1000 hectares. </p>\n\n\n<h3 style=\"margin-left: 20pt;color: cadetblue;font-style: italic;\"><strong>HISTORY</strong><h3>\n\n<p style=\"line-height: 1.42857143;\n    color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\" >\n\tRKVB Peta was a former zamindar, most prominent during the Vijayanagara Empire. The Bommaraju family trace their origins back to an ancestor who migrated from the Pithapuram area of the Godavari Delta in the 8th or 9th century. One ancestor obtained the favour of the Eastern Chalukya king Vimala Aditya, and Saluva Narasa was appointed the chief of the country around Tirupati, where he founded his capital called Narayanavanam. The rulers later built their new capital, Nagaram, here by clearing the forest. Narasa was granted permission by his patron to use the royal seal and boar-signet of the Chalukyas, a proud distinction still kept up. At one point Saluva Venkatapati was deposed by the Cholas, but Saluva Bhima recovered their territory. Saluva Narsimha assisted a Keralan king named Kirti Varman and assumed independence, ruling for 36 years. Saluva Bhujanga was defeated and became a feudal of Western Chalukya king Someswara and was taken prisoner to Kalyan, where he died. Subsequent descendants recovered the estate, and in 1230 AD a part of the estate was taken over by Raja Raja Chola the second, of the Chola dynasty. During the next four generations, as the power of the Cholas declined, the fortunes of the Karvetinagar family rose, the family became feudatories of Vijayanagar, and had marriage alliances with the Saluva and loyalties to the Aravidu dynasty over the next two hundred years. Around the 16th century the family changed their name to the current Bommaraju, retaining Saluva as a title. After Bommaraju, prominent among their dynasty are Raja Kumara Venkataperumal Raja Shadur, last ruler of the erstwhile zamindar of Karvetinagar in 1940. After his death his brother Raja Kumara Kumaraswamy Raja was confirmed with the rajah title and became the First M.L.A of Puttur. He donated Lashmi Mahal Palace for use as a Government High School, at present a junior college and degree college located in the same palace premises. He died without issue in 1952. After his death his co-brother Raja Kumara Srinivasa Varma Son Raja Kumara Venkataperumal Raju, alias Raja Kumara Janardhana Varma, was confirmed raja by the then presidency of the Madras Government. As a holder of the rajah title he was honoured by the temple's management of constructed karvetinagar rajahas, like Tiruttani and Narayanavanam, Appalaya gunta temples etc. during his lifetime. He died in the 2008. He has two sons, Raja Kumara Bramha Raja Varma (alias Srikanth Varma) and Raja Kumara Harsha Vardhana Varma, at present residing at Karvetinagaram.\n</p>\n\n\n\n<h3 style=\"color: cadetblue;font-style: italic;\"><strong>PLACES TO VISIT</strong> </h3>\n<p style=\"line-height: 1.42857143;\n    color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\">\nSri Rama temple\n\nGangamma temple\n\nVinayaka temple\n\nNagalamma temple\n\nMunneswara temple\n\nVillage center koneru\n\nRamachandramma temple (Located in hills of Village)\n\nTulasamma temple (Located in forest hill of Village)\n\nKanikalamma temple\n\nSri Vari koneru (Located in 3 KM from Village)\n\nSri Venugopala Swamy temple (Located in 4 KM from Village)\n\nSubramanyam swamy temple (Located in 4 KM from Village)\n\nRaja Rajeswari temple (Located in 4 KM from Village)\n\nBangaramma and Ankallamma temple(Located in 2 KM from Village)\n</p>\n\n\n\n<h3 style=\"color: cadetblue;font-style: italic;\"><strong>FESTIVALS</strong></h3>\n\n<ul style=\"line-height: 1.42857143;\n    color: black;font-style: italic;font-weight: 200;font-size: medium;font-variant: initial;\">\n\n<li>Gangamma Jathara\n\t<p>\n          The local festival called Gangamma Jathara is celebrated in the month of March every year. The whole village will wear a festive look during the festival.\n\n          People prepare \"Ambili\" (a very healthy and tasty Raggi malt with Onions) submitted in front of the goddess in every street of village\n\n          The people in the Village decorate the streets and houses with lights and neem leaves. The most important part of this festival is people doing Veshas during this time.\n\n          It will be so funny and entertainment.A small exhibition and stalls take place on those days, entertaining the people. In the stalls, people can be seen buying small toys, \n\n          decoration items,cosmetics, and home appliances. There are also fun-rides available for kids and the whole place looks like a carnival.</p></li>\n\n<li>Sankranthi Fest\n         <p>This is one of the best festival will happen in Village in the month of Jan. festival will start with BHOGI on the first day morning 2 AM. \n\n          Village organization conduct all the games like Cricket ,Volleyball , badminton, Kabaddi, Cycling, Carrom.\n\n          Especially Organization will conduct Rangoli for all the women in the village. During this fest all the streets will be fully decorated with lights and Rangoli\n\n\t  All the village people throughout the world always try to attend this festival and get the most happiness and funny moments.\n\n\t  Final day Organization conducts distributing gifts for the winners in sports and rangoli contest. People and kids will be entertained with their singing and dancing performance</p></li>\n\n<li>Vijayadasami Ustavalu\n\t  <p>Village People will be doing 9 days Pooja for goddess gangamma and seethalamma during this festival.\n\n\t   People also prepare and distribute different variety of prasadams during this festival on all the days</p></li>\n\n<li>Sri Ramanavami Ustavalu\n\t  <p>Village people will be performing Pooja and Uregimpu for Lord Sri Rama around 10 days during this festival.\n\n\t  All the families will be distributes Prasadam thoughout the village on these 10 days.\n\n\t  Majorly will be performing Sri Rama marriage and Unjal seva. The main part of this festival people from all families will do firecrackers when they come to temple from their houses.</p></li>\n\n<li>Deepavali\n\t   <p>During this festival people will be wearing full traditional dresses and will go to temple. Kids and youth mainly enjoy with firecrackers.</p></li>\n\n\t   People of village fully cover their houses with lights and “Pramida Deepalu”.\n\n<li>Vinayaka Chaviti\n\t  <p> During this festival Organization will place one big statue of lord Vinayaka on the center of village and perform Pooja for 5 days. \n\n\t   On the final day Vinayaka Nimmajjanam will happen in the Koneru of Village\n\nAadi Krishika\nNagala Chaviti\nUgadi (Telugu new year fest)\nVaikunta Ekadasi\n\n</p></li>\n\n<h3 style=\"color: cadetblue;font-style: italic;\"><strong>Schools</strong></h3>\n<ul>\n<li>Anganvadi pre-nursery School</li>\n<li>Mandal Parishad Primary School </li>\n<li>Zilla parishad high school</li>\n</ul>\n\n\n<h3 style=\"color: cadetblue;font-style: italic;\"><strong>Government and Organization places</strong></h3>\n\n<ul>\n<li>Panchayat building</li>\n<li>Mineral water plant</li>\n<li>Beautiful play ground</li>\n<li>Resting Ares</li>\n</ul>\n\n<!-- </body> -->"

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[756]);
//# sourceMappingURL=main.bundle.map