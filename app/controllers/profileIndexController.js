angular.module('pioneerRoadConnect')
  .controller('ProfileIndexCtrl', ['$scope', '$location', '$cookies', function($scope, $location, $cookies) {
    $scope.logout = function() {
      delete $cookies.token;
      $location.path('/');
    };
  }]);