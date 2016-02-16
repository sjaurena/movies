angular
  .module('app')
  .filter('toTime', function($filter) {
      return function(seconds) {
          var hours = Math.floor(seconds / 3600);
          var mins = Math.floor((seconds % 3600) / 60);
          var time = hours + 'hrs';
          if (mins > 0) {
            time += ' ' + mins + 'mins';
          }
          return time;
      };
  })