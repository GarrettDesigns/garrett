'use strict';

/**
 * @ngdoc function
 * @name garrettApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the garrettApp
 */
angular.module('garrettApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
