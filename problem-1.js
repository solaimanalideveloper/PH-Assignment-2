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
