angular.module('playerList').
component('playerList', {
	templateUrl: "player-list/player-list.template.html",
	controller: ['$http',
		function playerListController($http) {
			var self = this;
			self.orderProp = '-overall';
			$http.get('players/players.json').then(function(response) {
				self.players = response.data;
			});
		}
	]
});

