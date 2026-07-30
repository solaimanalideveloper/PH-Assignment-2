function isElevatorSafe(weights) {
  if (Array.isArray(weights)) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
    }

    if (sum <= 400) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
console.log(isElevatorSafe([50, 40, 50, 600]));
console.log(isElevatorSafe({ weight: 60 }));
console.log(isElevatorSafe(undefined));
console.log(isElevatorSafe([60, 70, 80, 90])); // Expected: true (যোগফল ৩১০, সীমার মধ্যে)
console.log(isElevatorSafe([100, 150, 150])); // Expected: true (যোগফল ঠিক ৪০০)
console.log(isElevatorSafe([200, 201])); // Expected: false (যোগফল ৪০১, ওভারলোড)
console.log(isElevatorSafe([50, 80, 120, 200])); // Expected: false (যোগফল ৪৫০, ওভারলোড)
console.log(isElevatorSafe([])); // Expected: true (ফাঁকা লিফটে ওজন ০, নিরাপদ)
console.log(isElevatorSafe([450])); // Expected: false (একজনই ওভারলোড)
console.log(isElevatorSafe("400")); // Expected: "Invalid" (অ্যারে না, স্ট্রিং)
console.log(isElevatorSafe(350)); // Expected: "Invalid" (অ্যারে না, নাম্বার)
console.log(isElevatorSafe({ weight: 300 })); // Expected: "Invalid" (অ্যারে না, অবজেক্ট)
console.log(isElevatorSafe()); // Expected: "Invalid" (কোনো ইনপুট দেওয়া হয়নি)

// function isElevatorSafe(weights) {
//   if (!Array.isArray(weights)) {
//     return "Invalid";
//   }
//   let sum = 0;
//   for (let i = 0; i < weights.length; i++) {
//     sum += weights[i];
//   }
//   if (sum <= 400) {
//     return true;
//   } else {
//     return false;
//   }
// }
