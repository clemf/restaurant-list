restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [{name: "Ron's", foodType: "Fried Chicken", location: "Your Momma Ln", priceRange: "$"},
                        {name: "Barack's", foodType: "Fried Chicken", location: "White House", priceRange: "$$$"},
                        {name: "Joe's", foodType: "Fried Oysters", location: "Detroit", priceRange: "$"},
                        {name: "Vince's", foodType: "Cajun", location: "Chiraq", priceRange: "$$$"},
                        {name: "Tiffany's", foodType: "Raw Vegan", location: "8 Mile", priceRange: "$$"},
                        {name: "Brenda's", foodType: "Chinese", location: "Stoicville", priceRange: "$"},
                        {name: "Clem's", foodType: "Fried Squid", location: "123 Main st", priceRange: "$$"}];
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
