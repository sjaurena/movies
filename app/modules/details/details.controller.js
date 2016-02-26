angular
  .module('app')
  .controller('DetailsController', DetailsController);

DetailsController.$inject = ['movies', '$stateParams'];

function DetailsController(movies, $stateParams) {

  var vm = this;

  vm.movie = _.find(movies.items, function(movie) {
    return movie.slug === $stateParams.slug
  });
}
