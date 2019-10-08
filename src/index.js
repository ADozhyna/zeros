module.exports = function zeros(expression) {
  let factorials = expression.split("*");
  let doubleFact = [];
  let onceFact = [];

  let fives = 0;
  let deuces = 0;
  for (let i = 0; i < factorials.length; i++) {
    if (factorials[i].includes("!!")) {
      doubleFact.push(factorials[i].slice(0, -2));
    } else {
      onceFact.push(factorials[i].slice(0, -1));
    }
  }

  for (let i = 0; i < onceFact.length; i++) {
    let number = onceFact[i];
    for (let j = 5; j <= number; j *= 5) {
      fives += Math.floor(number / j);
    }

    for (let j = 2; j <= number; j *= 2) {
      deuces += Math.floor(number / j);
    }
  }

  for (let i = 0; i < doubleFact.length; i++) {
    number = doubleFact[i];
    for (let j = 5; j <= number; j *= 5) {
      if (number % 2 !== 0) {
        fives += Math.ceil(Math.floor(number / j) / 2);
      } else {
        fives += Math.floor(Math.floor(number / j) / 2);
      }
    }
    for (let j = 2; j <= number; j *= 2) {
      if (number % 2 == 0) {
        deuces += Math.floor(number / 2);
      } else {
        deuces += 0;
      }
    }
  }
  return fives > deuces ? deuces : fives;
};
