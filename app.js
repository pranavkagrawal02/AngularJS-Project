(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Pranav";
  $scope.stateOfBeing = "admire";

  $scope.sayMessage = function () {
    return "Pranav likes to grow plants !";
  };

  $scope.watchleaf = function () {
    $scope.stateOfBeing = "view";
  };
}

})();
