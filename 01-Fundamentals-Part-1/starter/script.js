// let js = 'amazing';
// console.log(js);

// if (js === 'amazing') console.log('JavaScript is fun!');

// console.log(100 + 101);

// let firstName = 'Jonas'; // declare a variable

// console.log(firstName);

// let _3years = 3; // variables can only contain letters numbers underscore or the $ sign

// let role;
// console.log(role);

// Data types video
// console.log('***Data types video');
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);

// let, const, var video
// console.log('***let, const, var video');

// let age = 30;
// console.log(age);

// const emptyVariable;

// Operator precedence video
// console.log('***Operator precedence video');

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// MBI formula
// Mark and John are trying to compare their BMI (Body mass index)
// BMI = mass / height ** 2 = mass / (height * height);

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = Number((markMass / markHeight ** 2).toFixed(2));
// const johnBMI = Number((johnMass / johnHeight ** 2).toFixed(2));


// const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//   // console.log(`Mark's BMI is higher than John's!`);
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   // console.log(`John's BMI is higher than Marks's!`);
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// console.log(markHigherBMI);


// const firstName = 'John';
// const job = 'teacher';
// const birthYear = 1991;
// const currentYear = 2037;

// const john = 'I\'m ' + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
// console.log(john);

// const johnNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(johnNew);

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`He/she can drive! ❤🎉`);
// }


// Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 18);

// console.log(typeof Number('This is not a number'));

// console.log(typeof String(23));

// Type coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' * '10');
// console.log('23' > '18');

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(''));

// const money = 10;

// if (money) {
//   console.log('Don\'t spend it all!');
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;

// if (height) {
//   console.log(`Height is defined!`);
// } else {
//   console.log('Height is not defined!');
// }

// Equality operators
// const age = 18;

// if (age === 18) console.log('You just became an adult!🎉');

// const favoriteNumber = Number(prompt('What is you favorite number?'));

// if (isNaN(favoriteNumber)) {
//   console.log('Please reload and write a number!'); 
// } else {
//   console.log(`Your favorite number is ${favoriteNumber}.`);
// }
// console.log(favoriteNumber);

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive!`);
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// const dolphinsAverage = Number(((97 + 112 + 101) / 3).toFixed(2));
// const koalasAverage = Number(((109 + 95 + 106) / 3).toFixed(2));
// const minimumAverage = 100;

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumAverage) {
//   console.log(`The Dolphins won with an average of ${dolphinsAverage}.🏆`);
// } else if (dolphinsAverage === koalasAverage && koalasAverage >= minimumAverage) {
//   console.log(`Teams are tied with an average of ${koalasAverage}.`);
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumAverage) {
//   console.log(`The Koalas won with an average of ${koalasAverage}.🏆`);
// } else {
//   console.log(`No winners, the average for both teams is lower than 100.`);
// }

// // Switch statement

// const day = 'wednesday';

// switch(day) {
//   case 'monday':
//     console.log(`Plan my course structure.`);
//     console.log(`Go to coding meetup.`);
//     break;
//   case 'tuesday':
//     console.log(`Prepare theory videos.`);
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Write code examples.`);
//     break;
//   case 'friday':
//     console.log(`Record videos.`);
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`Enjoy the weekend.`);
//     break;
//   default:
//     console.log(`Not a valid day.`);
// }

// // If / else variant of the switch statement
// if (day === 'monday') {
//   console.log(`Plan my course structure.`);
//   console.log(`Go to coding meetup.`);
// } else if (day == 'tuesday') {
//   console.log(`Prepare theory videos.`);
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log(`Write code examples.`);
// } else if (day === 'friday') {
//   console.log(`Record videos.`);
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log(`Enjoy the weekend.`);
// } else {
//   console.log(`Not a valid day.`);
// }

// The ternary operator

// const age = 23;

// // age >= 18 ? console.log('You are allowed to drink wine 🍷.') : console.log('You are only allowed to drink water 💧.');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// // console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}.`);

// Challenge #4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? .15 : .2;

// console.log(`The bill was ${bill}, the tip was ${bill * tip} and the total value ${bill + bill * tip}.`);

