angular
  .module('app')
  .factory('moviesFactory', moviesFactory);

moviesFactory.$inject = ['Restangular'];

function moviesFactory(Restangular) {
  return {
    get: function() {
        return Restangular.all('movies').customGET();
    }
  };
}
