// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope, $http, Algorithm) {

    $scope.tagline = 'List of algorithms';
    Algorithm.get()
        .success(function(data) {
            console.log(data);
        });

});