angular.module('pioneerRoadConnect')
  .controller('ProfileEditCtrl', ['$scope', '$http', 'ApiPath', function($scope, $http, ApiPath) {

    angular.element('#homeTownList').height(angular.element(window).height());
    $scope.showHomeTown = false;
    $scope.user = {};
    $scope.homeTowns = [];

    $scope.autoFillHomeTown = function() {
      if($scope.hometownList.length > 2) {
      $http.get(ApiPath + '/api/v1/town/select/' + $scope.hometownList)
        .success(function(data) {  $scope.homeTowns = data; console.log(data); })
        .error(function(error) { console.log(error); });
      }
    };

    $scope.listHomeTown = function() {
      $scope.showHomeTown = true;
    };
    $scope.closeHomeTown = function() {
      $scope.showHomeTown = false;
    };

    $scope.populateHomeTown = function(homeTown) {
      // $scope.hometownList = "";
      $scope.user.hometown = homeTown.label;
      $scope.closeHomeTown();
    };

    // make change button as a directive
    $scope.btnText = {};
    $scope.btnClass = {};
    $scope.fields = ['fullname', 'backgroundPhoto', 'profilePhoto', 'rvType', 'brandRv', 'introduction', 'hometown'];

    $scope.fields.forEach(function(field) {
      $scope.btnText[field] = 'Private';
      $scope.btnClass[field] = 'btn-warning';
    });

    $scope.changeButton = function(fieldName) {
      if($scope.btnText[fieldName] === 'Public') {
        $scope.btnText[fieldName] = 'Private';
        $scope.btnClass[fieldName] = 'btn-warning';
      } else if($scope.btnText[fieldName] === 'Friends Only') {
        $scope.btnText[fieldName] = 'Public';
        $scope.btnClass[fieldName] = 'btn-danger';
      } else if($scope.btnText[fieldName] === 'Private') {
        $scope.btnText[fieldName] = 'Friends Only';
        $scope.btnClass[fieldName] = 'btn-info';
      }
    };
  }]);