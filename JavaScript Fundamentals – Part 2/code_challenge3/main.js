//! ====================Code Challenge 3==================

const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const johnObj = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

if (markObj.calcBMI() > johnObj.calcBMI()) {
  console.log(
    `${markObj.fullName}'s BMI ${markObj.calcBMI().toFixed(2)} is higher than ${
      johnObj.fullName
    }'s BMI ${johnObj.calcBMI().toFixed(2)}`
  );
} else {
  console.log(
    `${johnObj.fullName}'s BMI ${johnObj.calcBMI().toFixed(2)} is higher than ${
      markObj.fullName
    }'s BMI ${markObj.calcBMI().toFixed(2)}`
  );
}
