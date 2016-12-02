angular.module('playerDetail').
	component('playerDetail', {
		templateUrl: "player-detail/player-detail.template.html",
		controller: ['$routeParams', '$http',
			function playDetailController($routeParams, $http) {
				var self = this;
				$http.get('players/' + $routeParams.playerId + '.json').then(function(response) {
					self.player = response.data;
				});

			}
		]
	});