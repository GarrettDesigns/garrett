'use strict';

angular.module('tmp-components',[])
	.directive('portfolioItem', function() {
		return {
			restrict: 'E',
			scope: {
				item: '='
			},
			templateUrl: 'templates/portfolio-item.html',
			replace: true
		};
	});
