const Julia1 = [3, 5, 2, 12, 7];
const Kate1 = [4, 1, 15, 8, 3];

const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  const allDogs = dogsJulia.slice(1, -2).concat(dogsKate);
  allDogs.forEach((dog, i) => {
    const str =
      dog >= 3
        ? console.log(`Dog Number ${i + 1} is adult`)
        : console.log(`Dog Number ${i + 1} is puppy`);
  });
  console.log(allDogs);
}

checkDogs(Julia1, Kate1);
