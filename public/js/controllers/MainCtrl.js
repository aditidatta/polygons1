// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope, $http, $location) {
    $scope.tagline = 'Hello World!';
    $scope.formData = '';
    
    $scope.search = function() {
        var q = $scope.formData.replace(/\s+/g, '+');
        //var res = $http.get('/api/search/?q=' + q);
        /*res.then(function(success) {
            $rootScope.someData = success.data;
            //console.log(success.data);
        });*/
        if(q){
            $location.path('/search').search({'q':q});
        }
    };

});
