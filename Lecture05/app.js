(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Pranav";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
