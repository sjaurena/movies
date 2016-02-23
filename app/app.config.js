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
    .when('/movie/:slug', {
        templateUrl: 'modules/details/details.html',
        controller: 'DetailsController',
        controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}