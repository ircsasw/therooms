/*
*AngularJS directives With Bootstrap
*/
angular.module('docsBindExample', ['ui.bootstrap'])
.controller('Controller', ['$scope', function($scope) {
  $scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';
}]);