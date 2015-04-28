angular.module("pioneerRoadConnect")
  .directive("footerMenu", function() {
    return {
      scope: {},
      replace: true,
      templateUrl: "/directives/templates/footerMenuTpl.html",
      restrict: "E"
    };
  });