(function () {
  function CustomerDetailController ($scope, $routeParams, $http) {
    var customerId = $routeParams.id;
    $scope.customer = {};
    $http.get("/customers/" + customerId + ".json").then(function(response) {
      $scope.customer = response.data;
    }, function(response) {
      alert("There was a problem: " + response.status);
    });
  }

  angular
    .module("customers")
    .controller("CustomerDetailController",["$scope", "$routeParams", "$http", CustomerDetailController]);
})();
