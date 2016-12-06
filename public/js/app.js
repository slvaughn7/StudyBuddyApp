(function (){

var app = angular.module("mainMod", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/about", {
    templateUrl:"views/about.html"
  }),
  $routeProvider.when("/results", {
    templateUrl:"views/results.html"
  }),
  $routeProvider.when("/place", {
    templateUrl:"views/place.html"
  });
});













})();
