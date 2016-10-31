var app = angular.module('encounterTool', ['ngRoute','ngStorage','ngAnimate']);



app.controller('bodyCtrl', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){

  $scope.BKGDimages = [
    'assets/img/evil_monastery_by_klauspillon-d83rh7b.jpg',
    'assets/img/acaratus___city_of_veturoth___by_klauspillon-d8hkywg.jpg',
    'assets/img/rise_of_the_kage___city_of_ryu___by_klauspillon-d83mi6s.jpg',
    'assets/img/ur_ghom__city_of_caves_by_klauspillon-d83rgvo.jpg',
    'assets/img/55-410176.jpg',
    'assets/img/dragon_s_castle_by_klauspillon-d8fmohg.jpg',
    'assets/img/dragon_s_nest_by_klauspillon-d85hcvq.jpg',
    'assets/img/they_found_it__by_klauspillon-d760i25.jpg',
    'assets/img/acaratus_concept_art___prison___by_klauspillon-d7ap9hx.jpg'
  ];

  $scope.rotatingBKGD = function() {
    var randomIndex = Math.floor((Math.random() * $scope.BKGDimages.length));
    return randomIndex;
  };

  $scope.rotatingBKGD = $scope.BKGDimages[$scope.rotatingBKGD()];

}]);
