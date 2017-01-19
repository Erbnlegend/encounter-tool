app.factory('monstersFactory', ['$http', function($http) {

const m = {
  monster: []
}

  $http.get('assets/js/data/monsters.json')
      .success(function(data) {
          m.monster = data;
      })
      .error(function(data,status,error,config){
          m.monster = [{heading:"Error",description:"Could not load json data"}];
      });

  return m;

}]);
