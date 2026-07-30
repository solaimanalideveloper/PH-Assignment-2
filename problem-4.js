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
    { name: "Sultan's Dine", rating: 4.8 }]));

console.log(topRatedRestaurant([])); //"Invalid"

console.log(
  topRatedRestaurant([
    { name: "KFC", rating: 4.2 }, //"PIZZA HUT"
    { name: "Pizza Hut", rating: 4.6 }]));
console.log(topRatedRestaurant("restaurants")); //"Invalid"
console.log(topRatedRestaurant([{ name: "Burger King", rating: 3.9 }])); //"BURGER KING"
console.log(topRatedRestaurant(undefined));
console.log(
  topRatedRestaurant([
    { name: "Kacchi Bhai", rating: 4.8 },
    { name: "Chillox", rating: 4.5 }])); // KACCHI BHAI
console.log(
  topRatedRestaurant([
    { name: "Takeout", rating: 4.2 },
    { name: "Burger King", rating: 4.6 },
    { name: "Pizza Hut", rating: 4.4 }])); // BURGER KING
console.log(topRatedRestaurant([{ name: "Star Kabab", rating: 4.5 }])); // STAR KABAB
console.log(
  topRatedRestaurant([
    { name: "Sultan Dine", rating: 4.7 },
    { name: "Grand Nawab", rating: 4.7 }])); // SULTAN DINE
console.log(topRatedRestaurant([])); // Invalid
console.log(topRatedRestaurant("Kacchi")); // Invalid (আপনার কোড রান করে দেখুন কী আসে!)
console.log(topRatedRestaurant(12345)); // Invalid

// console.log(topRatedRestaurant(null)); // Invalid
// console.log(topRatedRestaurant({ name: "Cafe", rating: 5 })); // Invalid
// console.log(topRatedRestaurant([{ rating: 4.5 }])); // Invalid (বা ক্র্যাশ করবে)



// function topRatedRestaurant(restaurants) {
//     if (typeof restaurants !== "object") {
//         return "Invalid";
//     }
//     let higRating = restaurants[0];

//     for (let i = 0; i < restaurants.length; i++) {
//         if (restaurants[i].rating > higRating.rating) {
//             higRating = restaurants[i];
//         }
//     }
//     return higRating.name.toUpperCase();
// }
