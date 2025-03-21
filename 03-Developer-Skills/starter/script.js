// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) understanding the problem
// what is forecasted maximum temperatures? the array received as parameter in the printForecast function

// 2) breaking
// get the number in the array in position i, and return it and its position.
// This function would return: "... temp in i days ..."

const printForecast = function (temps) {
  let str = ``;
  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}ºC in ${i + 1} days ... `;
  }
  return `... ${str}`;
};

let test1 = [17, 21, 23];
let test2 = [12, 5, -5, 0, 4];

console.log(printForecast(test1));
console.log(printForecast(test2));
