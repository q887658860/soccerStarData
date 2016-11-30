'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'playerList',
  // 'myApp.view2',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/players', {
  	template: '<player-list></player-lsit>'
  }).
  otherwise({redirectTo: '/players'});
}]);
