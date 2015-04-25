angular.module('pioneerRoadConnect')
  .controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.authenticate = function() {
      $http.post('/user/login', {
        username: $scope.username,
        password: $scope.password
      }).then(function(user) {
        // Save the token in cache here
        console.log(user);
        console.log('authenticated');
      }).error(function(err) {
        // Display the alert showing the message that user is not valid.
        console.log('error' + err);
      });
    };
  }]);