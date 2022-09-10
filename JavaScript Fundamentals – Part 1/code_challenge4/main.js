//! ====================Code Challenge 4==================

// const bill = 40;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`);

// ===================== *** Another Solution *** ===================

const bills = [275, 40, 430];

bills.forEach((el, i) => {
  let tip = el >= 50 && el <= 300 ? el * 0.15 : el * 0.2;
  let billWithTip = el >= 50 && el <= 300 ? el * 1.15 : el * 1.2;

  console.log(
    `The bill was ${el}, the tip was ${tip}, and the total value ${billWithTip}`
  );
});
