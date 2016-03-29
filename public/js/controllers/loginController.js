angular.module('frontEndBackendTest.controllers')
    .controller('loginController',
    ['$scope', '$location', 'AuthService','sessionservice','$rootScope','$state',
        function ($scope, $location, AuthService,sessionservice,$rootScope,$state) {



            $rootScope.stateChange = function (){
                if($state.$current.self.name == 'login'){

                    $location.path('/register');

                }
                else  if($state.$current.self.name == 'register'){

                    $location.path('/login');

                }

            }

            $scope.session = function () {
                console.log("hell");
                if(sessionservice.getCookieData() != undefined)
                {
                    console.log("hell");
                    $rootScope.tabs = true;
                    $rootScope.Name = sessionservice.getCookieData();
                    console.log($rootScope.Name);
                    $location.path('/Dashboard');
                }
                else
                {
                    $rootScope.tabs = false;
                    $location.path('/login');

                }

            }
            $rootScope.desc = "Don't have an account?";
            $rootScope.btnq = "Sign Up";
            $rootScope.sref = "register";


            $scope.login = function () {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

                $scope.valid = true;
                $scope.divHtmlVar ="";
                if($scope.loginForm.email == "" || !$scope.loginForm.hasOwnProperty('email')) {
                    $scope.divHtmlVar = $scope.divHtmlVar + '<br/><i>Email Id is Blank!</i>';
                    $scope.valid = false;
                }
               else if (re.test($scope.loginForm.email)) {
                    $scope.valid = true;
                } else {
                    $scope.divHtmlVar = $scope.divHtmlVar + '<br/><i>EmailId is not Valid!</i>';
                    $scope.valid = false;
                }

                if($scope.loginForm.password == "" || !$scope.loginForm.hasOwnProperty('password')) {

                    $scope.divHtmlVar = $scope.divHtmlVar + '<br/><i>Password is Blank!</i>';
                    $scope.valid = false;

                }




                // initial values


                if($scope.valid){
                // call login from service
                AuthService.login($scope.loginForm.email, $scope.loginForm.password)
                    // handle success
                    .then(function () {
                        $scope.success = true;

                        console.log($rootScope.Name);

                        sessionservice.setCookieData(({
                            name: $rootScope.Name
                        }))
                        $scope.successMessage = "Login Successful!";
                        $rootScope.tabs = true;
                        $location.path('/Dashboard');
                        $scope.loginForm = {};
                    })
                    // handle error
                    .catch(function () {
                        $scope.error = true;
                        $rootScope.tabs = false;
                        $scope.errorMessage = "Invalid username and/or password";
                        $scope.loginForm = {};
                    });

            };
            }


        }])
