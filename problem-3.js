function calculateAiCost(tokensUsed) {
  if (tokensUsed < 0 || typeof tokensUsed !== "number") {
    return "Invalid";
  } else if (tokensUsed >= 500) {
    let dailyFixToken = tokensUsed - 500;
    let percentageTokenUsage = dailyFixToken / 100;
    let integerNumber = Math.floor(percentageTokenUsage);
    let additionalCharges = integerNumber * 5;
    return additionalCharges;
  }
  return 0;
}
console.log(calculateAiCost(800));
console.log(calculateAiCost(350)); // Expected: 0 (৫০০ এর নিচে ফ্রি)
console.log(calculateAiCost(500)); // Expected: 0 (ঠিক ৫০০ টোকেন ফ্রি)
console.log(calculateAiCost(600)); // Expected: 5 (১০০ অতিরিক্ত টোকেন)
console.log(calculateAiCost(650)); // Expected: 5 (১৫০ অতিরিক্ত টোকেন, কিন্তু পুরো ২০০ হয়নি)
console.log(calculateAiCost(700)); // Expected: 10 (২০০ অতিরিক্ত টোকেন)
console.log(calculateAiCost(1050)); // Expected: 27 (৫৫০ অতিরিক্ত টোকেন)
console.log(calculateAiCost(0)); // Expected: 0 (টোকেন ব্যবহার হয়নি)
console.log(calculateAiCost(-100)); // Expected: "Invalid" (নেগেটিভ টোকেন)
console.log(calculateAiCost("600")); // Expected: "Invalid" (স্ট্রিং ইনপুট)
console.log(calculateAiCost(true)); // Expected: "Invalid" (বুলিয়ান ইনপুট)
