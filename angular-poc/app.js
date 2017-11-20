'use strict';

var app = angular.module('MyWebApp', ['ui.router']);

app.config(['$stateProvider', function($stateProvider) {
	
	var login = {
        url: '/login',
        templateUrl: 'login.html',            
        controller: 'UserController'
    };

	var loginSuccess = {
        url: '/login-success',
        template: '<h1>Sign In Successful.</h1>',            
        controller: 'UserController'
    };

	$stateProvider.state('login', login);
	$stateProvider.state('login-success', loginSuccess);
}]);
