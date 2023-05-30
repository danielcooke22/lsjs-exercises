let readLineSync = require("readline-sync");
let firstName = readLineSync.question("What is your first name? ");
let secondName = readLineSync.question("What is your last name? ");
console.log(`Hello, ${firstName} ${secondName}!`);