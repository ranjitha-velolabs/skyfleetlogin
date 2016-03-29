/**
 * Created by Karthick Krishnan on 03-02-2016.
 */


angular.module('frontEndBackendTest.controllers')


    .controller('insertController', ['$scope', '$http', '$state','$localStorage','$rootScope', function($scope, $http, $state,$localStorage, $rootScope) {


        $scope.insert = function () {

            console.log($scope.latitude);
            console.log($scope.longitude);


           /* var menuJson=angular.toJson({"id":$scope.comp.id,"companyName":$scope.comp.companyName,"companyAddress":$scope.comp.companyAddress,"phoneNumber":$scope.comp.phoneNumber,"mobileNumber":$scope.comp.mobileNumber,"logo":$scope.res,"accountNumber":$scope.comp.accountNumber,"bankName":$scope.comp.bankName,"bankAddress":$scope.comp.bankAddress,"ifscCode":$scope.comp.ifscCode,"micrCode":$scope.comp.micrCode,
                "branch":$scope.comp.branch,"taxId":$scope.comp.taxId,"accountName":$scope.comp.accountName,"companyUrl":$scope.comp.companyUrl,"swiftCode":$scope.comp.swiftCode});


            $http({
                url: 'rest/company/addcompany',
                method: 'POST',
                data: menuJson,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function(result, status, headers) {
                console.log("Result==>"+result);
                if(result=="true"){
                    $(".alert-msg").show().delay(1000).fadeOut();
                    $(".alert-success").html("Company Details Added Successfully");
                }else{
                    $(".alert-msg1").show().delay(1000).fadeOut();
                    $(".alert-danger").html("Process Failed");
                }
                $scope.list();
                $(".span-profile").show();
                $(".edit-profile").hide();
                $(".edit-profile-img").hide();
                $('.btn-profile-edit').show();
                $('.btn-profile-save').hide();
                $('.btn-profile-cancel').hide();
            })*/

        }

        $scope.list = function () {

            $scope.latitude ="";

            $http({
                url: '/get_bikes/getAll',
                method: 'GET',
            }).success(function(result, status, headers) {
                console.log("front end Result==>" + result);

            });



        }







    }])