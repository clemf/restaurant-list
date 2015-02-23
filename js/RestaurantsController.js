restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [{name: "Ron's", foodType: "Fried Chicken", location: "Your Momma Ln", priceRange: "$"},
                        {name: "Barack's", foodType: "Fried Chicken", location: "White House", priceRange: "$$$"},
                        {name: "Clem's", foodType: "Fried Squid", location: "123 Main St", priceRange: "$$"}];
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
