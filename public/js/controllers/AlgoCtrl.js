// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope, $http, Algorithms) {

    $scope.tagline = 'List of algorithms';
    Algorithms.get()
        .success(function(data) {
            console.log(data);
        });

});