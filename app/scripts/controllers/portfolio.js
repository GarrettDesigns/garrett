 'use strict';

 angular.module('garrettApp')
  .controller('PortfolioController', function($scope, PortDetailService) {
    $scope.portfolio = PortDetailService;
    $scope.portList = PortDetailService.portList();
  })
  .controller('PortfolioDetailController', function (PortDetailService, $scope, $stateParams) {
    $scope.urlTitle = $stateParams.urlTitle;
    $scope.portItem = PortDetailService.get($scope.urlTitle);
  });
