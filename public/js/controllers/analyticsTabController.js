angular.module('frontEndBackendTest.controllers')


    .controller('analyticsTabController', ['$scope', '$http', '$state','$localStorage','$rootScope','sessionservice','$location', function($scope, $http, $state,$localStorage, $rootScope,sessionservice,$location) {
    $scope.dashClass = "dis";
    $scope.analClass = "active";

$rootScope.maps = 1;

        $state.go('.tripExplorer');


        /*$scope.session = function () {
            console.log("hell");
            console.log("tripExplorer:"+sessionservice.getCookieData())
            if(sessionservice.getCookieData() != undefined)
            {
                //$rootScope.dis = true;
                console.log("hell");
                $location.path('/Dashboard');
            }
            else
            {
                //$rootScope.dis = false;
                /!*$scope.setflag(1);*!/
                $location.path('/login');
            }

        }

        $scope.session();*/

    }]);