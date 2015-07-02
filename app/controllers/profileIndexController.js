angular.module('pioneerRoadConnect')
  .controller('ProfileIndexCtrl', ['$scope', '$rootScope', '$location', '$cookies', function($scope, $rootScope, $location, $cookies) {
    $scope.logout = function() {
      $cookies.put('token', '');
      $location.path('/');
    };

    $rootScope.header = "profile";

    $scope.friends = [
    	{
    		image: 'http://placekitten.com/g/50/50',
        name: 'Carol and Ian Adams',
        distance: '1 km',
        time: '20 minutes ago'
    	},
      {
        image: 'http://placekitten.com/g/50/50',
        name: 'Steve and Barb Jones',
        distance: '2.2 km',
        time: 'this morning'
      },
      {
        image: 'http://placekitten.com/g/50/50',
        name: 'Deb Truscott',
        distance: '2.2 km',
        time: '1 hour ago'
      },
      {
        image: 'http://placekitten.com/g/50/50',
        name: 'Berryl and Harry',
        distance: '6 km',
        time: 'yesterday'
      }
    ];
  }]);