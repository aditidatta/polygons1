// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', ['$scope',
    'Algorithm',
    function($scope, Algorithm) {

        $scope.tagline = 'List of algorithms';
        Algorithm.get();

    }
]);