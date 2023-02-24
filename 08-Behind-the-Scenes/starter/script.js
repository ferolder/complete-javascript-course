'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You're a millenial, ${firstName}!`;
      // console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Fernandes';
calcAge(1993);

// console.log(age); // Not accessible
// printAge(); // Not accessible

/* let age = 29;
let oldAge = age;
age = 30;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Fernandes',
  age: 29,
};

const friend = me;
friend.age = 20;

console.log('Friend:', friend);
console.log('Me:', me); */

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
