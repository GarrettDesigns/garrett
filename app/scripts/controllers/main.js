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
  	$scope.portfolio = [
  		{
  			image: 'http://dummyimage.com/400x250/4d494d/686a82.gif&text=placeholder+image',
  			description: 'This is the first item'
  		},
  		{
  			image: 'http://dummyimage.com/400x250/4d494d/686a82.gif&text=placeholder+image',
  			description: 'This is the second item'
  		},
  		{
  			image: 'http://dummyimage.com/400x250/4d494d/686a82.gif&text=placeholder+image',
  			description: 'This is the third item'
  		},
  		{
  			image: 'http://dummyimage.com/400x250/4d494d/686a82.gif&text=placeholder+image',
  			description: 'This is the fourth item'
  		},
  		{
  			image: 'http://dummyimage.com/400x250/4d494d/686a82.gif&text=placeholder+image',
  			description: 'This is the fifth item'
  		}
  	];
  });
