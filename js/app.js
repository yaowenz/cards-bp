'use strict';

var cardsApp = angular.module('cardsApp', ['ngRoute']);

cardsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/beckhu', {templateUrl: 'profiles/beckhu/beckhu.html', controller: 'BeckHuController'})
		.when('/joellecao', {templateUrl: 'profiles/joellecao/joellecao.html', controller: 'JoelleCaoController'})
		.when('/marcohuang', {templateUrl: 'profiles/marcohuang/marcohuang.html', controller: 'MarcoHuangController'})
		.when('/tenzhang', {templateUrl: 'profiles/tenzhang/tenzhang.html', controller: 'TenZhangController'})
		.when('/irisy', {templateUrl: 'profiles/irisy/index.html', controller: 'IrisYController'})
		.when('/andyf', {templateUrl: 'profiles/andyf/index.html', controller: 'AndyFController'})
		.when('/andyw', {templateUrl: 'profiles/andyw/index.html', controller: 'AndyWController'})
		.when('/derekp', {templateUrl: 'profiles/derekp/index.html', controller: 'DerekPController'})
		.when('/tomh', {templateUrl: 'profiles/tomh/index.html', controller: 'TomHController'})
		.when('/cocon', {templateUrl: 'profiles/cocon/index.html', controller: 'CocoNController'})		
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

cardsApp.controller('TenZhangController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'TenZhang 张亮 的名片';	
}]);

cardsApp.controller('IrisYController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Iris 杨伊洁 的名片';	
}]);

cardsApp.controller('AndyFController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Andy 樊小飞 的名片';	
}]);

cardsApp.controller('AndyWController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Andy 万芳 的名片';	
}]);

cardsApp.controller('DerekPController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Derek 浦健 的名片';	
}]);

cardsApp.controller('TomHController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Tom 华怀军 的名片';	
}]);

cardsApp.controller('CocoNController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.pageTitle = 'Coco 倪翊华 的名片';	
}]);