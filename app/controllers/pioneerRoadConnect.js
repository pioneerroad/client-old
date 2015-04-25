angular.module('pioneerRoadConnect', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html'
      })
      .when('/friends', {
        templateUrl: '/views/friends-main.html'
      })
      .when('/places', {
        templateUrl: '/views/places-main.html'
      })
      .when('/member', {
        templateUrl: '/views/member-main.html'
      })
      .when('/profile', {
        templateUrl: '/views/profile-index.html'
      })
      .when('/profile/edit', {
        templateUrl: '/views/profile-edit.html'
      })
      .when('/login', {
        templateUrl: '/views/login.html'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }]);
