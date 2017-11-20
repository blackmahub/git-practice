'use strict';

app.controller('UserController', ['$scope', 'UserService', function($scope, userService) {
    $scope.user = userService.user;
    
   	$scope.signIn = function() {	
    	console.log($scope.user.email, $scope.user.password);
		userService.user = $scope.user;
		userService.login();
    }; 
}]);


