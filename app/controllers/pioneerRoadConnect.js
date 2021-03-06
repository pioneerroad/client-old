angular.module('pioneerRoadConnect', ['ngRoute', 'ngCookies', 'uiGmapgoogle-maps', 'leaflet-directive', 'ngFileUpload','ngJcrop'])
  .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', 'ngJcropConfigProvider', function($routeProvider, $locationProvider, GoogleMapApiProviders, ngJcropConfigProvider) {

    ngJcropConfigProvider.setJcropConfig({
        bgColor: 'black',
        bgOpacity: 0.4,
        aspectRatio: 1,
    });

    GoogleMapApiProviders.configure({
      v: '3.17',
      libraries: 'weather,geometry,visualization',
      australia: true
    });

    var resolveLogin = {
      app: ['$cookies', '$location', '$rootScope', function($cookies, $location, $rootScope) {
        $rootScope.header = '';
        if($cookies.get('token')) { return true; }
        else { $location.path('/login'); return false; }
      }]
    };

    var alreadyLoggedIn = {
      app: ['$cookies', '$location', '$rootScope', function($cookies, $location, $rootScope) {
        $rootScope.header = '';
        if($cookies.get('token')) { $location.path('/profile'); return true; }
        else { return false; }
      }]
    };

    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        resolve: alreadyLoggedIn
      })
      .when('/friends', {
        templateUrl: '/views/friends-main.html',
        controller: 'FriendsCtrl'
      })
      .when('/places', {
        templateUrl: '/views/places-main.html',
        controller: 'PlacesMainCtrl'
      })
      .when('/member', {
        templateUrl: '/views/member-main.html'
      })
      .when('/profile', {
        templateUrl: '/views/profile-index.html',
        controller: 'ProfileIndexCtrl',
        resolve: resolveLogin
      })
      .when('/profile/edit', {
        templateUrl: '/views/profile-edit.html',
        controller: 'ProfileEditCtrl',
        resolve: resolveLogin
      })
      .when('/login', {
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl',
        resolve: alreadyLoggedIn
      })
      .when('/signup', {
        templateUrl: '/views/signup.html',
        controller: 'SignUpCtrl',
        resolve: alreadyLoggedIn
      })
      .when('/messages', {
        templateUrl: '/views/messages.html',
        controller: 'MessagesCtrl',
        resolve: resolveLogin
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }])
  .value('ApiPath', 'http://localhost:8081');