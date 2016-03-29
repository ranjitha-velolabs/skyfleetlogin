angular.module('frontEndBackendTest.controllers').controller('registerController',
    ['$scope', '$location', 'AuthService','$rootScope',
        function ($scope, $location, AuthService,$rootScope) {

            console.log($rootScope);
            $rootScope.desc = "Already have an account?";
            $rootScope.btnq = "Sign in";
            $rootScope.sref = "login";


            $scope.register = function () {

                // initial values
                $scope.error = false;
                $scope.disabled = true;
                $scope.success = false;
                // call register from service
                AuthService.register($scope.registerForm.username, $scope.registerForm.password,$scope.registerForm.firstname, $scope.registerForm.lastname,$scope.registerForm.regid,$scope.registerForm.email)
                    // handle success
                    .then(function () {
                        $scope.success = true;
                        $scope.successMessage = "Registration Successful!";
                        $location.path('/login');
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    })
                    // handle error
                    .catch(function () {
                        $scope.error = true;
                        $scope.errorMessage = "Something went wrong!";
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    });

            };

        }]);