"use strict";

`underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
✅
`;

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, last] = row.toLowerCase().trim().split("_");
    const outPut = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${outPut.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
  }
});
