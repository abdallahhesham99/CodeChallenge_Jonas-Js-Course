const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}

// Task 2
let avg = 0;
let odds = Object.values(game.odds);
console.log(odds);
for (const odd of odds) {
  console.log(odd);
  avg += odd;
}
avg /= odds.length;
console.log(avg);

// Task 3
for (let [team, odd] of Object.entries(game.odds)) {
  let teamStr = team == "x" ? (team = "draw") : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odd}`);
}

// Task 4
const scorers = {};

for (const player of game.scored) {
  
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
