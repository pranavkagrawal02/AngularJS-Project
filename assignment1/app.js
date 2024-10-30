(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {

  $scope.lunchMenu = "";

    $scope.checkLunch = function () {

      var numItems =$scope.lunchMenu;

      if(numItems == undefined || numItems.trim() == "") {

                $scope.message4="Please enter data first";
      }
      else if(numItems <= 3){


         $scope.message4 = "Enjoy!";

      }
      /*
     else if(numItems == 1 , 2 || numItems == 2 , 1){
        $scope.message4 = "Enjoy!";
      }
      */
      else if(numItems == 4 || numItems == 5 || numItems == 6 ){
        $scope.message4 = "Too much!";
      }
      else {
          $scope.message4 = "Too much!";

        }
    };


});


})();
