angular.module('SearchCtrl', []).controller('SearchController', function($scope, $rootScope, $location, $http) {
    //console.log('in search');
    var q = $location.search().q;
    //console.log(q);
    //var q = $scope.formData.replace(/\s+/g, '+');
    var res = $http.get('/api/search/?q=' + q);
    res.then(function(success) {
        //console.log(success.data);
        $scope.links=success.data;
    });

    $scope.nav = function(link) {
        if(angular.equals(link.type,"project")){
            $rootScope.pageLink = link.fname;
            $location.path("/projects").search();
        }
        else{
            $rootScope.pageLink = link.fname;
            $location.path("/topics").search();
        }
    };

});
