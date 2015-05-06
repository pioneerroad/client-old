angular.module('pioneerRoadConnect')
  .controller('PlacesMainCtrl', ['$scope', 'uiGmapGoogleMapApi', '$timeout', '$log', function($scope, uiGmapGoogleMapApi, $timeout, $log) {
    // $scope.map = { center: { latitude: -33.7969235, longitude: 150.9224326 }, zoom: 10 };
    angular.element('.angular-google-map-container').height(angular.element(window).height());
    $scope.map = {
      center: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      zoom: 4
    };
    $scope.options = {
      scrollwheel: false
    };
    $scope.marker = {
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      show: false,
      id: 0
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";
    uiGmapGoogleMapApi.then(function(maps) {
      console.log(maps);
    });
  }]);