'use strict';

var cardsApp = angular.module('cardsApp', ['ngRoute']);

cardsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/beckhu', {templateUrl: 'profiles/beckhu/beckhu.html', controller: 'BeckHuController'})
		.when('/joellecao', {templateUrl: 'profiles/joellecao/joellecao.html', controller: 'JoelleCaoController'})
		.when('/marcohuang', {templateUrl: 'profiles/marcohuang/marcohuang.html', controller: 'MarcoHuangController'})
		.otherwise({redirectTo: '/beckhu'});
}]);

cardsApp.controller('BeckHuController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'BeckHu 胡强 的名片';	
}]);

cardsApp.controller('JoelleCaoController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'JoelleCao 曹楠 的名片';	
}]);

cardsApp.controller('MarcoHuangController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'MarcoHuang 黄月明 的名片';	
}]);