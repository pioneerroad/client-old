angular.module('pioneerRoadConnect')
  .controller('LoginCtrl', ['$scope', '$http', '$location', '$timeout', 'AuthenticationService', function($scope, $http, $location, $timeout, AuthenticationService) {
    $scope.messageBool = false;
    $scope.authenticate = function() {
      AuthenticationService.ClearCredentials();
      AuthenticationService.SetCredentials($scope.username, $scope.password);
      AuthenticationService.Login($scope.username, $scope.password)
        .success(function(response) {
          if (response.token) {
            // add to the location storage
            console.log(response.user);
            var token = response.token;
            console.log(token);
            $scope.message = "Successfully authenticated.";
            $scope.messageType = "alert-success";
            $scope.messageBool = true;
            // $location.url('/');
          }
        })
        .error(function(error) {
          console.log(error);
          $scope.message = "Please enter your correct details.";
          $scope.messageType = "alert-danger";
          $scope.messageBool = true;
          $timeout(function() {
            $scope.messageBool = false;
          }, 1000);
          // add a message saying unauthenticated
        });
    };
  }]);