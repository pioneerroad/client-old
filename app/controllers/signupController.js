angular.module('pioneerRoadConnect')
  .controller('SignUpCtrl', ['$scope', '$http', '$timeout', '$location', 'ApiPath', function($scope, $http, $timeout, $location, ApiPath) {
    $scope.closeError = function() {
      $scope.messageBool = false;
    };
    
    $scope.signup = function() {
      // validate the form data
      
      // send the request
      $http.post(ApiPath + '/api/v1/user/create', $scope.user)
      .success(function(response) {
        console.log(response);
        $scope.messageType = "alert-success";
        $scope.message = "You are successfully signed in.";
        $scope.errors = [];
        $scope.user = {};
        $timeout(function() {
          $location.path('/login');
        }, 500);
      })
      .error(function(error) {
        console.log(error);
        $scope.errors = error.errors;
        $scope.messageType = "alert-danger";
      });
      $scope.messageBool = true;
      // $timeout(function() {
      //   $scope.messageBool = false;
      // }, 2000);
    };
  }]);