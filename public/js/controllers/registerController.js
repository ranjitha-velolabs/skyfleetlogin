angular.module('frontEndBackendTest.controllers').controller('registerController',
    ['$scope', '$location', 'AuthService','$rootScope',
        function ($scope, $location, AuthService,$rootScope) {

            console.log($rootScope);
            $rootScope.desc = "Already have an account?";
            $rootScope.btnq = "Sign in";


            $scope.register = function () {

                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

                $scope.valid = true;
                $scope.ErrorMsg ="";
                if($scope.registerForm.email == "" || !$scope.registerForm.hasOwnProperty('email')) {
                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Email Id is Blank!</i>';
                    $scope.valid = false;
                }

                else if (re.test($scope.registerForm.email)) {
                    $scope.valid = true;
                } else {
                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>EmailId is not Valid!</i>';
                    $scope.valid = false;
                }

                if($scope.registerForm.password == "" || !$scope.registerForm.hasOwnProperty('password')) {

                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Password is Blank!</i>';
                    $scope.valid = false;

                }

                if($scope.registerForm.username == "" || !$scope.registerForm.hasOwnProperty('username')) {

                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Username is Blank!</i>';
                    $scope.valid = false;

                }
                if($scope.registerForm.regid == "" || !$scope.registerForm.hasOwnProperty('regid')) {

                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Regid is Blank!</i>';
                    $scope.valid = false;

                }
                if($scope.registerForm.firstname == "" || !$scope.registerForm.hasOwnProperty('firstname')) {

                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Firstname is Blank!</i>';
                    $scope.valid = false;

                }
                if($scope.registerForm.lastname == "" || !$scope.registerForm.hasOwnProperty('lastname')) {

                    $scope.ErrorMsg = $scope.ErrorMsg + '<br/><i>Lastname is Blank!</i>';
                    $scope.valid = false;

                }


            if($scope.valid){
                // initial values
                $scope.error = false;
                $scope.success = false;
                // call register from service
                AuthService.register($scope.registerForm.username, $scope.registerForm.password,$scope.registerForm.firstname, $scope.registerForm.lastname,$scope.registerForm.regid,$scope.registerForm.email)
                    // handle success
                    .then(function () {
                        $scope.success = true;
                        $scope.successMessage = "Registration Successful!";
                        $location.path('/login');
                        $scope.registerForm = {};
                    })
                    // handle error
                    .catch(function () {
                        $scope.error = true;
                        $scope.errorMessage = "Something went wrong!";
                        $scope.registerForm = {};
                    });

            };
            }

        }]);