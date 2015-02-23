restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({name: $scope.restaurantName, foodType: $scope.restaurantFoodType, location: $scope.restaurantLocation, priceRange: $scope.restaurantPriceRange});
    $scope.restaurantName = null;
    $scope.restaurantFoodType = null;
    $scope.restaurantLocation = null;
    $scope.restaurantPriceRange = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
