//! ====================Code Challenge 1==================
let data1 = [17, 21, 23];

let data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str='';
//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}ºC in ${i + 1} days ...`;
//   }
//   console.log(str);
// };

// printForecast(data2);

//! ========================Another Solution==================
const printForecast = function (arr) {
  arr.forEach((data, i) => {
    console.log(`... ${data}ºC in ${i + 1} days ...`);
  });
};

printForecast(data2);
