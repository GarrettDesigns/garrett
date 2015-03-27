'use strict';

angular.module('tmp-components',[])
	.directive('portfolioItem', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/portfolioItem.html',
			replace: true
		};
	});