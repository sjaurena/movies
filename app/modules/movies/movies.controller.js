angular
	.module('app')
	.controller('MoviesController', MoviesController);

MoviesController.$inject = ['movies'];

function MoviesController(movies) {
	var vm = this;
	vm.search = '';
	vm.orderBy = 'date';
	vm.sortDesc = false;
	vm.movies = movies.get();
}