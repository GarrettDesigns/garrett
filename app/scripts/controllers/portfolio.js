 'use strict';

 angular.module('garrettApp')
  .controller('PortfolioController', function($scope, PortDetailService) {
    $scope.portfolio = PortDetailService;
    $scope.portList = PortDetailService.portList();
  })
  .controller('PortfolioDetailController', function (PortDetailService, $scope, $stateParams) {
    $scope.portfolio = PortDetailService;
    $scope.portList = PortDetailService.portList();
    $scope.urlTitle = $stateParams.urlTitle;
  });
