 'use strict'

 angular.module('garrettApp')
  .controller('PortfolioController', function($scope, PortDetailService) {
    $scope.portfolio = PortDetailService.portList();
  })
  .controller('PortfolioDetailController', function (PortDetailService) {
    $scope.portfolio = PortDetailService.portList();
  });
