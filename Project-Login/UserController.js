'use strict';

app.controller('UserController', function($scope) {//, User, UserService) {
    //$scope.User = User;
    
   	$scope.inputEmail= "hello@hello.com";
	$scope.inputPassword="";
   
	$scope.signIn = function() {	
    	console.log($scope.inputEmail, $scope.inputPassword);
    }; 
});


