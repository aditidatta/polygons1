// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $scope.cssObj = {
        "h3": {
            "display": "inline-block",
            "font-size": "24px",
            "border-bottom": "2px solid #000000"
        },

        "span": {
            "margin-left": "10px"
        }
    };
    $scope.tagline = 'Hello World!';


});