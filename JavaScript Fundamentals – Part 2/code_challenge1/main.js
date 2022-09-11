//! ====================Code Challenge 1==================

let dolphinsAVGScore;
let koalsAVGScore;

const calcAverage = (score1, score2, scroe3) => (score1 + score2 + scroe3) / 3;

dolphinsAVGScore = calcAverage(40, 23, 71).toFixed(0);
koalsAVGScore = calcAverage(65, 54, 49).toFixed(0);
console.log(dolphinsAVGScore, koalsAVGScore);

let checkWinner = function (dolphinsAVGScore, koalsAVGScore) {
  if (dolphinsAVGScore >= 2 * koalsAVGScore) {
    console.log(`Dolphin team win ${dolphinsAVGScore} vs ${koalsAVGScore}`);
  } else if (koalsAVGScore >= 2 * dolphinsAVGScore) {
    console.log(`Koalas team win ${koalsAVGScore} vs ${dolphinsAVGScore}`);
  } else {
    console.log("No one win the trophy");
  }
};
checkWinner(dolphinsAVGScore, koalsAVGScore);

// dolphinsAVGScore = calcAverage(85, 54, 41);
// koalsAVGScore = calcAverage(23, 34, 27);
