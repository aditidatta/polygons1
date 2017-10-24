// public/js/controllers/ProjCtrl.js
angular.module('ProjCtrl', []).controller('ProjectController', function($scope, $rootScope, $location, $http, Articles) {

    //$scope.tagline = 'List of articles';

    Articles.get('type=project').then(function(success) {
        //console.log('in Topics');
        $scope.projectlist = success.data;

        if (angular.equals($scope.projectlist, {})) {
            $scope.filePath = 'views/err.html';
        } else if ($rootScope.pageLink) {
            $scope.filePath = 'views/projects/' + $rootScope.pageLink;
            $rootScope.pageLink = null;
        } else {
            $scope.filePath = 'views/projects/' + $scope.projectlist[0].fname;
        }
    });

    $scope.nav = function(path) {
        // console.log($scope.currentPath);
        // console.log(path);
        $scope.filePath = 'views/projects/' + path;
        //$scope.classVar = "active";
    };

});