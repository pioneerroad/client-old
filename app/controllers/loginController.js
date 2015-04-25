angular.module('pioneerRoadConnect')
  .controller('LoginCtrl', ['$scope', '$http', 'AuthenticationService', function($scope, $http, AuthenticationService) {
    $scope.authenticate = function() {
      AuthenticationService.ClearCredentials();
      AuthenticationService.SetCredentials($scope.username, $scope.password);
      AuthenticationService.Login($scope.username, $scope.password)
      .success(function(response) {
        console.log(response);
      })
      .error(function(error) {
        console.log(error);
      });
    };
  }]);