angular
  .module('app')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'modules/movies/movies.html',
        controller: 'MoviesController',
        controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}