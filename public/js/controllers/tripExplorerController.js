angular.module('frontEndBackendTest.controllers')



    .controller('tripExplorerController', ['$scope', '$http', '$state', '$localStorage', '$rootScope', function ($scope, $http, $state, $localStorage, $rootScope) {






        var local_icons = {

            start_icon: {
                iconUrl: 'https://api.tiles.mapbox.com/v3/marker/pin-l-beer+0f0.png',
                iconAnchor:   [18, 48]
            },
            end_icon: {

                iconUrl: 'https://api.tiles.mapbox.com/v3/marker/pin-l-beer+f00.png',
                iconAnchor:   [18, 48]
            },
            green_icon: {
                iconUrl: '/images/marker_green.png',
                iconAnchor:   [9, 26]
            },
            red_icon: {
                iconUrl: '../images/marker_red.png',
                iconAnchor:   [9, 26]
            },
            round_icon: {
                iconUrl: '/images/oval.png',
                iconAnchor:   [7, 6]
            },
            default_icon: {
                iconUrl:"../images/map-marker.png"
            }
        };


        var tilesDict = {
            mapbox_outdoors: {
                name: 'Mapbox Outdoors',
                url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                type: 'xyz',
                options: {
                    apikey: 'pk.eyJ1Ijoia2FydGhpY2tyYWoyMDE2IiwiYSI6ImNpa2VmdDRvNTAwNTd0cmx5ZDJrZHRkamgifQ.Zmlx4PXm0utEZ4PymHnZrA',
                    mapid: 'karthickraj2016.p3ne6nfo'
                }
            },

        };
        $scope.img = 'normal';
        angular.extend($scope, {
            london: {
                lat: 37.7576,
                lng: -122.4864,
                zoom: 14
            },
/*            markers:{
                0: {
                    lat: 37.7625,
                    lng: -122.5018
                },
                1: {
                    lat: 37.7576,
                    lng: -122.4864
                },
                2: {
                    lat: 37.7596,
                    lng: -122.4811
                },
                3: {
                    lat: 37.7562,
                    lng: -122.4745
                },
                4: {
                    lat: 37.7581,
                    lng: -122.4737
                },
                5: {
                    lat: 37.7523,
                    lng: -122.4774
                },
                6: {
                    lat: 37.7503,
                    lng: -122.4816
                },
                7: {
                    lat: 37.7469,
                    lng: -122.4728
              Polygon  }
            },*/

            tiles: tilesDict.mapbox_outdoors

        });




        $scope.geoJson =({

            rides: [
                {
                    latlngs: [
                        {lat: 37.7625, lng: -122.5018},
                        {lat: 37.7626, lng: -122.4996},
                        {lat: 37.7570, lng: -122.4993},
                        {lat: 37.7576, lng: -122.4864}
                    ],
                    bikeinfo: {
                        rider: "Franklin Albert",
                        age: "Clement St, SF ",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "01/02/2016",
                        day: "Monday",
                        startTime: "10.00 AM",
                        endTime: "11.00 AM",
                        duration: "1.00 Hrs",
                        distance: "1.2 miles",
                        startplace: "Irving St",
                        endplace: "Lawton St",
                        iconImg:"normal",
                        avatarImg: "normal"
                    },


                },
                {
                    latlngs: [
                        {lat: 37.7596, lng: -122.4811},
                        {lat: 37.7578, lng: -122.4810},
                        {lat: 37.7582, lng: -122.4746},
                        {lat: 37.7562, lng: -122.4745}
                    ],
                    bikeinfo: {
                        rider: "Di Caprio",
                        age: "Lawton St, SF",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "03/02/2016",
                        day: "Tuesday",
                        startTime: "10.00am",
                        endTime: "12.30pm",
                        duration: "2.30hrs",
                        distance: "1 miles",
                        startplace: "Kirkham St",
                        endplace: "Lawton St",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.7581, lng: -122.4737},
                        {lat: 37.7580, lng: -122.4746},
                        {lat: 37.7525, lng: -122.4743},
                        {lat: 37.7523, lng: -122.4774}
                    ],
                    bikeinfo: {
                        rider: "Christian Bale",
                        age: "Cabrillo St, SF",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "1.00pm",
                        endTime: "3.00pm",
                        duration: "2.00hrs",
                        distance: "1 miles",
                        startplace: "Ortega St",
                        endplace: "Geargy St",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.7503, lng: -122.4816},
                        {lat: 37.7506, lng: -122.4761},
                        {lat: 37.7469, lng: -122.4758},
                        {lat: 37.7469, lng: -122.4728}
                    ],
                    bikeinfo: {
                        rider: "Kate Winslet",
                        age: "Balboa St, SF",
                        gender: "Member"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "2.30pm",
                        endTime: "4.00pm",
                        duration: "1.30hrs",
                        distance: "8.3 miles",
                        startplace: "Outer Sunset",
                        endplace: "Inner Parkside",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.755792, lng: -122.483034},
                        {lat: 37.755813, lng: -122.48192},
                        {lat: 37.756865, lng: -122.482048},
                        {lat: 37.757696, lng: -122.482091}
                    ],
                    bikeinfo: {
                        rider: "Alexandra",
                        age: "Fulton St, SF",
                        gender: "Member"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "08.30am",
                        endTime: "12.30pm",
                        duration: "4.00hrs",
                        distance: "3.2 miles",
                        startplace: "Moraga St",
                        endplace: "Lawton St",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.759483, lng: -122.484379},
                        {lat: 37.759595, lng: -122.482255},
                        {lat: 37.759615, lng: -122.481761},
                        {lat: 37.761449, lng: -122.481821}
                    ],
                    bikeinfo: {
                        rider: "Christano Ronaldo",
                        age: "Cabrillo St, SF",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "10.00am",
                        endTime: "11.00am",
                        duration: "1.00hrs",
                        distance: "2.4 miles",
                        startplace: "Richmond",
                        endplace: "Geary Blvd",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.749223, lng: -122.505141},
                        {lat: 37.752992, lng: -122.505414},
                        {lat: 37.753183, lng: -122.500051},
                        {lat: 37.756933, lng: -122.50033}
                    ],
                    bikeinfo: {
                        rider: "Richard Branson",
                        age: "Clement St, SF ",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "03.30pm",
                        endTime: "05.00pm",
                        duration: "1.30hrs",
                        distance: "1.5 miles",
                        startplace: "Balboa St",
                        endplace: "Geary blvd",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.7629, lng: -122.491059},
                        {lat: 37.763029, lng: -122.488881},
                        {lat: 37.761178, lng: -122.488795},
                        {lat: 37.761042, lng: -122.490909}
                    ],
                    bikeinfo: {
                        rider: "Manovah Eleanor",
                        age: "Moraga St, SF",
                        gender: "Female"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "4.20pm",
                        endTime: "5.30pm",
                        duration: "1.10hrs",
                        distance: "2.2 miles",
                        startplace: "Fulton St",
                        endplace: "Richmond",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.758438, lng: -122.507957},
                        {lat: 37.75658, lng: -122.507817},
                        {lat: 37.756665, lng: -122.505693},
                        {lat: 37.75675, lng: -122.503515}
                    ],
                    bikeinfo: {
                        rider: "Christopher Nolan",
                        age: "Cabrillo St, S",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "06.45pm",
                        endTime: "8.20pm",
                        duration: "2.35hrs",
                        distance: "5.3 miles",
                        startplace: "Judha St",
                        endplace: "Golden Park",
                        iconImg:"normal",
                        avatarImg: "normal"
                    }

                }


            ]
        });





/*        $scope.paths= ({
            0: {
                color: '#008000 ',
                    weight: 1,
                    smoothFactor: 1,
                    latlngs: [
                    {lat: 37.7625, lng: -122.5018},
                    {lat: 37.7626, lng: -122.4996},
                    {lat: 37.7570, lng: -122.4993},
                    {lat: 37.7576, lng: -122.4864}
                ]
            },
            1: {
                color: '#008000 ',
                    weight: 1,
                    smoothFactor: 1,
                    latlngs: [
                    {lat: 37.7596, lng: -122.4811},
                    {lat: 37.7578, lng: -122.4810},
                    {lat: 37.7582, lng: -122.4746},
                    {lat: 37.7562, lng: -122.4745}
                ]
            },
            2: {
                color: '#008000 ',
                    weight: 1,
                    smoothFactor: 1,
                    latlngs: [
                    {lat: 37.7581, lng: -122.4737},
                    {lat: 37.7580, lng: -122.4746},
                    {lat: 37.7525, lng: -122.4743},
                    {lat: 37.7523, lng: -122.4774}
                ]
            },
            3: {
                color: '#008000 ',
                    weight: 1,
                    smoothFactor: 1,
                    latlngs: [
                    {lat: 37.7503, lng: -122.4816},
                    {lat: 37.7506, lng: -122.4761},
                    {lat: 37.7469, lng: -122.4758},
                    {lat: 37.7469, lng: -122.4728}
                ]
            }
        });*/
        $scope.paths= ({
            0: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[0].latlngs
            },
            1: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[1].latlngs
            },
            2: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[2].latlngs
            },
            3: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[3].latlngs
            },
            4: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[4].latlngs
            },
            5: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[5].latlngs
            },
            6: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[6].latlngs
            },
            7: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[7].latlngs
            },
            8: {
                color: '#929497 ',
                weight: 2,
                smoothFactor: 1,
                latlngs: $scope.geoJson.rides[8].latlngs
            }
        });
        console.log($scope.geoJson.rides[4].latlngs);
        $scope.markers = ({
            0: {
                lat: $scope.geoJson.rides[0].latlngs[0].lat,
                lng: $scope.geoJson.rides[0].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            1: {
                lat: $scope.geoJson.rides[0].latlngs[3].lat,
                lng: $scope.geoJson.rides[0].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            2: {
                lat: $scope.geoJson.rides[1].latlngs[0].lat,
                lng: $scope.geoJson.rides[1].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            3: {
                lat: $scope.geoJson.rides[1].latlngs[3].lat,
                lng: $scope.geoJson.rides[1].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            4: {
                lat: $scope.geoJson.rides[2].latlngs[0].lat,
                lng: $scope.geoJson.rides[2].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            5: {
                lat: $scope.geoJson.rides[2].latlngs[3].lat,
                lng: $scope.geoJson.rides[2].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            6: {
                lat: $scope.geoJson.rides[3].latlngs[0].lat,
                lng: $scope.geoJson.rides[3].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            7: {
                lat: $scope.geoJson.rides[3].latlngs[3].lat,
                lng: $scope.geoJson.rides[3].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            8: {
                lat: $scope.geoJson.rides[4].latlngs[0].lat,
                lng: $scope.geoJson.rides[4].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            9: {
                lat: $scope.geoJson.rides[4].latlngs[3].lat,
                lng: $scope.geoJson.rides[4].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            10: {
                lat: $scope.geoJson.rides[5].latlngs[0].lat,
                lng: $scope.geoJson.rides[5].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            11: {
                lat: $scope.geoJson.rides[5].latlngs[3].lat,
                lng: $scope.geoJson.rides[5].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            12: {
                lat: $scope.geoJson.rides[6].latlngs[0].lat,
                lng: $scope.geoJson.rides[6].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            13: {
                lat: $scope.geoJson.rides[6].latlngs[3].lat,
                lng: $scope.geoJson.rides[6].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            14: {
                lat: $scope.geoJson.rides[7].latlngs[0].lat,
                lng: $scope.geoJson.rides[7].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            15: {
                lat: $scope.geoJson.rides[7].latlngs[3].lat,
                lng: $scope.geoJson.rides[7].latlngs[3].lng,
                icon: local_icons.round_icon
            },
            16: {
                lat: $scope.geoJson.rides[8].latlngs[0].lat,
                lng: $scope.geoJson.rides[8].latlngs[0].lng,
                icon: local_icons.round_icon
            },
            17: {
                lat: $scope.geoJson.rides[8].latlngs[3].lat,
                lng: $scope.geoJson.rides[8].latlngs[3].lng,
                icon: local_icons.round_icon
            }
        });
        $scope.fromTo =({
            1:{
                from : $scope.geoJson.rides[0].rideinfo.startplace,
                to: $scope.geoJson.rides[0].rideinfo.endplace
        },
            2:{
                from : $scope.geoJson.rides[1].rideinfo.startplace,
                to: $scope.geoJson.rides[1].rideinfo.endplace
            },
            3:{
                from : $scope.geoJson.rides[2].rideinfo.startplace,
                to: $scope.geoJson.rides[2].rideinfo.endplace
            },
            4:{
                from : $scope.geoJson.rides[3].rideinfo.startplace,
                to: $scope.geoJson.rides[3].rideinfo.endplace
            },
            5:{
                from : $scope.geoJson.rides[4].rideinfo.startplace,
                to: $scope.geoJson.rides[4].rideinfo.endplace
            },
            6:{
                from : $scope.geoJson.rides[5].rideinfo.startplace,
                to: $scope.geoJson.rides[5].rideinfo.endplace
            },
            7:{
                from : $scope.geoJson.rides[6].rideinfo.startplace,
                to: $scope.geoJson.rides[6].rideinfo.endplace
            },
            8:{
                from : $scope.geoJson.rides[7].rideinfo.startplace,
                to: $scope.geoJson.rides[7].rideinfo.endplace
            },
            9:{
                from : $scope.geoJson.rides[8].rideinfo.startplace,
                to: $scope.geoJson.rides[8].rideinfo.endplace
            }
        });
        $scope.fullPaths = $scope.paths;
        $scope.fullMarkers = $scope.markers;
        $scope.hoverIn = function (index){
            $scope.fullPaths= ({
                0: {
                    color: '#6edf9e',
                    weight: 3,
                    smoothFactor: 1,
                    latlngs: $scope.geoJson.rides[index].latlngs
                }
            });
            $scope.fullMarkers = ({
                0: {
                    lat: $scope.geoJson.rides[index].latlngs[0].lat,
                    lng: $scope.geoJson.rides[index].latlngs[0].lng,
                    icon: local_icons.green_icon
                },
                1: {
                    lat: $scope.geoJson.rides[index].latlngs[3].lat,
                    lng: $scope.geoJson.rides[index].latlngs[3].lng,
                    icon: local_icons.red_icon
                }
            });
            $scope.img = 'icon';

            $scope.geoJson.rides[index].rideinfo.iconImg ="icon";
            $scope.geoJson.rides[index].rideinfo.avatarImg ="hover";
/*            $scope.fullMarkers=[];
            $scope.latlngA = $scope.paths[index].latlngs[0];
           $scope.latlngA["icon"] = (local_icons.start_icon);
            $scope.latlngB = $scope.paths[index].latlngs[3];
           $scope.latlngB["icon"] = (local_icons.end_icon);
            $scope.fullMarkers.push($scope.latlngA,$scope.latlngB);
            console.log($scope.fullMarkers);*/

            // CSS
        }

        $scope.hoverOut = function (index) {
            $scope.fullPaths = $scope.paths;
            $scope.fullMarkers = $scope.markers;
            $scope.geoJson.rides[index].rideinfo.iconImg ="normal";
            $scope.geoJson.rides[index].rideinfo.avatarImg ="normal";
            // CSS
        }
        $scope.bike = {
            min: 20,
            max: 80
        };



/*
        $scope.filtering = function (){



            if($scope.maleSelected){

                $scope.bike.gender = "Male";
            }
            else if($scope.femaleSelected) {

                $scope.bike.gender = "Female";

            }

            var ages = [];

            for(i=0;i<$scope.geoJson.rides.length;i++){

                if($scope.bike.min<=$scope.geoJson.rides[i].bikeinfo.age && $scope.bike.max>=$scope.geoJson.rides[i].bikeinfo.age ){
                    ages.push($scope.geoJson.rides[i].bikeinfo.age);

                }

            }



            $scope.filters['bikeinfo'] ={rider:$scope.bike.name,gender:$scope.bike.gender};

            console.log($scope.filters);



            $scope.filters["bikeinfo"] = {rider: $scope.bike.name, age: $scope.bike.min<=$scope.bike.max,gender:  $scope.bike.gender};
          //  $scope.filters["rideinfo"] = {date: $scope.biker.date,day: $scope.biker.day,distance:$scope.biker.distance };*!/

                }
*/

        $scope.male=function(){
            var myElm = angular.element( document.querySelector( '.m' ) );
            var myElf = angular.element( document.querySelector( '.f' ) );
            $scope.maleSelected = true;
            $scope.femaleSelected = false;
            myElm.css('background-color','#009688');
            myElf.css('background-color','#FAFAFA');
        }
        $scope.female=function(){
            var myElf = angular.element( document.querySelector( '.f' ) );
            var myElm = angular.element( document.querySelector( '.m' ) );
            $scope.maleSelected = false;
            $scope.femaleSelected = true;
            myElf.css('background-color','#009688');
            myElm.css('background-color','#FAFAFA');
        }
        $scope.rese = function ()
        {
            $scope.bike.name = "";
            $scope.bike = {
                min: 20,
                max: 80
            };
            $scope.maleSelected = false;
            $scope.femaleSelected = false;
            var myElm = angular.element( document.querySelector( '.m' ) );
            var myElf = angular.element( document.querySelector( '.f' ) );
            myElm.css('background-color','##FAFAFA');
            myElf.css('background-color','##FAFAFA');


        }
}])

    .filter("cusFilter",function() {

        return function (init, scope) {
            var arra = [];
            var pathsArray = [];
             for (i=0; i<init.length;i++)
             {
                 if(typeof scope.bike.name === 'undefined')
                 {
                     arra.push(init[i]);
                 }
                 if(init[i].bikeinfo.rider.indexOf(scope.bike.name)>=0)
                 {
                     //pathsArray.push(scope.paths[i]);
                     //scope.fullPaths = pathsArray;
                     arra.push(init[i]);

                 }

             if(parseInt(init[i].bikeinfo.age) >= scope.bike.min && parseInt(init[i].bikeinfo.age) <= scope.bike.max)
             {

             }
             else{
                 arra.pop();
                 //pathsArray.pop();
                 //scope.fullPaths = pathsArray;
             }
                 if(scope.maleSelected){
                     for(z=0; z<arra.length; z++){
                         if(arra[z].bikeinfo.gender == "Male")
                         {
                         }
                         else
                         {
                             arra.pop();
                             //pathsArray.pop();
                             //scope.fullPaths = pathsArray;
                         }
                     }


                 }
                 if(scope.femaleSelected){
                     for(z=0; z<arra.length; z++){
                         if(arra[z].bikeinfo.gender == "Female")
                         {
                         }
                         else
                         {
                             arra.pop();
                             //pathsArray.pop();
                             //scope.fullPaths = pathsArray;
                         }
                     }
                 }

             }
            return arra;
        }
    })
