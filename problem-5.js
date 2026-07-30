/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) == false) {
    return "Invalid";
  }

  if (times.length == 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total = total + times[i];
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
  }

  return total / times.length;
}
console.log(averageResponseTime([120, 200, 150, 130, 453, 33, 223])); //  187
console.log(averageResponseTime([100, 100, 232, 121, 211])); //  152.8
console.log(averageResponseTime([])); //  Invalid
console.log(averageResponseTime(["logs"])); //  Invalid
console.log(averageResponseTime([120, "200", 150])); //  Invalid
console.log(averageResponseTime([120, 200, 150, 130, 453, 33, 223])); // Expected: 187 (স্বাভাবিক গড়)
console.log(averageResponseTime([100, 100, 200, 200])); // Expected: 150 (স্বাভাবিক গড়)
console.log(averageResponseTime([250])); // Expected: 250 (একটি উপাদান)
console.log(averageResponseTime([])); // Expected: "Invalid" (ফাঁকা অ্যারে)
console.log(averageResponseTime(["logs"])); // Expected: "Invalid" (অ্যারেতে স্ট্রিং)
console.log(averageResponseTime([120, "200", 150])); // Expected: "Invalid" (মাঝখানে স্ট্রিং নাম্বার)
console.log(averageResponseTime([100, null, 150])); // Expected: "Invalid" (মাঝখানে নাল)
console.log(averageResponseTime("120, 150")); // Expected: "Invalid" (অ্যারে নয়, স্ট্রিং)
console.log(averageResponseTime(150)); // Expected: "Invalid" (নাম্বার ইনপুট)
console.log(averageResponseTime([100, undefined, 200])); // Expected: "Invalid" (আনডিফাইন্ড উপাদান)
