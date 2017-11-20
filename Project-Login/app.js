 // create the module and name it scotchApp
	var app = angular.module('MyWebApp', ['ui.router']);

	app.config(['$stateProvider', function($stateProvider) {
		
		var signin = {
	        url: '/signin',
	        templateUrl: 'Login.html',            
	        controller: 'UserController'
	    };

		$stateProvider.state('signin', signin);
	}]);

	/*app.run(['$rootScope', 'settings', '$state', function($rootScope, settings, $state) {
		$rootScope.$state = $state; 
	}]);*/

	/*app.controller('myLoginCtrl', function($scope,$http) {
		
		$scope.SignIn = function(){
			$scope.inputEmail= "";
			$scope.inputPassword="";
			/*
			var url="";
			$http.get(url).success( function(response) {
			if(response ==true){
				$scope.inputEmail= "";
				$scope.inputPassword="";
			}
			else{

			}
						
			});	
			
		}
    
	});*/
