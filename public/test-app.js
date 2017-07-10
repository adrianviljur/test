angular.module("testApp", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html",
            controller: "testController"
        });
        console.log("App for angular initialized");
});