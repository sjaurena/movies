angular
  .module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('movies', {
      templateUrl: 'layout/movies.html',
      controller: 'MoviesController',
      controllerAs: 'vm'
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
}