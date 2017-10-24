// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
    $scope.tagline = 'Hello World!';
    $scope.formData = '';
    $scope.search = function() {
        var q = $scope.formData.replace(/\s+/g, '+');
        var res = $http.get('/api/search/?q=' + q);
        res.then(function(success) {
            console.log('success');
        });
    };

});
