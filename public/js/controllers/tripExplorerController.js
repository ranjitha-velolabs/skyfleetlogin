angular.module('frontEndBackendTest.controllers')



    .controller('tripExplorerController', ['$scope', '$http', '$state', '$localStorage', '$rootScope', function ($scope, $http, $state, $localStorage, $rootScope) {
    var map;
    $scope.autoZ = true;
    //Accordian-------------------------------------------------------------------------------------

 L.mapbox.accessToken = 'pk.eyJ1IjoiYXJhdmluZDc0MSIsImEiOiJjaWtkbnFlaWUwMDFzdWtseXZtNWNtNjB1In0.xbZ6Ok2qvsL3BNwS1eAEwg';
    if($rootScope.maps ==1){
        $rootScope.maps = 2;
  map = L.mapbox.map('map', 'aravind741.p9oghj75', { zoomControl: false });
 

        map.setView([37.757217, -122.481589], 14);
    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    $rootScope.dashClass = "#00000";
   $rootScope.analClass = "#5AA3E8";
    $rootScope.tripEx = "active";
    $rootScope.trends = "dis"
    $rootScope.geo = "dis";
    $scope.bike = {
        min: 20,
        max: 80
    };
    $scope.bike1 = {
        min: 1,
        max: 24
    };
    $scope.bike2 = {
        min: 1,
        max: 5
    };
    $scope.oneClick = " ";
    var clicked1 = false;
    $scope.headClick = function () {
        if (clicked1 == false) {
            $scope.oneClick = "in";
            clicked1 = true;
        }
        else {
            $scope.oneClick = " ";
            clicked1 = false;
        }
    }
   
    $scope.twoClick = " ";
    var clicked2 = false;
    $scope.a1Click = function () {
        if (clicked2 == false) {
            $scope.twoClick = "in";
            clicked2 = true;
        }
        else {
            $scope.twoClick = " ";
            clicked2 = false;
        }
    }
    $scope.threeClick = " ";
    var clicked3 = false;
    $scope.a2Click = function () {
        if (clicked3 == false) {
            $scope.threeClick = "in";
            clicked3 = true;
        }
        else {
            $scope.threeClick = " ";
            clicked3 = false;
        }
    }
    $scope.fourClick = " ";
    var clicked4 = false;
    $scope.a3Click = function () {
        if (clicked4 == false) {
            $scope.fourClick = "in";
            clicked4 = true;
        }
        else {
            $scope.fourClick = " ";
            clicked4 = false;
        }
    }

    $scope.dayClick = function () {
        var day = angular.element(document.querySelector('#tesT'));
        if ($scope.dayFilter == false) {
            day.css('background-color', '#66B1E3')
            $scope.dayFilter = true;
        }
        else {
            $scope.dayFilter = false;
            day.css('background-color', '#FFFFFF')
        }
    }
    $scope.nightClick = function () {
        var night = angular.element(document.querySelector('#tesT1'));
        if ($scope.nightFilter == false) {
            night.css('background-color', '#66B1E3')
            $scope.nightFilter = true;
        }
        else {
            $scope.nightFilter = false;
            night.css('background-color', '#FFFFFF')
        }
    }
    $scope.amClick = function () {
        var am = angular.element(document.querySelector('#tesT2'));
        if ($scope.peakAMFilter == false) {
            am.css('background-color', '#66B1E3')
            $scope.peakAMFilter = true;
        }
        else {
            $scope.peakAMFilter = false;
            am.css('background-color', '#FFFFFF')
        }
    }
    $scope.pmClick = function () {
        var pm = angular.element(document.querySelector('#tesT3'));
        if ($scope.peakPMFilter == false) {
            pm.css('background-color', '#66B1E3')
            $scope.peakPMFilter = true;
        }
        else {
            $scope.peakPMFilter = false;
            pm.css('background-color', '#FFFFFF')
        }
    }
    $scope.monClick = function () {
        var Mon = angular.element(document.querySelector('#monday'));
        if ($scope.mon == false) {
            Mon.css('background-color', '#66B1E3')
            $scope.mon = true;
        }
        else {
            $scope.mon = false;
            Mon.css('background-color', '#FFFFFF')
        }
    }
    $scope.tueClick = function () {
        var tue = angular.element(document.querySelector('#tue'));
        if ($scope.Tue == false) {
            tue.css('background-color', '#66B1E3')
            $scope.Tue = true;
        }
        else {
            $scope.Tue = false;
            tue.css('background-color', '#FFFFFF')
        }
    }
    $scope.wedClick = function () {
        var wed = angular.element(document.querySelector('#wed'));
        if ($scope.Wed == false) {
            wed.css('background-color', '#66B1E3')
            $scope.Wed = true;
        }
        else {
            $scope.Wed = false;
            wed.css('background-color', '#FFFFFF')
        }
    }
    $scope.thurClick = function () {
        var thu = angular.element(document.querySelector('#thu'));
        if ($scope.Thu == false) {
            thu.css('background-color', '#66B1E3')
            $scope.Thu = true;
        }
        else {
            $scope.Thu = false;
            thu.css('background-color', '#FFFFFF')
        }
    }
    $scope.friClick = function () {
        var fri = angular.element(document.querySelector('#fri'));
        if ($scope.Fri == false) {
            fri.css('background-color', '#66B1E3')
            $scope.Fri = true;
        }
        else {
            $scope.Fri = false;
            fri.css('background-color', '#FFFFFF')
        }
    }
    $scope.satClick = function () {
        var sat = angular.element(document.querySelector('#sat'));
        if ($scope.Sat == false) {
            sat.css('background-color', '#66B1E3')
            $scope.Sat = true;
        }
        else {
            $scope.Sat = false;
            sat.css('background-color', '#FFFFFF')
        }
    }
    $scope.sunClick = function () {
        var sun = angular.element(document.querySelector('#sun'));
        if ($scope.Sun == false) {
            sun.css('background-color', '#66B1E3')
            $scope.Sun = true;
        }
        else {
            $scope.Sun = false;
            sun.css('background-color', '#FFFFFF')
        }
    }
    $scope.janClick = function () {
        var jan = angular.element(document.querySelector('#jan'));
        if ($scope.Jan == false) {
            jan.css('background-color', '#66B1E3')
            $scope.Jan = true;
        }
        else {
            $scope.Jan = false;
            jan.css('background-color', '#FFFFFF')
        }
    }
    $scope.febClick = function () {
        var feb = angular.element(document.querySelector('#feb'));
        if ($scope.Feb == false) {
            feb.css('background-color', '#66B1E3')
            $scope.Feb = true;
        }
        else {
            $scope.Feb = false;
            feb.css('background-color', '#FFFFFF')
        }
    }
    $scope.marClick = function () {
        var mar = angular.element(document.querySelector('#mar'));
        if ($scope.Mar == false) {
            mar.css('background-color', '#66B1E3')
            $scope.Mar = true;
        }
        else {
            $scope.Mar = false;
            mar.css('background-color', '#FFFFFF')
        }
    }
    $scope.aprClick = function () {
        var apr = angular.element(document.querySelector('#apr'));
        if ($scope.Apr == false) {
            apr.css('background-color', '#66B1E3')
            $scope.Apr = true;
        }
        else {
            $scope.Apr = false;
            apr.css('background-color', '#FFFFFF')
        }
    }
    $scope.mayClick = function () {
        var may = angular.element(document.querySelector('#may'));
        if ($scope.May == false) {
            may.css('background-color', '#66B1E3')
            $scope.May = true;
        }
        else {
            $scope.May = false;
            may.css('background-color', '#FFFFFF')
        }
    }
    $scope.junClick = function () {
        var jun = angular.element(document.querySelector('#jun'));
        if ($scope.Jun == false) {
            jun.css('background-color', '#66B1E3')
            $scope.Jun = true;
        }
        else {
            $scope.Jun = false;
            jun.css('background-color', '#FFFFFF')
        }
    }
    $scope.julClick = function () {
        var jul = angular.element(document.querySelector('#jul'));
        if ($scope.Jul == false) {
            jul.css('background-color', '#66B1E3')
            $scope.Jul = true;
        }
        else {
            $scope.Jul = false;
            jul.css('background-color', '#FFFFFF')
        }
    }
    $scope.augClick = function () {
        var aug = angular.element(document.querySelector('#aug'));
        if ($scope.Aug == false) {
            aug.css('background-color', '#66B1E3')
            $scope.Aug = true;
        }
        else {
            $scope.Aug = false;
            aug.css('background-color', '#FFFFFF')
        }
    }
    $scope.sepClick = function () {
        var sep = angular.element(document.querySelector('#sep'));
        if ($scope.Sep == false) {
            sep.css('background-color', '#66B1E3')
            $scope.Sep = true;
        }
        else {
            $scope.Sep = false;
            sep.css('background-color', '#FFFFFF')
        }
    }
    $scope.octClick = function () {
        var oct = angular.element(document.querySelector('#oct'));
        if ($scope.Oct == false) {
            oct.css('background-color', '#66B1E3')
            $scope.Oct = true;
        }
        else {
            $scope.Oct = false;
            oct.css('background-color', '#FFFFFF')
        }
    }
    $scope.novClick = function () {
        var nov = angular.element(document.querySelector('#nov'));
        if ($scope.Nov == false) {
            nov.css('background-color', '#66B1E3')
            $scope.Nov = true;
        }
        else {
            $scope.Nov = false;
            nov.css('background-color', '#FFFFFF')
        }
    }
    $scope.decClick = function () {
        var dec = angular.element(document.querySelector('#dec'));
        if ($scope.Dec == false) {
            dec.css('background-color', '#66B1E3')
            $scope.Dec = true;
        }
        else {
            $scope.Dec = false;
            dec.css('background-color', '#FFFFFF')
        }
    }
    $scope.memClick = function () {
        var mem = angular.element(document.querySelector('#mem'));
        if ($scope.Mem == false) {
            mem.css('background-color', '#66B1E3')
            $scope.Mem = true;
        }
        else {
            $scope.Mem = false;
            mem.css('background-color', '#FFFFFF')
        }
    }
    $scope.casClick = function () {
        var cas = angular.element(document.querySelector('#cas'));
        if ($scope.Cas == false) {
            cas.css('background-color', '#66B1E3')
            $scope.Cas = true;
        }
        else {
            $scope.Cas = false;
            cas.css('background-color', '#FFFFFF')
        }
    }
    $scope.maClick = function () {
        var ma = angular.element(document.querySelector('#ma'));
        if ($scope.Ma == false) {
            ma.css('background-color', '#66B1E3')
            $scope.Ma = true;
        }
        else {
            $scope.Ma = false;
            ma.css('background-color', '#FFFFFF')
        }
    }
    $scope.feClick = function () {
        var fe = angular.element(document.querySelector('#fe'));
        if ($scope.Fe == false) {
            fe.css('background-color', '#66B1E3')
            $scope.Fe = true;
        }
        else {
            $scope.Fe = false;
            fe.css('background-color', '#FFFFFF')
        }
    }
    $scope.durClick = function () {
        var dur = angular.element(document.querySelector('#dur'));
        if ($scope.Dur == false) {
            dur.css('background-color', '#66B1E3')
            $scope.Dur = true;
        }
        else {
            $scope.Dur = false;
            dur.css('background-color', '#FFFFFF')
        }
    }
    $scope.milesClick = function () {
        var mile = angular.element(document.querySelector('#miles'));
        if ($scope.Miles == false) {
            mile.css('background-color', '#66B1E3')
            $scope.Miles = true;
        }
        else {
            $scope.Miles = false;
            mile.css('background-color', '#FFFFFF')
        }
    }


    //-----------------------------------------------------------------------------------------------------

    $scope.pathsArray = [];
    $scope.geoJson = ({

        rides: [{
            latlngs: [
                [37.7625, -122.5018],
                [37.7626, -122.4996],
                [37.7570, -122.4993],
                [37.7576, -122.4864]
            ],
            bikeinfo: {
                rider: "Franklin Albert",
                age: "Clement St, SF ",
                gender: "Member"
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
                iconImg: "normal",
                avatarImg: "normal"
            },


        }, {
            latlngs: [
                [37.7596, -122.4811],
                [37.7578, -122.4810],
                [37.7582, -122.4746],
                [37.7562, -122.4745]
            ],
            bikeinfo: {
                rider: "Di Caprio",
                age: "Lawton St, SF",
                gender: "Admin"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.7581, -122.4737],
                [37.7580, -122.4746],
                [37.7525, -122.4743],
                [37.7523, -122.4774]
            ],
            bikeinfo: {
                rider: "Christian Bale",
                age: "Cabrillo St, SF",
                gender: "Member"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.7503, -122.4816],
                [37.7506, -122.4761],
                [37.7469, -122.4758],
                [37.7469, -122.4728]
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.755792, -122.483034],
                [37.755813, -122.48192],
                [37.756865, -122.482048],
                [37.757696, -122.482091]
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.759483, -122.484379],
                [37.759595, -122.482255],
                [37.759615, -122.481761],
                [37.761449, -122.481821]
            ],
            bikeinfo: {
                rider: "Christano Ronaldo",
                age: "Cabrillo St, SF",
                gender: "Member"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.749223, -122.505141],
                [37.752992, -122.505414],
                [37.753183, -122.500051],
                [37.756933, -122.50033]
            ],
            bikeinfo: {
                rider: "Richard Branson",
                age: "Clement St, SF ",
                gender: "Member"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.7629, -122.491059],
                [37.763029, -122.488881],
                [37.761178, -122.488795],
                [37.761042, -122.490909]
            ],
            bikeinfo: {
                rider: "Manovah Eleanor",
                age: "Moraga St, SF",
                gender: "Admin"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }, {
            latlngs: [
                [37.758438, -122.507957],
                [37.75658, -122.507817],
                [37.756665, -122.505693],
                [37.75675, -122.503515]
            ],
            bikeinfo: {
                rider: "Christopher Nolan",
                age: "Cabrillo St, S",
                gender: "Member"
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
                iconImg: "normal",
                avatarImg: "normal"
            }

        }


        ]
    });
    var sorted = $scope.geoJson.rides.sort(function (a, b) {
        if (a.rideinfo.duration > b.rideinfo.duration) {
            return -1;
        }
        if (a.rideinfo.duration < b.rideinfo.duration) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
    // Markers Starting

    var ovalIcon = L.icon({
        iconUrl: '/images/oval.png',
        iconAnchor: [7, 6]
    });
    var Icon = [];
    Icon[0] = L.icon({
        iconUrl: '/images/marker_green.png',
        iconAnchor: [9, 26]
    });

    Icon[3] = L.icon({
        iconUrl: '/images/marker_red.png',
        iconAnchor: [9, 26]
    });


    // Markers Ending


    var name = [];
    var marker = [];
    function drwLayers() {
        for (i = 0; i < $scope.geoJson.rides.length; i++) {
            name[i] = L.polyline($scope.geoJson.rides[i].latlngs, {
                color: '#929497',
                weight: '2.5',
                opacity: '1'
            }).addTo(map);
            if($scope.autoZ == true){
            map.setView([37.757217, -122.481589], 14);
        }
            name[i].on('mouseover', function () {
                style = {
                    weight: '3.5',
                    color: '#666'
                };
                this.setStyle(style);
            });
            name[i].on('mouseout', function () {
                style = {
                    weight: '2.5',
                    color: '#929497'
                };
                this.setStyle(style);
            });
        }
        countMarker = 0
        for (a = 0; a < $scope.geoJson.rides.length; a++) {
            for (j = 0; j <= 3; j = j + 3) {
                marker[countMarker] = L.marker($scope.geoJson.rides[a].latlngs[j], {
                    icon: ovalIcon
                }).addTo(map);
                countMarker++;
            }
        }
    }
    drwLayers();
    // List hover in function
    $scope.sora = "#fff";
    $scope.sortByAscending = function () {
        $scope.sora = "#4A5060";
        $scope.sorb = "#fff";

          var sorted = $scope.geoJson.rides.sort(function (a, b) {

           if (a.rideinfo["duration"]> b.rideinfo["duration"]) {
               return 1;
           }
           if (a.rideinfo["duration"] < b.rideinfo["duration"]) {
               return -1;
           }
          });

    }

     $scope.sortByDescending = function () {
        $scope.sora = "#fff";
        $scope.sorb = "#4A5060";

          var sorted = $scope.geoJson.rides.sort(function (a, b) {

           if (a.rideinfo["duration"]> b.rideinfo["duration"]) {
               return -1;
           }
           if (a.rideinfo["duration"] < b.rideinfo["duration"]) {
               return 1;
           }
          });


    }


/*$scope.sortedJson = function (){

   var sorted = $scope.geoJson.rides.sort(function (a, b) {

       console.log($scope.sortedBy);
       var value = $scope.sortedBy;

       if(value ==  "duration"){
           a.rideinfo[value] = parseFloat(a.rideinfo[value]).toFixed(2);
           b.rideinfo[value] = parseFloat(b.rideinfo[value]).toFixed(2);
           if (a.rideinfo[value]> b.rideinfo[value]) {
               return 1;
           }
           if (a.rideinfo[value] < b.rideinfo[value]) {
               return -1;
           }
       }
       if(value == "name"){
           console.log(a);
           console.log(b);

           if(a.bikeinfo[value].localeCompare(b.bikeinfo[value]) == 1){
               return 1;
           }

           if(a.bikeinfo[value].localeCompare(b.bikeinfo[value]) == -1){
               return -1;
           }
       }

[9:26] 
}

[9:26] 
return 0;
   });
}*/







    $scope.hovList = function ($index) {
        countMarker = 0;
        map.eachLayer(function () {
            if (name[$index] instanceof L.Path) {
                for (k = 0; k < $scope.geoJson.rides.length; k++) {
                    map.removeLayer(name[k]);
                }
            }
        });
        map.eachLayer(function () {
            for (j = 0; j < 18; j = j + 2) {
                map.removeLayer(marker[j]);
                map.removeLayer(marker[j + 1]);
            }
        });
        countMarkers = 0;
        for (j = 0; j <= 3; j = j + 3) {
            marker[countMarkers] = L.marker($scope.geoJson.rides[$index].latlngs[j], {
                icon: Icon[j]
            }).addTo(map);
            countMarkers++;
        }

        name[$index] = L.polyline($scope.geoJson.rides[$index].latlngs, {
            color: '#6edf9e',
            weight: '2.5',
            opacity: '1'
        }).addTo(map);
        if($scope.autoZ == true){
            map.fitBounds(name[$index].getBounds());
        }
        
    };
    // List hover out function
    $scope.hovOut = function ($index) {
        map.eachLayer(function () {
            if (name[$index] instanceof L.Path) {
                map.removeLayer(name[$index]);
            }
        });
        map.eachLayer(function () {
            for (j = 0; j < 18; j = j + 2) {
                map.removeLayer(marker[j]);
                map.removeLayer(marker[j + 1]);
            }
        });
        drwLayers();
    }


}
}])
