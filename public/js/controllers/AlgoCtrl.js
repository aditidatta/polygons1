// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope) {

    $scope.tagline = 'List of algorithms';
    AlgoService.get();

});