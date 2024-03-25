console.log("My script is running...");

// Declare a variable, and store inside it a string

// Old Regular Declaration
// var myString = "Var: Intro to JavaScript";
// Regular Declaration
// let myString2 = "Let: Intro to JavaScript";
// With const, you cannot change the initial value of the variable
// const myString3 = "Const: Intro to JavaScript";
// The line below will give us an error!
// myString3 = "Something else";

// myString4 = ":Intro to JavaScript";
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.length);
// console.log(myString[0]); // Will return the first letter of the string because strings are iterable objects in JavaScript
// console.log(myString.replaceAll("a", "e")); // replaces all the letters 'a' with an 'e'
// console.log(myString2);
// console.log(myString3);

// let a = 5;
// let b = 10;
// // Mathematical Operators
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);
// console.log(Math.sqrt(a + b));
// console.log(Math.max(a, b));

// let c = 5;
// let d = "5";
// // Relational Operators
// console.log(c == d); // returns TRUE
// console.log(c === d); // returns FALSE
// console.log(a != b); // returns TRUE
// console.log(a < b); // return TRUE
// console.log(a > b); // return FALSE

// console.log(a < b || c < d); // return true
// console.log(a < b && c < d); // false

// let e = "2";
// let f = "5";

// console.log(e.concat(f));
// console.log(parseInt(e) + parseInt(f));

// IF ELSE Conditionals

// let firstNumber = prompt("Please choose your first number:");
// let operand = prompt(
//   "Please choose an operand from the following: '+', '-', '/', '*'"
// );
// let secondNumber = prompt("Please choose your second number:");
// console.log(firstNumber, secondNumber, operand);
// let result;

// Calculator using If/Else
// if (operand == "+") {
//   result = firstNumber + secondNumber;
// } else if (operand == "-") {
//   result = firstNumber - secondNumber;
// } else if (operand == "/") {
//   result = firstNumber / secondNumber;
// } else if (operand == "*") {
//   result = firstNumber * secondNumber;
// }

// Calculator using Switch statement
// switch (operand) {
//   case "+":
//     result = firstNumber + secondNumber;
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     break;
//   case "/":
//     result = firstNumber / secondNumber;
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     break;
// }

// alert(`The calculated result is: ${result}`);

// Loops
// for (let i = 0; i < 10; i += 3) {
//     // 0, 3, 6, 9
//     for (let j = 0; j < 10; j += 3) {
//         // 0, 3, 6 , 9
//         console.log(i, j);
//         // This inner loop will run 16 times
//     }
// }
// let numOfLoops = prompt("How many loops should I do?");
// // 0 < -10 ---> FALSE
// if (numOfLoops < 0) {
//     // 0 > -10 ---> TRUE
//     for (let i = 0; i > numOfLoops; i--) {
//         console.log(i);
//     }
// } else {
//     for (let i = 0; i < numOfLoops; i++) {
//         console.log(i);
//     }
// }

let myString = "Dinosaurs are species that used to live on earth";

for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// Array
// let myArray = ["string", 123, [1, 2], {}, () => { }]