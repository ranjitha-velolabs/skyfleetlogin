angular.module('frontEndBackendTest.controllers')


    .controller('rentalSupplyController', ['$scope', '$http', '$state', '$localStorage', '$rootScope', function ($scope, $http, $state, $localStorage, $rootScope) {

    $rootScope.dashClass = "#00000";
   $rootScope.analClass = "#5AA3E8";
    $rootScope.tripEx = " ";
    $rootScope.trends = "active"
    $rootScope.geo = " ";

    }])