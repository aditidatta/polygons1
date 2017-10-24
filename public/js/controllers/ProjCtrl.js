// public/js/controllers/ProjCtrl.js
angular.module('ProjCtrl', []).controller('ProjectController', function($scope, $http, Articles) {

    $scope.tagline = 'List of projects';
    /*Algorithms.get().then(function(success) {
        console.log('in project');
        console.log(success.data);
    });*/

    $scope.projectlist = [
        { title: 'Project 1 ........', fname: 'proj1.html' },
        { title: 'Project 2...........', fname: 'proj2.html' },
        { title: 'Project 3.....', fname: 'proj3.html' },
        { title: 'Project 4..............', fname: 'proj4.html' },
        { title: 'Project 5....', fname: 'proj5.html' }
    ];

    $scope.filePath = 'views/projects/' + $scope.projectlist[0].fname;
    //$scope.classVar = "active";

    $scope.nav = function(path) {
        // console.log($scope.currentPath);
        // console.log(path);
        $scope.filePath = 'views/projects/' + path;
        //$scope.classVar = "active";
    };

});
