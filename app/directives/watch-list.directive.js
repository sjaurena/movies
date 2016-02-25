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
    vm.add = add;

    function isListed(movie) {
      var exist = _.find($localStorage.watchList, function(m) {
        return m.slug === movie.slug
      });
      return angular.isDefined(exist);
    }

    function add(movie) {
      if (!vm.isListed(movie)) {
        $localStorage.watchList.push(movie);
      }
    }
  }
}