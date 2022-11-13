let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  //   if the dog is
  // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
  // humanAge = 16 + dogAge * 4
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adult = humanAges.filter((age) => age > 18);
  console.log(adult);

  const avg = adult.reduce((acc, curr) => acc + curr, 0) / adult.length;
  console.log(avg);
};
console.log("Data1");
calcAverageHumanAge(data1);
console.log("Data2");
calcAverageHumanAge(data2);
