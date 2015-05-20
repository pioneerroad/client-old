angular.module('pioneerRoadConnect')
  .controller('FriendsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.values = [1, 2, 3, 4];
    $rootScope.header = 'friends';
  }]);