var app = angular.module('CarsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '../templates/index.html'
		})
		.when('/new', {
			templateUrl: '../templates/new.html'
		})
		.when('/:id', {
			templateUrl: '../templates/show.html'
		})
		.when('/:id/edit', {
			templateUrl: '../templates/edit.html'
		})
		$locationProvider.html5Mode(true);
})