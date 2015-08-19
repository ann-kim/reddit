var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {
	$scope.getPosts = function() {
		firebaseService.DevMtn().then(function(res) {
			$scope.posts = res.data;
		})
	}

	$scope.getPosts();

	// $scope.addPost = function() {
	// 	firebaseService.addPost($scope.newPost);
	// }
});