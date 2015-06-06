angular.module("pioneerRoadConnect")
  .directive("footerMenu", function() {
    return {
      scope: {},
      replace: true,
      templateUrl: "/directives/templates/footerMenuTpl.html",
      restrict: "E"
    };
  })
  .directive('uploadPicture', function() { // not required will refactor later
  	return {
  		scope: {},
  		replace: true,
  		restrict: 'AE',
      templateUrl: '/directives/templates/uploadPictureTpl.html',
      controller: function($scope) {
      },
  		link: function(scope, element, attrs) {
  		}
  	};
  });