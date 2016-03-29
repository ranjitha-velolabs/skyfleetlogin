angular.module('frontEndBackendTest.controllers').controller('profileController',
    ['$scope', '$location', 'AuthService','sessionservice',
        function ($scope, $location, AuthService,sessionservice) {
            $scope.user = true;
            $scope.profile = function () {

                AuthService.profile()
                    .then(function () {
                        if(sessionservice.getCookieData() == undefined)
                        {
                            $location.path('/login');
                        }
                        $scope.username = sessionservice.getCookieData();
                        console.log(sessionservice.getCookieData());
                        $scope.success = true;
                        $scope.successMessage = "Welcome to Skyride !";
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    })
                    // handle error
                    .catch(function () {
                        console.log("hell");
                        $scope.error = true;
                        //$location.path('/home');
                        $scope.errorMessage = "Something went wrong!";
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    });

            }

        }])