'use strict';

angular.module('garrettApp')
  .service('BadgeListService', function ($http) {
    $http.get("http://teamtreehouse.com/garrettkucinski3.json")
      .success(function(data, status) {
        $scope.treehouse = data;
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  });
