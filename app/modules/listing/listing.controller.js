angular
	.module('app')
	.controller('ListingController', ListingController);

ListingController.$inject = ['movies'];

function ListingController(movies) {

	var vm = this;

	vm.data = [];

	vm.search = {
		title: ''
	};
	vm.order = 'date';
	vm.sortDesc = false;
	vm.movies = movies.get();

	vm.pager = {
		current: 0,
		size: 6
	};

	vm.sort = sort;
	vm.getPages = getPages;
	vm.start = start;
	vm.showPager = showPager;
	vm.getPager = getPager;
	vm.changePage = changePage;

	function sort() {
		vm.sortDesc = !vm.sortDesc;
	}

	function getPages() {
		var pages = Math.ceil(vm.data.length / vm.pager.size);
		return _.range(0, pages);
	}

	function start() {
		return vm.pager.current * vm.pager.size;
	}

	function showPager() {
		return vm.data.length > 5;
	}

	function getPager() {
		var data = vm.data.length;
		var from = vm.pager.current * vm.pager.size + 1;
		var to = from + vm.pager.size - 1;
		return {
			from: (from < data) ? from : data,
			to: (to < data) ? to : data,
			total: data
		};
	}

	function changePage(page) {
		vm.pager.current = page;
	}
}
