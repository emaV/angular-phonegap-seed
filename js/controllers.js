angular.module('App.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works! Paranoid Android";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works! Says Zonker";
    }]);
