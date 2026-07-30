function topRatedRestaurant(restaurants) {
  if (typeof restaurants !== "object" || restaurants.length === 0) {
    return "Invalid";
  }
  let higRating = restaurants[0];

  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].rating > higRating.rating) {
      higRating = restaurants[i];
    }
  }
  return higRating.name.toUpperCase();
}

console.log(
  topRatedRestaurant([
    { name: "Chillox", rating: 4.5 }, //"SULTAN'S DINE"
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
);

console.log(topRatedRestaurant([])); //"Invalid"

console.log(
  topRatedRestaurant([
    { name: "KFC", rating: 4.2 },  //"PIZZA HUT"
    { name: "Pizza Hut", rating: 4.6 }]));

console.log(topRatedRestaurant("restaurants")); //"Invalid"

console.log(topRatedRestaurant([{ name: "Burger King", rating: 3.9 }]));    //"BURGER KING"
console.log(topRatedRestaurant(undefined));
