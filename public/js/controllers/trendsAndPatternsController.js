angular.module('frontEndBackendTest.controllers')


    .controller('trendsAndPatternsController', ['$scope', '$http', '$state', '$localStorage', '$rootScope', function ($scope, $http, $state, $localStorage, $rootScope) {

        $state.go('.rentalSupply');

        $rootScope.call = 1;


    }])