var app = angular.module('myApp', []);
app.controller('BmtcController', function($scope, $http,$filter, $window) {
	 $scope.dataLoaded = false;
var filterFilter = $filter('filter');	
	$http({method: 'POST', url: 'js/bmtc.json'}).success(function(data) {
		$scope.posts = data;
		$scope.dataLoaded =true;
	});
});