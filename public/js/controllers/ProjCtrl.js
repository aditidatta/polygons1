// public/js/controllers/ProjCtrl.js
angular.module('ProjCtrl', []).controller('ProjectController', function($scope, $http, Algorithms) {

    $scope.tagline = 'List of projects';
    /*Algorithms.get().then(function(success) {
        console.log('in project');
        console.log(success.data);
    });*/

    $scope.projectlist = [
        { title: 'Project 1', fname: 'proj1' },
        { title: 'Project 2', fname: 'proj2' },
        { title: 'Project 3', fname: 'proj3' },
        { title: 'Project 4', fname: 'proj4' },
        { title: 'Project 5', fname: 'proj5' }
    ];

});