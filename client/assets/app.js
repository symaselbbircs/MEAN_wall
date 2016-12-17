var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'userController',
    controllerAs: 'uCtrl'
  })
  .when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'userController',
    controllerAs: 'uCtrl'
  })
  .when('/logout', {
    templateUrl: 'partials/login.html',
    controller: 'logoutController'
  })
  .when('/messages', {
    templateUrl: 'partials/messages.html',
    controller: 'messagesController',
    controllerAs: 'mCtrl'
  })
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
  });
  $locationProvider.html5Mode(true).hashPrefix('!')
});
