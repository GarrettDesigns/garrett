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
  			image: 'images/redhawkcasino_03.jpg',
  			description: 'This is the first item'
  		},
  		{
  			image: 'images/redhawkcasino_03.jpg',
  			description: 'This is the second item'
  		},
  		{
  			image: 'images/redhawkcasino_03.jpg',
  			description: 'This is the third item'
  		},
  		{
  			image: 'images/redhawkcasino_03.jpg',
  			description: 'This is the fourth item'
  		},
      {
        image: 'images/redhawkcasino_03.jpg',
        description: 'This is the fifth item'
      },
  		{
  			image: 'images/redhawkcasino_03.jpg',
  			description: 'This is the sixth item'
  		}
  	];
  });
