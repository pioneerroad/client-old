/**
 * Created by matt on 9/02/15.
 */
angular.module("pioneerRoadConnect")
    .directive("footerMenu", function() {
        return {
            scope: { },
            replace: true,
            templateUrl: "directives/templates/footerMenuTpl.html",
            restrict: "E"
        }
    });