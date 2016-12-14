(function(){
var app = angular.module("mainMod");

  app.controller("getSearchCtrl", ["$scope", "searchResultsService", "commentsService", function ($scope, searchResultsService, commentsService){
    var displayResults = function() {
      $scope.results = searchResultsService.getSearchResults();
      var reviews = commentsService.getComments();
      $scope.ratings = reviews.avgRates;
      for(var i=0; i < $scope.results.length; i++) {
        for(var j=0; j< $scope.ratings.length; j++) {
          if($scope.results[i].id === $scope.ratings[j].businessid) {
            $scope.results[i] = Object.assign($scope.results[i], $scope.ratings[j]);
          }
        }
      }
    };

    $scope.$on('$routeChangeSuccess', function () {
      displayResults();
    });

    $scope.sortBy = function(prop) {
      $scope.remProp = "!"+prop;
      $scope.prop = prop;
    }
  }]);
})();
