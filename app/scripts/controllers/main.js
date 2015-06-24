'use strict';

/**
 * @ngdoc function
 * @name garrettApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the garrettApp
 */
angular.module('garrettApp')
  .controller('MainController', function ($scope, $stateParams) {
    $scope.urlTitle = $stateParams.urlTitle;
  });
