/**
 * Part 1
 */

// Without functions

// let a = 5;
// let b = 10;

// let c = a + b;

// console.log('result = ', c);

// a = 6;
// b = 20;

// c = a + b;
// console.log('result = ', c);

// With Function

// function sum(number1, number2) {
//     const result = number1 + number2;
//     console.log('result = ', result);
// }

// let d = 6;
// let e = 10;

// sum(d, e);

// d = 56;
// e = 67;

// sum(d, e);
// sum(10, 56);

/**
 * Part 2
 */

// Using Global variables

// const username = 'Alexander';

// function sayHello() {
//     console.log('Hello', username);
// }

// sayHello();



// Using Local variables

// function usingLocalVars() {
//     const myName = 'Alexander';
//     console.log('Hello', myName);
// }

// usingLocalVars();
// console.log('Hello', myName);

// Without Default Values

// function sayHello(name, message) {
//     console.log(message, ",", name);
// } 

// sayHello('Alex', 'Hello');
// sayHello('Alex');

// With Default Values

// function sayHello(name, message = 'Hello') {
//     console.log(message, ",", name);
// } 

// sayHello('Alex');
// sayHello('Alex', 'Good Morning');


/**
 * Part 3
 */

/**
 * 4 options of functions:
 * 1: Doesn't get and return anything
 * 2: Gets parameters and doesn't return anything
 * 3: Gets and returns
 * 4: Doesn't get but returns 
 */

// 1: Doesn't get and return anything

// function sayHello() {
//     console.log("Hi everyone!")
// }

// sayHello()

// 2: Gets parameters and doesn't return anything

// function sayHello(name) {
//     console.log(`Hello ${name}!`)
// }

// sayHello('Alexander')

// 3: Gets and returns

// function calculateSum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// console.log(calculateSum(7, 8));
// const result = calculateSum(5, 6);
// console.log('result', result)


// 4: Doesn't get but returns 

// function getRandomNumber() {
//     return Math.round((Math.random()) * 1000);
// }

// const randomNumber = getRandomNumber();

// console.log('randomNumber', randomNumber);

// After return - the code is not executed

// function getMessage() {
//     console.log('Before Return');

//     return 'Hello World!';

//     console.log('After Return')
// }

// const message = getMessage();
// console.log('message', message)

//Just return 

// function printMessage() {
//     console.log('Before Return');

//     return;

//     console.log('After Return')
// }

// printMessage();

/**
 * Part 4
 */

// Arrow Function

// function sayHello(name) {
//     console.log("Hello", name)
// }

// const sayHi = (name) => {
//     console.log("Hi", name);
// }

// sayHello("Alex");
// sayHi("Alexander");

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(10 , 10));

/**
 * Part 5
 */

// CallBack Functions

const a = 15;
const b = 5;

const calculate = (number1, number2, action) => {
    console.log("Calculating...");

    action(number1, number2);
}

const addition = (num1, num2) => {
    console.log(num1 + num2)
}

const subtraction = (firstNum, secondNum) => {
    console.log(firstNum - secondNum);
}

calculate(a, b, addition)
calculate(a, b, subtraction)
//addition(a, b);












