(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
    $scope.name = "Pranav"


    $scope.checkLunch = function () {



      if  
   ($scope.lunchMenu === undefined || $scope.lunchMenu.trim() === "") {
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


      //alert("Hello");
    };


});


})();
