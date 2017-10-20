// public/js/controllers/AlgoCtrl.js
angular.module('AlgoCtrl', []).controller('AlgoController', function($scope, $http) {

    $scope.tagline = 'List of algorithms';
    $http.get('/api/algos').success(function(data) {
        //$scope.todos = data;
        console.log(data);
    });

});