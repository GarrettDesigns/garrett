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
  .config(function ($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

    $uiViewScrollProvider.useAnchorScroll();

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .state('detail', {
        url: '/{urlTitle}',
        templateUrl: 'views/port-detail.html',
        controller: 'PortfolioController'
      })
      .state('large-view', {
        url: '/{urlTitle}/detail-view',
        templateUrl: 'views/large-detail.html',
        controller: 'PortfolioDetailController'
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
