function getNumber(prompt) {
    let rlSync = require('readline-sync');
    return parseFloat(rlSync.question(prompt));
}

function multiply(a, b) {
    return a * b
}
let first = getNumber('enter the first number ');
let second = getNumber('enter the second number ');
console.log(`${first} * ${second} = ${multiply(first, second)}`);
