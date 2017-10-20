// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope) {

    $scope.tagline = 'List of algorithms';
    console.log(Algorithm.get());

});