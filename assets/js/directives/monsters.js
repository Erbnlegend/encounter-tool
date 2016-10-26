app.directive('monsters', function() {
  return {
      restrict: 'E',
      templateUrl: '../assets/js/views/monsters.html',
      controller: 'MonsterController'
  };
});
