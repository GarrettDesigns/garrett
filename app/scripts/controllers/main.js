'use strict';

/**
 * @ngdoc function
 * @name garrettApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the garrettApp
 */
angular.module('garrettApp')
  .controller('MainController', function ($scope, $http) {
  	$http.jsonp('https://api.forecast.io/forecast/d4286e2ccfad887e26d8ab3bcd5db3bd/41.8500300,-87.6500500?callback=JSON_CALLBACK')
  	.success(function(data) {
  		$scope.chicago = data;
  	});
	$http.jsonp('https://api.forecast.io/forecast/d4286e2ccfad887e26d8ab3bcd5db3bd/33.4483800,-112.0740400?callback=JSON_CALLBACK')
  	.success(function(data) {
  		$scope.phoenix = data;
  	});
  	$http.jsonp('https://api.forecast.io/forecast/d4286e2ccfad887e26d8ab3bcd5db3bd/42.4031,-86.2736?callback=JSON_CALLBACK')
  	.success(function(data) {
  		$scope.southHaven = data;
  	});
  });
