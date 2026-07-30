function calculateAiCost(tokensUsed) {
  if (tokensUsed < 0 || (typeof (tokensUsed) !== "number")) {
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
