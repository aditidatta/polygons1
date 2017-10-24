// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        css: 'css/views.css'
    })

    // topics page that will use the AlgoController
    .when('/topics', {
        templateUrl: 'views/topics.html',
        controller: 'TopicController',
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
    })
    
    .when('/search',{
        templateUrl: 'views/search.html',
        controller: 'SearchController',
    });

    $locationProvider.html5Mode(true);

}]);
