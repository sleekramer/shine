(function () {
  function CustomerSearchController ($scope, $http, $location) {
    var page = 0;
    $scope.customers = [];
    $scope.search = function(searchTerm) {
      if (searchTerm.length < 3) {
        return;
      }
      $http.get("/customers.json", {"params":{"keywords":searchTerm, "page":page}}
      ).then(function(response) {
        $scope.customers = response.data;
      }, function(response){
        alert("There was a problem: " + response.status );
      });
    };

    $scope.previousPage = function () {
      if (page > 0) {
        page = page - 1;
        $scope.search($scope.keywords);
      }
    };
    $scope.nextPage = function () {
      page = page + 1;
      $scope.search($scope.keywords);
    };
    $scope.viewDetails = function(customer) {
      $location.path("/" + customer.id);
    };
  }

  angular
    .module("customers")
    .controller("CustomerSearchController", ["$scope","$http", "$location", CustomerSearchController]);
})();
