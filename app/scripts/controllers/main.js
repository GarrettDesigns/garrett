'use strict';

/**
 * @ngdoc function
 * @name garrettApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the garrettApp
 */
angular.module('garrettApp')
  .controller('MainController', function ($scope) {
  	$scope.portfolio = [{
  		item1: {
  			image: 'http://dummyimage.com/400x300/4d494d/686a82.gif&text=placeholder+image'
  		},
  		item2: {
  			image: 'http://dummyimage.com/400x300/4d494d/686a82.gif&text=placeholder+image'
  		},
  		item3: {
  			image: 'http://dummyimage.com/400x300/4d494d/686a82.gif&text=placeholder+image'
  		},
  		item4: {
  			image: 'http://dummyimage.com/400x300/4d494d/686a82.gif&text=placeholder+image'
  		},
  		item5: {
  			image: 'http://dummyimage.com/400x300/4d494d/686a82.gif&text=placeholder+image'
  		}
  	}];
  });
