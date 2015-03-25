'use strict';

angular.module('tmp-components',[])
	.directive('cityWeather', function() {
		return{
			restrict: 'E',
			templateUrl: 'templates/cityWeather.html',
			scope: {
				timezone: '@',
				summary: '@',
				temperature: '@',
				sunrise: '@',
				sunset: '@',
				alerts: '@',
				icon: '@'
			},
			replace: true
		};
	});