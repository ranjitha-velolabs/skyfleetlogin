angular.module('frontEndBackendTest.controllers')


    .controller('analyticsTabController', ['$scope', '$http', '$state','$localStorage','$rootScope', function($scope, $http, $state,$localStorage, $rootScope) {

        $state.go('.tripExplorer');

    }]);