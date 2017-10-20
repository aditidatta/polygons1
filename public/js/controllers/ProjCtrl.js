// public/js/controllers/ProjCtrl.js
angular.module('ProjCtrl', []).controller('ProjectController', function($scope, $http, Algorithms) {

    $scope.tagline = 'List of projects';
    Algorithms.get().then(function(success) {
        console.log('in project');
        console.log(success.data);
    });

});