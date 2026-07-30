function matchWinner(teamAGoals, teamBGoals) {
  let integerValureA = teamAGoals < 0 || typeof teamAGoals !== "number";
  let integerValureB = teamBGoals < 0 || typeof teamBGoals !== "number";
  let integerValureAB = integerValureA || integerValureB;

  if (integerValureAB) {
    return "Invalid";
  } else if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else {
    return "Draw";
  }
}
console.log(matchWinner(4, null));
console.log(matchWinner(3, 2)); // Expected: "Team A Won" (স্বাভাবিক জয়)
console.log(matchWinner(1, 5)); // Expected: "Team B Won" (স্বাভাবিক জয়)
console.log(matchWinner(2, 2)); // Expected: "Draw" (ড্র ম্যাচ)
console.log(matchWinner(0, 0)); // Expected: "Draw" (কোনো গোল হয়নি)
console.log(matchWinner(-1, 3)); // Expected: "Invalid" (নেগেটিভ গোল)
console.log(matchWinner(4, -2)); // Expected: "Invalid" (নেগেティブ গোল)
console.log(matchWinner("3", 2)); // Expected: "Invalid" (স্ট্রিং ইনপুট)
console.log(matchWinner(2, "5")); // Expected: "Invalid" (স্ট্রিং ইনপুট)
console.log(matchWinner(null, 2)); // Expected: "Invalid" (নাল ইনপুট)
console.log(matchWinner(3)); // Expected: "Invalid" (একটি ইনপুট অনুপস্থিত)

// function matchWinner(teamAGoals, teamBGoals) {

//     let integerValueA = !Number.isInteger(teamAGoals) || teamAGoals < 0
//     let integerValueB = !Number.isInteger(teamBGoals) || teamBGoals < 0
//     let integerValueAB = integerValueA || integerValueB

//     if (integerValueAB) {
//         return "Invalid"
//     }

//     else if (teamAGoals > teamBGoals) {
//         return "Team A Won";
//     }
//     else if (teamAGoals < teamBGoals) {
//         return "Team B Won";

//     } else {
//         return "Draw";
//     }
// }
