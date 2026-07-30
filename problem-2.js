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
    }
    else {
        return "Invalid";
    }
}console.log(isElevatorSafe([50, 40, 50, 600]));
console.log(isElevatorSafe({ weight: 60 }));
console.log(isElevatorSafe(undefined));

