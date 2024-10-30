(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkLunch = function () {
    if ($scope.lunchMenu === undefined || $scope.lunchMenu.trim() === "") {
      $scope.message = "Please enter data first";
    } else {
      var items = $scope.lunchMenu.split(',');
      var numItems = items.filter(item => item.trim() !== "").length;

      if (numItems <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
