var app = angular.module('reddit');

app.service('firebaseService', function($http, $q) {
	this.DevMtn = function() {
		var dfd = $q.defer();
		$http ({
			method: 'GET',
			url: 'https://devmtn.firebaseio.com/posts.json'
		}).then(function(res) {
			var data = res.data;
			console.log(data);
			dfd.resolve(data);
		})
	return dfd.promise;
	}

	this.addPost = function(post) {
		
	}
});