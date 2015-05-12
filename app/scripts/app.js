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
    'ngResource',
    'tmp-components',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .state('detail', {
        url: '/portfolio/{urlTitle}',
        templateUrl: 'views/port-detail.html',
        controller: 'PortfolioController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      });
  });
