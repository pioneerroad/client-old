angular.module('pioneerRoadConnect')
  .controller('ProfileEditCtrl', ['$scope', function($scope) {

    // make change button as a directive
    $scope.btnText = {};
    $scope.btnClass = {};
    $scope.fields = ['fullname', 'backgroundPhoto', 'profilePhoto', 'rvType', 'brandRv', 'introduction'];

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