/* ASSIGNMENTS */

// let country, continent, population;
// country = 'Brazil';
// continent = 'South America';
// population = '211,1 million';

// console.log(country);
// console.log(continent);
// console.log(population);
/*
const firstName = 'Fernandes';
const job = 'frontend developer';
const birthYear = 2015;
const year = 2025;
const age = year - birthYear;

const aboutMe = `I'm ${firstName}, a ${age} old ${job}.`;
console.log(aboutMe);

const multipleLines = `Testando
se 
isso
funciona`;

console.log(multipleLines);

if (age >= 18) {
  console.log(`${firstName} can start driving license!`);
} else {
  console.log(
    `${firstName}, you need to wait for ${
      18 - age
    } years to start driving license!`
  );
}

// Type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Fernandes'));
console.log(typeof NaN);

console.log(String(23), 23);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense || !hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

console.log(shouldDrive);
 */

/* const day = 'sunday';

switch (
  day // day === 'monday' (strict mode)
) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;

  case 'tuesday':
    console.log('Prepare theory videos');
    break;

  case 'wednesday': // Execute both at the same time
  case 'thursday':
    console.log('Write code examples');
    break;

  case 'friday':
    console.log('Record videos');
    break;

  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend 😎`);
    break;

  default:
    console.log('Not a valid day');

    break;
}
 */

const age = 17;

// age >= 18
//   ? console.log(`I like to drink wine.`)
//   : console.log(`I like to drink water.`);

const drink = age >= 18 ? 'wine.' : 'water.';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine.' : 'water.'}`);
