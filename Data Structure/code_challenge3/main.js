const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 1
//Solution 1
// const events = new Set();
// for (const [key, value] of gameEvents) {
//   events.add(value);
// }
// console.log(events);

//Solution 2
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
gameEvents.delete(64);
console.log("=================================");

// Task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
console.log("=================================");
// Task 4
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECONED";
  console.log(`[${half} HALF] ${key} : ${value}`);
}
