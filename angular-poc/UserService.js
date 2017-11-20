'use strict';

app.service('UserService', ['$http', '$state', function ($http, $state) {
	var self = this;
	
	self.user = {
		username: null,
		email:  null,
		password: null,
	};

	var restApi = {
		login: 'https://jsonplaceholder.typicode.com/users'//'121.0.0.1/biig/rest/users/login'
	};

	self.login = function () {
		console.log('url: ', restApi.login);
		console.log('data: ', self.user);
		$http.post(restApi.login, self.user)
				.success(function(data) {
					console.log('login success ...');
					$state.go('login-success');
				})
				.error(function(data) {
					console.log( "failure message: " + JSON.stringify({data: data}));
				}); 
	};
	
}]);
