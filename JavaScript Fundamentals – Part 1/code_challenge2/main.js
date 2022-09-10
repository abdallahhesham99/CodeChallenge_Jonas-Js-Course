//! ====================Code Challenge 2==================
// let mark_mass = 95;
// let mark_height = 1.88;
// let john_mass = 85;
// let john_height = 1.76;
// ============================
let markBMI = 78 / 1.69 ** 2;
let johnBMI = 92 / 1.95 ** 2;
if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI ${markBMI.toFixed(
      2
    )} is higher than John's BMI ${johnBMI.toFixed(2)}`
  );
} else {
  console.log(
    `John's BMI ${johnBMI.toFixed(
      2
    )} is higher than Mark's BMI ${markBMI.toFixed(2)}`
  );
}
