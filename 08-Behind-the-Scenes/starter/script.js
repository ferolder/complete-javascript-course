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

// Hoisting
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Fernandes';
let job = 'Developer';
const year = 1993;

console.log(addDecl(1, 2));
// console.log(addExpr(5, 5));
// console.log(addArrow(10, 5));

// Functions
function addDecl(a, b) {
  return a + b;
}

/* const addExpr = function (a, b) {
  return a + b;
}; */

// const addArrow = (a, b) => a + b;

console.log(this);
