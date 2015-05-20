angular.module('pioneerRoadConnect')
  .controller('FriendsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.values = [1, 2, 3, 4];
    $rootScope.header = 'friends';
    $scope.friendProfileView = false;
    $scope.showFriendProfileView = function() {
    	$scope.friendProfileView = true;
    };
    $scope.closeFriendProfileView = function() {
      $scope.friendProfileView = false;
    };
  }]);