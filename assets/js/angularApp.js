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

  // auto adjusting width for input values
  $scope.adjust =
        function(elements, offset, min, max) {
          // initialize parameters
          offset = offset || 0;
          min    = min    || 0;
          max    = max    || Infinity;
          elements.each(function() {
            var element = $(this);
            // add element to measure pixel length of text
            var id = btoa(Math.floor(Math.random() * Math.pow(2, 64)));
            var tag = $('<span id="' + id + '">' + element.val() + '</span>').css({
              'display': 'none',
              'font-family': element.css('font-family'),
              'font-size': element.css('font-size'),
            }).appendTo('body');
            // adjust element width on keydown
            function update() {
              // give browser time to add current letter
              setTimeout(function() {
                // prevent whitespace from being collapsed
                tag.html(element.val().replace(/ /g, '&nbsp'));
                // clamp length and prevent text from scrolling
                var size = Math.max(min, Math.min(max, tag.width() + offset));
                if (size < max)
                  element.scrollLeft(0);
              // apply width to element
              element.width(size);
          }, 0);
        };
        update();
        element.keydown(update);
    });
  }

}]);
