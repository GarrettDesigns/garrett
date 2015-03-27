'use strict';

/**
 * @ngdoc overview
 * @name garrettApp
 * @description
 * # garrettApp
 *
 * Main module of the application.
 */

angular
  .module('garrettApp', [
    'ngRoute',
    'tmp-components'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/'
      });

      // Clean up URL's to get rid of # and keep them readable

      $locationProvider.html5Mode(true);
  });
