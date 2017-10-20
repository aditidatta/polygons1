// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope, $http, Algorithms) {

    $scope.tagline = 'List of algorithms';
    console.log(Algorithms.get());

});