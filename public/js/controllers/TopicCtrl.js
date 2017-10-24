// public/js/controllers/TopicCtrl.js
angular.module('TopicCtrl', []).controller('TopicController', function($scope, $rootScope, $location, $http, Articles) {

    //$scope.tagline = 'List of articles';

    Articles.get('type=topic').then(function(success) {
        //console.log('in Topics');
        $scope.topiclist = success.data;
        if (!($scope.topiclist)) {
            $scope.filePath = 'views/err.html';
        } else if ($rootScope.pageLink) {
            $scope.filePath = 'views/topics/' + $rootScope.pageLink;
            $rootScope.pageLink = null;
        } else {
            $scope.filePath = 'views/topics/' + $scope.topiclist[0].fname;
        }
    });

    $scope.nav = function(path) {
        // console.log($scope.currentPath);
        // console.log(path);
        $scope.filePath = 'views/topics/' + path;
        //$scope.classVar = "active";
    };

});