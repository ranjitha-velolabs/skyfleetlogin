angular.module('frontEndBackendTest.controllers').controller('logoutController',
    ['$scope', '$location', 'AuthService','sessionservice',
        function ($scope, $location, AuthService,sessionservice) {

            $scope.logout = function () {

                // call logout from service
                AuthService.logout()
                    .then(function () {
                        console.log("clear");
                        sessionservice.clearCookieData();
                        $location.path('/login');
                    });

            };

        }])
