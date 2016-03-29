angular.module('frontEndBackendTest.controllers').factory("sessionservice", [
    "$cookies", function($cookies) {
        var userName = "";

        return {
            setCookieData: function(json) {
                userName = json;
                console.log(json['name']);
                $cookies.put("userName", json['name']);
            },
            getCookieData: function() {
                userName = $cookies.get("userName");
                return userName;
            },
            clearCookieData: function() {
                userName = "";
                console.log("hell");
                $cookies.remove("userName");
            }
        }
    }
]);