var app = angular.module('myApp', ['ngRoute' , 'ui.bootstrap' , 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/' , {
		controller: 'HomeController' ,
		templateUrl: 'views/home.html'	
	})
	.when('/about' , {
		controller: 'AboutController' ,
		templateUrl: 'views/AboutUs.html'	
	})
	.when('/query' , {
		controller: 'QueryController' ,
		templateUrl: 'views/query.html'	
	})
	.when('/gallery' , {
		controller: 'GalleryController' ,
		templateUrl: 'views/gallery.html'	
	})
	.otherwise({
                redirectTo: '/'   
            });
});