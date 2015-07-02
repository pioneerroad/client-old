angular.module('pioneerRoadConnect')
  .controller('ProfileEditCtrl', ['$scope', '$rootScope', '$cookies','$http', 'ApiPath', 'Upload', function($scope, $rootScope, $cookies, $http, ApiPath, Upload) {

    angular.element('#homeTownList').height(angular.element(window).height());
    $rootScope.header = 'profile';
    $scope.showHomeTown = false;
    $scope.user = $cookies.getObject('user');
    console.log($scope.user);
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

    $scope.profPhObj = {};

    // The url or the data64 for the image
    $scope.profPhObj.src = '/assets/images/redpanda.jpg';

    // Must be [x, y, x2, y2, w, h]
    $scope.profPhObj.coords = [100, 100, 200, 200, 100, 100];

    // You can add a thumbnail if you want
    $scope.profPhObj.thumbnail = false;

    // Function to show a popup for choosing the file from filesystem.
    $scope.uploadProfileLocal = function (files) {
      if(files && files.length) {
        $scope.backgroundPhotoLocalPath = files[0];
        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              $scope.profPhObj.src = e.target.result;
              $scope.profPhObj.coords = [100, 100, 200, 200, 100, 100];
            });
          };
        })(files[0]);
        reader.readAsDataURL(files[0]);
      }
    };

    // Function to upload the server after the image is being cropped by the user with given dimensions.
    $scope.uploadProfileServer = function() {
      if($scope.backgroundPhotoLocalPath) {
        Upload.upload({
          url: ApiPath+'/api/v1/user/'+$scope.user.id+'/profile/photo',
          method: 'PUT',
          headers: {
            'Authorization': 'Basic ' + $cookies.get('authdata'),
            'x-access-token': $cookies.get('token'),
          },
          fields: {
            width: $scope.profPhObj.coords[4],
            height: $scope.profPhObj.coords[5],
            x: $scope.profPhObj.coords[0],
            y: $scope.profPhObj.coords[1],
          },
          file: $scope.backgroundPhotoLocalPath,
          fileFormDataName: 'image',
        }).progress(function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        }).success(function(data, status, headers, config) {
          console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
        });
      } else {
        console.log('No file is selected.');
      }
    };

    // $scope.findCoordinates = function() {
    //   console.log($scope.obj.coords);
    // };

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
      } else if($scope.btnText[fieldName] === 'Friends') {
        $scope.btnText[fieldName] = 'Public';
        $scope.btnClass[fieldName] = 'btn-danger';
      } else if($scope.btnText[fieldName] === 'Private') {
        $scope.btnText[fieldName] = 'Friends';
        $scope.btnClass[fieldName] = 'btn-info';
      }
    };

    // Refactor Code in future
    $scope.showHomeTown = false;
    $scope.showUploadProfilePictureView = false;
    $scope.showUploadBackgroundPictureView = false;

    $scope.backPhObj = {};

    // The url or the data64 for the image
    $scope.backPhObj.src = '/assets/images/redpanda.jpg';

    // Must be [x, y, x2, y2, w, h]
    $scope.backPhObj.coords = [100, 100, 200, 200, 100, 100];

    // You can add a thumbnail if you want
    $scope.backPhObj.thumbnail = false;

    // Function to show a popup for choosing the file from filesystem.
    $scope.uploadBackgroundLocal = function (files) {
      if(files && files.length) {
        $scope.backgroundPhotoLocalPath = files[0];
        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              $scope.backPhObj.src = e.target.result;
              $scope.backPhObj.coords = [100, 100, 200, 200, 100, 100];
            });
          };
        })(files[0]);
        reader.readAsDataURL(files[0]);
      }
    };

    // Function to upload the server after the image is being cropped by the user with given dimensions.
    $scope.uploadBackgroundServer = function() {
      if($scope.backgroundPhotoLocalPath) {
        Upload.upload({
          url: ApiPath+'/api/v1/user/'+$scope.user.id+'/profile/background-photo',
          method: 'PUT',
          headers: {
            'Authorization': 'Basic ' + $cookies.get('authdata'),
            'x-access-token': $cookies.get('token'),
          },
          fields: {
            width: $scope.backPhObj.coords[4],
            height: $scope.backPhObj.coords[5],
            x: $scope.backPhObj.coords[0],
            y: $scope.backPhObj.coords[1],
          },
          file: $scope.backgroundPhotoLocalPath,
          fileFormDataName: 'image',
        }).progress(function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        }).success(function(data, status, headers, config) {
          console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
        });
      } else {
        console.log('No file is selected.');
      }
    };

    $scope.showUploadProfilePicture = function() {
      $scope.showUploadProfilePictureView = true;
      // This is to show the ng-jcrop correctly otherwise won't work
      $scope.profPhObj.src = 'http://placehold.it/200x200&text=PR';
      $scope.profPhObj.coords = [100, 100, 200, 200, 100, 100];
      $scope.profPhObj.thumbnail = false;
    };

    $scope.showUploadBackgroundPicture = function() {
      $scope.showUploadBackgroundPictureView = true;
      // This is to show the ng-jcrop correctly otherwise won't work
      $scope.backPhObj.src = 'http://placehold.it/200x200&text=PR';
      $scope.backPhObj.coords = [100, 100, 200, 200, 100, 100];
      $scope.backPhObj.thumbnail = false;
    };

    $scope.closeBP = function() {
      $scope.showUploadBackgroundPictureView = false;
    };
    $scope.closePP = function() {
      $scope.showUploadProfilePictureView = false;
    };

  }]);