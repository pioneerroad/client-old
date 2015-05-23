angular.module('pioneerRoadConnect')
  .controller('PlacesMainCtrl', ['$scope', '$rootScope', 'uiGmapGoogleMapApi', '$timeout', '$log', function($scope, $rootScope, uiGmapGoogleMapApi, $timeout, $log) {
    // $scope.map = { center: { latitude: -33.7969235, longitude: 150.9224326 }, zoom: 10 };
    $scope.mapHeight = angular.element(window).height() - 65 - 70;
    $rootScope.header = 'map';
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

    angular.extend($scope, {
      berlin: {
        lat: 52.52,
        lng: 13.40,
        zoom: 14
      },
      markers: {
        m1: {
          lat: 52.52,
          lng: 13.40
        }
      },
      layers: {
        baselayers: {
          googleTerrain: {
            name: 'Google Terrain',
            layerType: 'TERRAIN',
            type: 'google'
          },
          googleHybrid: {
            name: 'Google Hybrid',
            layerType: 'HYBRID',
            type: 'google'
          },
          googleRoadmap: {
            name: 'Google Streets',
            layerType: 'ROADMAP',
            type: 'google'
          }
        }
      }
    });

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