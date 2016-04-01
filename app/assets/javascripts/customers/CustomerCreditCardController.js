(function () {
  function CustomerCreditCardController ($scope, $resource) {
    var CreditCardInfo = $resource('/fake_billing.json');
    $scope.setCardholderId = function (cardholderId) {
      $scope.creditCard = CreditCardInfo.get({"cardholder_id": cardholderId});
    };

  }

  angular
    .module("customers")
    .controller("CustomerCreditCardController",["$scope", "$resource", CustomerCreditCardController]);
})();
