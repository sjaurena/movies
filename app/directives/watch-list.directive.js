angular
  .module('app')
  .directive('watchList', watchList);

function watchList() {

  var directive = {
    templateUrl: 'directives/watch-list.directive.html',
    restrict: 'E',
    scope: {
      movie: '=',
      class: '='
    },
    controller: watchListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  watchListController.$inject = ['$localStorage'];

  function watchListController($localStorage) {

    var vm = this;

    vm.isListed = isListed;
    vm.toogle = toogle;

    function isListed() {
      var exist = _.find($localStorage.watchList, function(movie) {
        return movie.slug === vm.movie.slug
      });
      return angular.isDefined(exist);
    }

    function toogle() {
      if (vm.isListed()) {
        _.remove($localStorage.watchList, function(movie) {
          return movie.slug === vm.movie.slug
        });
      } else {
        $localStorage.watchList.push(vm.movie);
      }
    }
  }
}