angular
  .module('app')
  .controller('MoviesController', MoviesController);

MoviesController.$inject = ['movies', '$localStorage'];

function MoviesController(movies, $localStorage) {

  var vm = this;

  vm.movies = movies.items;

  $localStorage.$default({
    watchList: []
  });

  vm.watchList = $localStorage.watchList;
}