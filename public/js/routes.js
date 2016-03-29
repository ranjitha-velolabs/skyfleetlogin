/**
 * Created by Karthick Krishnan on 03-02-2016.
 */
angular.module('frontEndBackendTest', ['ui.router','frontEndBackendTest.controllers','ngCookies','ngStorage','ui.bootstrap','ngAnimate','ngMaterial','md.data.table','angAccordion','ui-rangeSlider','leaflet-directive','ngRoute','ngSanitize'])

    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue', {
                'default': '300'
            })
            .accentPalette('deep-orange', {
                'default': '500'
            });
    })

    .config(
        [
            '$stateProvider',
            '$urlRouterProvider','$logProvider',
            function($stateProvider, $urlRouterProvider) {

                // lazy controller, directive and service
                /*app.controller = $controllerProvider.register;
                 app.filter = $filterProvider.register;
                 app.factory = $provide.factory;
                 app.service = $provide.service;
                 app.constant = $provide.constant;
                 app.value = $provide.value;*/

                $urlRouterProvider.otherwise('/Dashboard');
                $stateProvider
                    .state('homepage', {
                        url: '/homepage',
                        templateUrl: '../html/homepage.html',
                        controller:'homepageController'
                    })
                    .state('insert', {
                        url: '/insert',
                        templateUrl: '../html/insert.html',
                        controller:'insertController'
                    })
                    .state('update', {
                        url: '/update?bike_id',
                        templateUrl: '../html/update.html',
                        controller:'updateController'
                    })
                    .state('list', {
                        url: '/list',
                        templateUrl: '../html/list.html',
                        controller:'listController'
                    })
                    .state('dashboard', {
                        url: '/Dashboard',
                        templateUrl: '../html/dashboard.html',
                        controller: 'dashboardController'
                    })


                    .state('analytics', {
                        url: '/Analytics',
                        templateUrl: '../html/analytics.html',
                         controller:'analyticsTabController'
                    })

                     .state('analytics.tripExplorer', {
                         url: '/TripExplorer',
                         templateUrl: '../html/tripexplorer.html',
                         controller: 'tripExplorerController'
                     })
                     .state('analytics.trendsAndPatterns', {
                         url: '/TrendsAndPatterns',
                         templateUrl: '../html/trendsandPatterns.html',
                         controller: 'trendsAndPatternsController'
                     })

                     .state('analytics.geofenceZones', {
                         url: '/geofenceZones',
                         templateUrl: '../html/geofence.html'
                     })

                     .state('analytics.trendsAndPatterns.appAreas', {
                         url: '/appAreas',
                         templateUrl: '../html/list.html',
                         controller: 'listController'
                     })
                     .state('analytics.trendsAndPatterns.rentalSupply', {
                         url: '/rentalSupply',
                         templateUrl: '../html/rentalSupply.html',
                         controller: 'rentalSupplyController'
                     })
                     .state('analytics.trendsAndPatterns.rentalDemand', {
                         url: '/rentalDemand',
                         templateUrl: '../html/rentalDemand.html',
                     })
                    .state('analytics.trendsAndPatterns.unmetDemand', {
                         url: '/unmetDemand',
                         templateUrl: '../html/unmetDemand.html',
                     })
                    .state('analytics.trendsAndPatterns.bikeInVersusOut', {
                         url: '/unmetDemand',
                         templateUrl: '../html/bikeInVersusOut.html',
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: '../html/login.html',
                        controller: 'loginController',
                        access: {restricted: false}
                    })
                    .state('profile', {
                        url: '/profile',
                        templateUrl: '../html/profile.html',
                        controller: 'profileController',
                        access: {restricted: true}
                    }).state('logout', {
                        url: '/logout',
                        controller: 'logoutController'
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: '../html/register.html',
                        controller: 'registerController',
                        access: {restricted: true}
                    })


                //    .state('mapbox', {
                //        url: '/Analytics',
                //        templateUrl: '../html/tripexplorer.html',
                //        controller:'mapboxController'
                //    })
					
                //.state('trendsandpatterns', {
                //    url: '/Trendsandpatterns',
                //    templateUrl: '../html/trendsandPatterns.html',
                //    controller: 'trendsAndPatternsController'
                //})
                //  .state('analyticsTabs', {
                //      url: '/analyticsTabs',
                //      templateUrl: '../html/mapbox.html',
                //      controller: "analyticsTabController"
                //  })
            }]).run(
    ['$rootScope','$location', '$route', 'AuthService',
        function($rootScope, $location, $route, AuthService) {
            $rootScope.$on('$routeChangeStart',
                function (event, next, current) {
                    AuthService.getUserStatus();
                    if (next.access.restricted &&
                        !AuthService.isLoggedIn()) {
                        $location.path('/login');
                        $route.reload();
                    }
                });
        }
    ]);


angular.module('frontEndBackendTest.controllers',[])
