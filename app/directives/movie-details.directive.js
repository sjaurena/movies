angular
  .module('app')
  .directive('movieDetails', movieDetails);

function movieDetails() {

  var directive = {
    templateUrl: 'directives/movie-details.directive.html',
    restrict: 'E',
    scope: {
      movie: '='
    }
  };

  return directive;
}