// public/js/services/ArticleService.js
angular.module('ArticleService', []).factory('Articles', ['$http', function($http) {

    return {
        // call to get all articles
        get: function() {
            return $http.get('/api/articles');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new algo
        create: function(data) {
            return $http.post('/api/articles', data);
        },

        // call to DELETE an algo
        delete: function(id) {
            return $http.delete('/api/articles/' + id);
        }
    }

}]);