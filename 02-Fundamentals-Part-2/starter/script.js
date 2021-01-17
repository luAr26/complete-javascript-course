"use strict";

// console.log(`JavaScript fundamentals part 2.`);

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) console.log(`I can drive! 🏆`);

// const audioInterface = 'Audio';

// const privateVariable = 534;

// Functions

// function logger() {
//   console.log(`My name is Jonas.`);
// }

// // calling/running/invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(`${appleJuice}`);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(`${appleOrangeJuice}`);

// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(`${calcAge1(1985)}`);

// // function expression
// const calcAge2 = function(birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1985);
// console.log(`${age2}`);

// Arrow functions

// const calcAge3 = birthYear => 2021 - birthYear;
// console.log(`${calcAge3(1985)}`);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}!`;
// };

// console.log(`${yearsUntilRetirement(1985, 'John')}`);

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(`${fruitProcessor(2, 3)}`);

// const calcAge = function(birthYear) {
//   return 2021 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   const retirementString = retirement === 1 ? `${retirement} year` : `${retirement} years`;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirementString}!`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// };

// console.log(`${yearsUntilRetirement(1991, 'Jonas')}`);
// console.log(`${yearsUntilRetirement(1957, 'Mike')}`);

// Coding challenge #1

// const calcAverage = (x, y, z) => (x + y + z) / 3;
// const isDouble = (x, y) => x / y >= 2;

// const dolphinsAverage = calcAverage(85, 54, 41);
// const koalasAverage = calcAverage(123, 134, 127);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (isDouble(avgDolphins, avgKoalas)) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//   } else if (isDouble(avgKoalas, avgDolphins)) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
//   } else {
//     console.log(`No winner. Score Dolphins: ${avgDolphins}. Score Koalas: ${avgKoalas}.`);
//   }
// };

// checkWinner(dolphinsAverage, koalasAverage);

// // Introduction to arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// // console.log(`${friends[2]}`);
// // console.log(`${friends.length}`);
// // console.log(`${friends[friends.length - 1]}`);
// friends[2] = 'Jay';

// // console.log(`${friends}`);

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// // console.log(`${jonas}`);

// // Exercise
// const calcAge = function(birthYear) {
//   return 2021 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(`${calcAge(years[0])}`);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// // console.log(`${ages}`);

// // Add elements
// const newLength = friends.push('Raul');
// console.log(`${newLength}`);
// console.log(`${friends}`);

// friends.unshift('Alin');
// console.log(`${friends}`);

// // Remove elements
// console.log(`${friends.pop()}`);
// console.log(`${friends.shift()}`);

// console.log(`${friends.indexOf('Steven')}`);
// console.log(`${friends.includes('Raul')}`); // returns true of false

// Coding challenge #2
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(`${tips}`);
// console.log(`${totals}`);

// console.log(`${calcTip(100)}`);

// Introduction to objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2021 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// // Dot vs bracket notation

// console.log(`${jonas}`);
// console.log(`${jonas.lastName}`);
// console.log(`${jonas["lastName"]}`);

// const into = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );
// // console.log(into);
// jonas[into]
//   ? console.log(`${jonas[into]}`)
//   : console.log(`Please choose something from the list.`);
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// // Challenge
// // Jonas has 3 friends, and his best friend is called Michael.

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   // Challenge
//   getSummary: function () {
//     const age = this.calcAge();
//     const driversLicenseString = this.hasDriversLicense ? "a" : "no";
//     return `${this.firstName} is a ${age}-year old ${this.job} and he has ${driversLicenseString} driver's license.`;
//   },
// };

// jonas.calcAge();
// const age = jonas.age;
// console.log(`${age}`);
// console.log(jonas.getSummary());

// Coding challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = Number((this.mass / this.height ** 2).toFixed(2));
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = Number((this.mass / this.height ** 2).toFixed(2));
//     return this.BMI;
//   },
// };

// console.log(`${mark.calcBMI()}`);
// console.log(`${john.calcBMI()}`);

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}).`
//   );
// } else if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI}).`
//   );
// } else {
//   console.log(`${john.fullName} and ${mark.fullName} have the same BMI.`);
// }

// For loop

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️.`);
// }

// const friends = ["Michael", "Steven", "Peter"];
// const jonas = ["Jonas", "Smith", 2021 - 1991, "teacher", friends];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(`${jonas[i]}`);
// }

// for (let i = 0; i < jonas.length; i++) {
//   types.push(typeof jonas[i]);
// }

// console.log(`${types}`);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }

// console.log(`${ages}`);

// // continue and break
// console.log(`--- ONLY STRINGS ---`);
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(`${jonas[i]}, ${typeof jonas[i]}`);
// }

// console.log(`--- Everything until a number is found ---`);
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(`${jonas[i]}, ${typeof jonas[i]}`);
// }

// Looping backwards and loops in loops
// const friends = ["Michael", "Steven", "Peter"];
// const jonas = ["Jonas", "Smith", 2037 - 1991, "teacher", friends];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(`${i}, ${jonas[i]}`);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---- Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️.`);
//   }
// }

// The while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️.`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️.`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1; // generate a random number between 1 and 6
// console.log(`${dice}`);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}.`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is about to end...`);
//   }
// }

// Coding challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = tip + bills[i];
  tips.push(tip);
  totals.push(total);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`${calcAverage(totals)}`);
