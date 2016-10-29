app.directive('monsters', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monsters.html',
      controller: 'MonsterController'
  };
});

app.directive('monstersSearch', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monstersSearch.html',
      controller: 'MonsterController'
  };
});

app.directive('monsterCage', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monsterCage.html',
      controller: 'MonsterController'
  };
});
