/**
 * 
 */

var app = angular.module('ang', ['ngRoute' ]);

app.run(function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(event, current, next) {
		$rootScope.title = current.title;
	});
});
/** route provider */
app.config(function($routeProvider) {
	$routeProvider.when('/About', {
		title : 'About',
		templateUrl : 'about.html',
		controller : 'MainController'
	}).when('/bootstrap', {
		title : 'AngularJS Bootstraping page',
		templateUrl : 'partials/1.html',
		controller : 'MainController'
	}).when('/nginit', {
		title : 'AngularJS ng-int Example',
		templateUrl : 'partials/2ngint.html',
		controller : 'MainController'
	}).when('/ngbind', {
		title : 'AngularJS ng-bind Example',
		templateUrl : 'partials/3ngbind.html',
		controller : 'MainController'
	}).when('/controllerEx', {
		title : 'AngularJS Controller Example',
		templateUrl : 'partials/4controllerEx.html',
		controller : 'MainController'
	}).when('/directives', {
		title : 'AngularJS Directive Example',
		templateUrl : 'partials/5directives.html',
		controller : 'paginationController',
		controllerAs : 'pag'
	}).when('/6controller', {
		title : 'AngularJS ng-int Example',
		templateUrl : 'partials/6controller.html',
		controller : 'MainController'
	}).when('/nginit', {
		title : 'AngularJS ng-int Example',
		templateUrl : 'partials/2ngint.html',
		controller : 'MainController'
	}).when('/news', {
		title : 'AngularJS news',
		templateUrl : 'partials/news.html',
		controller : 'FeedCtrl',
		controllerAs : 'fd'
	}).otherwise({
		redirectTo : '/',
		title : 'index'
	});
});

app.controller("MainController", [ '$scope', '$route', function() {

} ]);

app.controller("HelloController", function() {
	/* $scope.name = "mallik"; */
	this.title = "AngularJS";
});
