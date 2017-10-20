// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope, $http, Algorithms) {

    $scope.tagline = 'List of algorithms';
    Algorithms.get().then(function(success) {
        console.log('in Algorithms');
        console.log(success.data);
    });

});