angular
	.module("testApp")
	.controller("testController", ["$scope", "$http", function($scope, $http) {

		console.log("Controller initialized.");
	      $scope.helloWorld = "Hello world from AngularJS"; 

}]);