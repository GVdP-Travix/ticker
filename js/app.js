/**
 * Created by G on 4/8/2014.
 */

var app=angular.module('app', []);

app.controller('ctrl', function($scope) {
  $scope.scroll=function scroll() {
    $scope.legend='ticker-scroller-left';
  };

  $scope.next=function next() {
    $scope.legend='disappear-left';
  };
});
