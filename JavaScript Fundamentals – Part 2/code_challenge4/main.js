//! ====================Code Challenge 4==================

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
  console.log(
    `Bill ${i + 1} ➡ ${bills[i]}$ tip ${tips[i]} total = ${total[i]}\n`
  );
}

function calcAVG(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

calcAVG(total);
