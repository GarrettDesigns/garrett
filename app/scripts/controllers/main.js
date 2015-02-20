'use strict';

/**
 * @ngdoc function
 * @name garrettApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the garrettApp
 */
angular.module('garrettApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
