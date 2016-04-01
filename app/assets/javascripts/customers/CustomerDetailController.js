(function () {
  function CustomerDetailController ($scope, $routeParams, $resource) {
    $scope.customerId = $routeParams.id;
    var Customer = $resource('/customers/:customerId.json');

    $scope.customer = Customer.get({"customerId":$scope.customerId});
  }

  angular
    .module("customers")
    .controller("CustomerDetailController",["$scope", "$routeParams", "$resource", CustomerDetailController]);
})();
