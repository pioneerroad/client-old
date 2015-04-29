angular.module('pioneerRoadConnect')
  .controller('LoginCtrl', ['$scope', '$http', '$location', '$timeout', '$cookies', 'AuthenticationService', function($scope, $http, $location, $timeout, $cookies, AuthenticationService) {
    $scope.messageBool = false;
    console.log($cookies.token);
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
            $cookies.token = token;
            $scope.message = "Successfully authenticated.";
            $scope.messageType = "alert-success";
            $scope.messageBool = true;
            $timeout(function() {
              $location.path('/profile/edit');
            }, 500);
          }
        })
        .error(function(error) {
          console.log(error);

          if(error==="BAD_PASSWORD") {
            $scope.message = 'Password is wrong.';
          } else if(error === 'USER_NOT_FOUND') {
            $scope.message = 'Username is incorrect';
          } else if(error === 'Unauthorized') {
            $scope.message = 'Incorrect Details';
          }
          $scope.messageType = "alert-danger";
          $scope.messageBool = true;
          // $timeout(function() {
          //   $scope.messageBool = false;
          // }, 2000);
          // add a message saying unauthenticated
        });
    };
  }]);