//! ====================Code Challenge 3==================
let dolphinsAVGScore = (105 + 108 + 89) / 3;
let koalsAVGScore = (88 + 91 + 110) / 3;

// if (dolphinsAVGScore > koalsAVGScore && dolphinsAVGScore >= 100) {
//   console.log("Dolphins Win 🐬 🏆");
// } else if (koalsAVGScore > dolphinsAVGScore && koalsAVGScore >= 100) {
//   console.log("Koalas Win 🐨 🏆");
// } else if (
//   dolphinsAVGScore === koalsAVGScore &&
//   dolphinsAVGScore >= 100 &&
//   koalsAVGScore >= 100
// ) {
//   console.log("Both Win 🐬 🐨");
// } else {
//   console.log(`No one win the trophy cause the avg score higher than 100`);
// }

//==================== *** Another Solution *** ===========================

if (dolphinsAVGScore >= 100 || koalsAVGScore >= 100) {
  if (dolphinsAVGScore > koalsAVGScore) {
    console.log("Dolphins Win 🐬 🏆");
  } else if (koalsAVGScore > dolphinsAVGScore) {
    console.log("Koalas Win 🐨 🏆");
  } else if (koalsAVGScore === dolphinsAVGScore) {
    console.log("Both Win 🐬 🐨");
  }
} else {
  console.log(`No one win the trophy cause the avg score higher than 100`);
}
