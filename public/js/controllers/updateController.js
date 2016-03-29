/**
 * Created by Karthick Krishnan on 03-02-2016.
 */


angular.module('frontEndBackendTest.controllers')


    .controller('updateController', ['$scope', '$http', '$state','$localStorage','$rootScope','$stateParams', function($scope, $http, $state,$localStorage, $rootScope,$stateParams) {


        $scope.update = function () {
            var bikeJson=angular.toJson([{"bike_id":$scope.bike_id},{"lat":$scope.lat,"long":$scope.long,"owner":$scope.owner}]);

            console.log(bikeJson);

             $http({
                url: '/get_bikes/update',
                 method: 'POST',
                 data: bikeJson
             })
                 .success(function(result, status, headers) {
                     console.log(result);

             });

        }

        $scope.list = function () {


            $scope.bike_id = $stateParams.bike_id;
            var bikeJson=angular.toJson({"bike_id":$scope.bike_id});

            $http({
                 url: '/get_bikes/findById',
                method: 'POST',
                data: bikeJson
            }).success(function(result, status, headers) {
                $scope.lat = result.lat;
                $scope.long = result.long;
                $scope.owner = result.owner;

            });
        }



    }])