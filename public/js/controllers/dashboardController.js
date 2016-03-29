
    var app = angular.module('frontEndBackendTest.controllers', ['chart.js','countTo','md.data.table','md.table.templates']);
app.controller('dashboardController', ['$scope', '$timeout', function ($scope, $timeout) {


$scope.session = function () {
       console.log("hell");
       if(sessionservice.getCookieData() != undefined)
       {
           //$rootScope.dis = true;
           console.log("hell");
           $location.path('/Dashboard');
       }
       else
       {
           //$rootScope.dis = false;
           /!​*$scope.setflag(1);*​!/
           $location.path('/login');
       }

   }

   $scope.session();
        $('.date-input').datepicker({
            autoclose: true,
            startDate: new Date(),
            dateFormat: 'dd-M-yy'
        });

        var m_names = new Array("Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec");

        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        var date = (curr_date + "-" + m_names[curr_month]
        + "-" + curr_year);
        $scope.today = date;

        var local_icons = {

                        awesomeMarkerIcon: {
                            type: 'awesomeMarker',
                               icon: 'tag',


                                    },
                     marker_theft_icon: {

                                iconUrl: '../images/marker_theft.png',
                                 iconAnchor:   [9, 26]

                        },
                    marker_pickup_icon: {

                                iconUrl: '../images/marker_blue.png',
                                iconAnchor:   [9, 26]

                        },
                    marker_drop_off_icon: {

                                iconUrl: '../images/marker_green.png',
                                iconAnchor:   [9, 26]

                        },
                    marker_maintenance_icon: {

                                iconUrl: '../images/marker_red.png',
                                iconAnchor:   [9, 26]

                        },
                    default_icon: {
                            iconUrl:"../images/map-marker.png",
                                iconAnchor:   [9, 26]
                        },
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
                angular.extend($scope, {
                        london: {
                            lat: 37.760266,
                               lng: -122.467775,
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
                      lng: -122.48x16
                      },
                      7: {
                      lat: 37.7469,
                      lng: -122.4728
                      }
                      },*/

                            tiles: tilesDict.mapbox_outdoors

               });


        $timeout(function() {
            $scope.showPercent = true;
        }, 5000);

        $scope.showPercent = false;

                $scope.feed =([{

                       latlngs:{lat: 37.7625, lng: -122.5018},
                        rider: " Jonathan Smith",
                           status: " picked up",
                            address: "555 Park Avenue",
                            src:"Pickup.png"
                   },{
                            latlngs:{lat: 37.7503, lng: -122.4816},
                            rider: " Claire Malone",
                               status: " dropped up",
                               address: "105 Atlantic Street",
                                src:"Dropoff.png"
                        },{
                            latlngs:{lat: 37.7469, lng: -122.4728},
                            rider: " Jonathan Smith",
                               status: " picked up",
                               address: "555 Park Avenue",
                                src:"Pickup.png"
                        },{
                            latlngs:{lat: 37.7523, lng: -122.4774},
                            rider: " Claire Malone",
                               status: " dropped up",
                                address: "105 Atlantic Street",
                                src:"Dropoff.png"
                        },{
                            latlngs:{lat: 37.751308, lng: -122.496271},
                            rider: " Jonathan Smith",
                                status: " picked up",
                                address: "555 Park Avenue",
                                src:"maintenance.png"
                        },{
                            latlngs:{lat: 37.746693, lng: -122.489061},
                            rider: " ABC Bike name",
                                status: " ready for collection",
                                address: "112A South YorkStreet",
                                src:"Theftalert.png"
                        },{
                            latlngs:{lat: 37.7581, lng: -122.4737},
                            rider: " Claire Malone",
                                status: " dropped up",
                                address: "105 Atlantic Street",
                                src:"Pickup.png"

                        },{
                            latlngs:{lat: 37.775192,lng: -122.488203},
                            rider: " Jonathan Smith",
                                status: " picked up",
                                address: "555 Park Avenue",
                                src:"Pickup.png"
                       },{
                           latlngs:{lat: 37.7576, lng: -122.4864},
                            rider: " Jonathan Smith",
                                status: " picked up",
                                address: "555 Park Avenue",
                                src:"Pickup.png"
                       },{
                            latlngs:{lat: 37.736919, lng: -122.470522},
                            rider: " Claire Malone",
                               status: " dropped up",
                               address: "105 Atlantic Street",
                               src:"Dropoff.png"
                       }
                        ]
                );
        console.log($scope.feed);
                /* $scope.markers={};
                 var colors = ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue', 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray'];
                 for(i=0;i<$scope.feed.length;i++){

                     $scope.markers[i]= {lat:$scope.feed[i].latlngs.lat,long:$scope.feed[i].latlngs.lng, icon:local_icons.awesomeMarkerIcon,markerColor:'red'};

                 }
                 console.log($scope.markers);*/
                    $scope.markers = ({
                    0: {
                            lat: $scope.feed[0].latlngs.lat,
                                lng: $scope.feed[0].latlngs.lng,
                                icon:local_icons.marker_pickup_icon




                                        },
                    1: {
                            lat: $scope.feed[1].latlngs.lat,
                                lng: $scope.feed[1].latlngs.lng,
                                icon:local_icons.marker_drop_off_icon

                            },
                   2: {
                          lat: $scope.feed[2].latlngs.lat,
                               lng: $scope.feed[2].latlngs.lng,
                               icon:local_icons.marker_pickup_icon
                      },
                   3: {
                           lat: $scope.feed[3].latlngs.lat,
                               lng: $scope.feed[3].latlngs.lng,
                               icon:local_icons.marker_drop_off_icon

                       },
                   4: {
                           lat: $scope.feed[4].latlngs.lat,
                               lng: $scope.feed[4].latlngs.lng,
                               icon:local_icons.marker_maintenance_icon
                       },
                   5: {
                           lat: $scope.feed[5].latlngs.lat,
                               lng: $scope.feed[5].latlngs.lng,
                               icon:local_icons.marker_theft_icon
                      },
                   6: {
                           lat: $scope.feed[6].latlngs.lat,
                               lng: $scope.feed[6].latlngs.lng,
                               icon:local_icons.marker_pickup_icon
                       },
                   7: {
                           lat: $scope.feed[7].latlngs.lat,
                               lng: $scope.feed[7].latlngs.lng,
                               icon:local_icons.marker_pickup_icon
                      },
                   8: {
                           lat: $scope.feed[8].latlngs.lat,
                               lng: $scope.feed[8].latlngs.lng,
                               icon:local_icons.marker_pickup_icon
                      },
                   9: {
                          lat: $scope.feed[9].latlngs.lat,
                              lng: $scope.feed[9].latlngs.lng,
                              icon:local_icons.marker_drop_off_icon
                       }
               });



	
      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.series = ['unrentable', 'parked/idle','being rented'];
      $scope.data = [
				[100,100,100,100,100,100,100],
        [90, 90, 92, 94, 96, 97, 96],
		[10,20,40,50,30,20,10]
      ];
	  $scope.colours = [
	  
		{ // grey
		fillColor: 'rgb(211,211,211)',
        strokeColor: 'rgb(211,211,211)',
        pointColor: 'rgb(211,211,211)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(77,83,96,1)'
      },		
      { // green
        fillColor: 'rgb(144,238,144)',
        strokeColor: 'rgb(144,238,144)',
        pointColor: 'rgb(144,238,144)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      },
      { // blue
        fillColor: 'rgb(30,144,255)',
        strokeColor: 'rgb(30,144,255)',
        pointColor: 'rgb(30,144,255)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,189,0.8)'
      }
    ];
	$scope.options = { scaleShowVerticalLines: true };
    $scope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series1 = ['Rented Bikes', 'Unmet Demand'];
    $scope.data1 = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
	$scope.colours1 = [
	  { // blue
        fillColor: 'rgb(30,144,255)',
        strokeColor: 'rgb(30,144,255)',
        pointColor: 'rgb(30,144,255)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,189,0.8)'
      }, 		
      { // green
        fillColor: 'rgb(211,211,211)',
        strokeColor: 'rgb(211,211,211)',
        pointColor: 'rgb(211,211,211)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      }
    ];
	$scope.labels2 = ['being rented','parked/idle','Maintenance','Lost/Stolen'];
    $scope.data2 = [70, 10,3,7];
	$scope.colours2 = [
	  { // green
        fillColor: 'rgb(144,238,144)',
        strokeColor: 'rgb(144,238,144)',
        pointColor: 'rgb(144,238,144)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      },		
	  { // grey
		fillColor: 'rgb(211,211,211)',
        strokeColor: 'rgb(211,211,211)',
        pointColor: 'rgb(211,211,211)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(77,83,96,1)'
      },
	  { // light blue
        fillColor: 'rgb(173,216,230)',
        strokeColor: 'rgb(173,216,230)',
        pointColor: 'rgb(173,216,230)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,189,0.8)'
      }, 	
	  { // blue
        fillColor: 'rgb(30,144,255)',
        strokeColor: 'rgb(30,144,255)',
        pointColor: 'rgb(30,144,255)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,189,0.8)'
      }
    ];
	$scope.labels3 = ['casual riders','members'];
    $scope.data3 = [20,80];
	$scope.colours3 = [
	  { // blue
        fillColor: 'rgb(30,144,255)',
        strokeColor: 'rgb(30,144,255)',
        pointColor: 'rgb(30,144,255)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,189,0.8)'
      },
	  { // green
        fillColor: 'rgb(144,238,144)',
        strokeColor: 'rgb(144,238,144)',
        pointColor: 'rgb(144,238,144)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      }
    ];

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
                        rider: "Vijay",
                        age: "39",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "01/02/2016",
                        day: "Monday",
                        startTime: "10.00",
                        endTime: "11.00",
                        duration: "1.00",
                        distance: "10"
                    }

                },
                {
                    latlngs: [
                        {lat: 37.7596, lng: -122.4811},
                        {lat: 37.7578, lng: -122.4810},
                        {lat: 37.7582, lng: -122.4746},
                        {lat: 37.7562, lng: -122.4745}
                    ],
                    bikeinfo: {
                        rider: "ravi",
                        age: "24",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "03/02/2016",
                        day: "Tuesday",
                        startTime: "10.00",
                        endTime: "11.00",
                        duration: "1.00",
                        distance: "3"
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
                        rider: "karthik",
                        age: "25",
                        gender: "Male"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "10.00",
                        endTime: "11.00",
                        duration: "1.00",
                        distance: "5"
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
                        rider: "Aravind",
                        age: "22",
                        gender: "Female"
                    },
                    rideinfo: {
                        date: "04/02/2016",
                        day: "Wednesday",
                        startTime: "10.00",
                        endTime: "11.00",
                        duration: "1.00",
                        distance: "12"
                    }

                }


            ]
        });
        var avgDist = 0;
        var noOfRides = 0;
        var totalDist = 0;
        var totalDur = 0;
        for(i=0;i<$scope.geoJson.rides.length;i++){
            totalDur += parseFloat($scope.geoJson.rides[i].rideinfo.duration);
            totalDist += parseFloat($scope.geoJson.rides[i].rideinfo.distance);
            avgDist = totalDist/$scope.geoJson.rides.length;
            noOfRides+= parseInt($scope.geoJson.rides.length);
            }
	$scope.avgDist = avgDist;
        $scope.countToDur = totalDur;
        $scope.countToDist = totalDist;
        $scope.noOfRides = noOfRides;
    $scope.countFromMiles = 0;




        $scope.executed=true;
        $scope.move = function() {
            var elem = document.getElementById("myBar");
            var elem1 = document.getElementById("myBar2");
            var elem2 = document.getElementById("myBar4");
            var elem3 = document.getElementById("myBar6");
            if( $scope.executed)
            {
                var width = 0;
                var id = setInterval(frame, 6);
                function frame() {
                if (width == 80) {
                    clearInterval(id);
                } else {
                    width++;
                    var finalWidth = parseInt((width/3000) * 1033);
                    var finalWidth1 = parseInt((width/100) * 82);
                    var finalWidth2 = parseInt((width/53) * 12);
                    var finalWidth3 = parseInt((width/83) * 4);
                    elem.style.width = finalWidth + '%';
                    elem1.style.width = finalWidth1 + '%';
                    elem2.style.width = finalWidth2 + '%';
                    elem3.style.width = finalWidth3 + '%';
                }
            }            }        }
        $scope.move1 = function() {
            var elem = document.getElementById("myBar1");
            var elem1 = document.getElementById("myBar3");
            var elem2 = document.getElementById("myBar5");
            var elem3 = document.getElementById("myBar7");
            if( $scope.executed){
            var width = 0;
            var id = setInterval(frame, 6);
            $scope.executed=false;
            function frame() {
                if (width == 80) {
                    clearInterval(id);
                } else {
                    width++;
                    var finalWidth = parseInt((width/3000) * 996);
                    var finalWidth1 = parseInt((width/100) * 78);
                    var finalWidth2 = parseInt((width/53) * 19);
                    var finalWidth3 = parseInt((width/83) * 11);
                    elem.style.width = finalWidth + '%';
                    elem1.style.width = finalWidth1 + '%';
                    elem2.style.width = finalWidth2 + '%';
                    elem3.style.width = finalWidth3 + '%';
                }
            }            }
        };

    $scope.reCount = function () {
        $scope.countFrom = Math.ceil(Math.random() * 300);
        $scope.countTo = Math.ceil(Math.random() * 7000) - Math.ceil(Math.random() * 600);
    };

    }]) .directive('scrollTrigger', function($window) {
        return {
            link : function(scope, element, attrs) {
                var offset = parseInt(attrs.threshold) || 0;
                var e = jQuery(element[0]);
                var doc = jQuery(document);
                angular.element(document).bind('scroll', function() {
                    if (doc.scrollTop() + $window.innerHeight + offset > e.offset().top) {
                        scope.$apply(attrs.scrollTrigger);
                    }
                });
            }
        };
    })
