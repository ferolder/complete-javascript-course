'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You're a millenial, ${firstName}!`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Fernandes';
calcAge(1993);

// console.log(age); // Not accessible
// printAge(); // Not accessible
