// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        css: 'css/views.css'
    })

    // algo page that will use the AlgoController
    .when('/algo', {
        templateUrl: 'views/algo.html',
        controller: 'AlgoController',
        css: 'css/articles.css'
    })

    // algo page that will use the ResearchController
    .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchController'
    })

    // algo page that will use the ProjectController
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectController',
        css: 'css/articles.css'
    });

    $locationProvider.html5Mode(true);

}]);