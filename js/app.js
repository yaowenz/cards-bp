'use strict';

var cardsApp = angular.module('cardsApp', ['ngRoute']);

cardsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/beckhu', {templateUrl: 'profiles/beckhu/beckhu.html'})	
		
}]);

