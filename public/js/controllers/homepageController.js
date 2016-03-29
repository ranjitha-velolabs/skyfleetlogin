/**
 * Created by Karthick Krishnan on 03-02-2016.
 */

angular.module('frontEndBackendTest.controllers')


    .controller('homepageController', ['$scope', '$http', '$state','$localStorage','$rootScope', function($scope, $http, $state,$localStorage, $rootScope) {

        $scope.getfence = function () {
                        $http({
                                url: '/get_bikes/fence',
                                method: 'GET'
                        }).success(function(result, status, headers) {
                                $scope.fencestr = result;
                            });
                    }

                $scope.insert = function () {

                            console.log($scope.latitude);
                        console.log($scope.longitude);
                        var bikeJson=angular.toJson({"lat":document.getElementById('lat').value,"lng":document.getElementById('long').value,"Owner":document.getElementById('owner').value});
                        console.log(bikeJson);
                        $http({
                                url: '/get_bikes/create',
                                method: 'POST',
                                data : bikeJson,
                                headers: {'Content-Type': 'application/json'}
                        }).success(function(result, status, headers) {
                                console.log("front end Result==>" + result);

                               });
                    }

                $scope.list = function () {


                                    $http({
                                            url: '/get_bikes/getAll',
                                    method: 'GET',
                                }).success(function(result, status, headers) {
                                    console.log("front end Result==>" + result);

                                    });



                                    }


}])
