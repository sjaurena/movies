angular
	.module('app')
	.controller('DetailsController', DetailsController);

DetailsController.$inject = ['movies', '$routeParams'];

function DetailsController(movies, $routeParams) {

	var vm = this;

	vm.movie = _.find(movies.get().items, function(movie) {
		return movie.slug === $routeParams.slug
	});
}
