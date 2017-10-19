// public/js/services/AlgoService.js
angular.module('AlgoService', []).factory('Algorithm', ['$http', function($http) {

    return {
        // call to get all nalgos
        get: function() {
            return $http.get('/api/algos');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new algo
        create: function(algoData) {
            return $http.post('/api/algos', algoData);
        },

        // call to DELETE an algo
        delete: function(id) {
            return $http.delete('/api/algos/' + id);
        }
    }

}]);