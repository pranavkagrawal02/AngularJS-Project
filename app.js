(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "leaf";
  $scope.stateOfBeing = "view";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Pranav Likes to grow Plants !";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "admire";
  };
}

})();
