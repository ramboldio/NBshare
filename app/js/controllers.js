angular.module('app.controllers', [])

.controller('ctrl', function($scope,  $location, $window) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.goBack = function () {
    console.log('test');
    $window.history.back();
  };



})

