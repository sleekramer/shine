(function () {
  function config ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "CustomerSearchController",
        templateUrl: "customers/_customer_search.html"
      })
      .when("/:id",{
        controller: "CustomerDetailController",
        templateUrl: "customers/_customer_detail.html"
      });
    }

  angular
    .module('customers',["ngRoute","templates"])
    .config(["$routeProvider", config]);

})();
