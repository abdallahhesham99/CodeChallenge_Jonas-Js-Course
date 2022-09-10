//! ====================Code Challenge 1==================
let markBMI = 78 / 1.69 ** 2;
let johnBMI = 92 / 1.95 ** 2;
console.log(`Mark's BMI is ${markBMI.toFixed(2)}`);
console.log(`John's BMI is ${johnBMI.toFixed(2)}`);

//======== ***Another Solution ***=======================
console.log("====*** Another Solution ***====");

let mark_mass = 95;
let mark_height = 1.88;
let john_mass = 85;
let john_height = 1.76;

function clac_BMI(mass, height) {
  let BMI = mass / height ** 2;
  return BMI.toFixed(2);
}
let mark_BMI = clac_BMI(mark_mass, mark_height);
console.log(`Mark's BMI is ${mark_BMI}`);
let john_BMI = clac_BMI(john_mass, john_height);
console.log(`John's BMI is ${john_BMI}`);
// ========================================================
console.log("====*** Your BMI ***====");

//! Calculate your BMI
let userWeight = Number(prompt("Enter you weight"));
let userHeight = Number(prompt("Enter you height"));

function calcBMI(weight, height) {
  let BMI = weight / height ** 2;
  console.log(BMI.toFixed(2));
}
calcBMI(userWeight, userHeight);
