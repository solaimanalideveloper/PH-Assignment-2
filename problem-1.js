function matchWinner(teamAGoals, teamBGoals) {
  let integerValureA = !Number.isInteger(teamAGoals) || teamAGoals < 0;
  let integerValureB = !Number.isInteger(teamBGoals) || teamBGoals < 0;
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
console.log(matchWinner(4,6))