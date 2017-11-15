const App = angular.module('app', ['ui.materialize']);

App.controller('appCtrl', ['$scope', '$http', ($scope, $http) => {
    $scope.test = 'Test not loaded';

    $scope.getTest = () => {
        console.log('Sending http request to test');
        $http({
            method: 'GET',
            url: '/api/test'
        }).then(response => {
            $scope.test = response.data;
        }, err => {
            console.log(err);
            $scope.test = 'Failed to get test';
        });
    }

}]);