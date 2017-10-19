// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // algo page that will use the AlgoController
    .when('/algo', {
        templateUrl: 'views/algo.html',
        controller: 'AlgoController'
    });

    $locationProvider.html5Mode(true);

}]);