//! ====================Code Challenge 2==================

let bills = [125, 555, 44];
let tips = [];
let total = [];
const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));
  total.push(bills[i] + tips[i]);
  console.log(
    `Bill Value ${bills[i]} Tip Value ${tips[i]} \n total = ${total[i]}`
  );
}
