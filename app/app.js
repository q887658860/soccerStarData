'use strict';

// Declare app level module which depends on views, and components
angular.module('soccerstarApp', [
  'ngRoute',
  'playerList',
  'playerDetail',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/players', {
  	template: '<player-list></player-lsit>'
  }).
  when('/players/:playerId', {
  	template: '<player-detail></player-detail>'
  }).
  otherwise({redirectTo: '/players'});
}]);
