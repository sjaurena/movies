angular
  .module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider, RestangularProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('movies', {
      templateUrl: 'layout/movies.html',
      controller: 'MoviesController',
      controllerAs: 'vm',
      resolve: {
        movies: resolveMovies
      }
    })
    .state('movies.listing', {
      url: '/',
      templateUrl: 'modules/listing/listing.html',
      controller: 'ListingController',
      controllerAs: 'vm'
    })
    .state('movies.details', {
      url: '/movie/:slug',
      templateUrl: 'modules/details/details.html',
      controller: 'DetailsController',
      controllerAs: 'vm'
    });

  RestangularProvider.setBaseUrl('/api');
}

function resolveMovies(moviesFactory) {
  return moviesFactory.get();
}