console.log("Script is running...");

// let nums = [1, 2, 3, 4, 5];

// The for loop takes 3 expressions:
// 1: The counting/reference variable
// 2: The condition with whic the loop will terminate
// 3: The update to the counting/reference variable
// for (let i = 0; i < nums.length; i++) {
// A for loop means that we want to repeatedly execute the block of code inside the loop an arbitrary number of times
//   nums[i] += 5;
// }

// Array Iterator Methods will iterate over every element in the array and perform whichever operation you instruct it to do

let lettersList = ["a", "b", "c", "d", "e"];

// The forEach() is an open-ended array iterator method -> YOU define what you want to do to the elements. NOTE: the forEach method has NO return value
// lettersList.forEach((letter, indexOfLetter, wholeLettersList) => {
//   console.log(`The element at index ${indexOfLetter} is ${letter}`);
// });

// The map() is an open-ended array iterator method -> YOU define what you want to do with the elements. NOTE: the map method will return a new array
// let newLettersList = lettersList.map((l, i, arr) => {
//   return l + l;
// });

// console.log(newLettersList);

const expenses = [
  { name: "Alice", amount: 45.75 },
  { name: "Bob", amount: 60.0 },
  { name: "Charlie", amount: 35.5 },
  { name: "Dave", amount: 50.0 },
  { name: "Eve", amount: 41.25 },
];

// forEach: Display each expense
// expenses.forEach(function (expense) {
//   console.log(`${expense.name}: ${expense.amount}`);
// });

// map: Convert each expense to a different currency
// const exchangeRate = 0.68;
// const expenseInEuros = expenses.map((expense) => {
//   return {
//     name: expense.name,
//     amount: `${expense.amount * exchangeRate} €`,
//   };
// });
// console.log(expenseInEuros);

if (0) console.log("true!");

// Falsy Values: undefined, 0, NaN, null, false etc.
// filter: Find expense more than $50
// const highExpenses = expenses.filter((ex) => ex.amount > 50);
// console.log(highExpenses);

// reduce: Calculate total expenses
// const totalExpenses = expenses.reduce(
//   (total, expense) => total + expense.amount,
//   0
// );
// console.log(totalExpenses);

// find: Find the first person whose expense is exactly 50
// const exactExpense = expenses.find((expense) => expense.amount == 50); // arrow fn with no curly brackets => implicit return
// console.log(exactExpense);

// some: Check if any expense is above $100
// const hasLargeExpense = expenses.some(function (expense) {
//   return expense.amount > 100; // explicit return
// });
// console.log(hasLargeExpense);

// every: Check if all expense are below $100
// const allBelowHundred = expenses.every((ex) => ex.amount < 100);
// console.log(allBelowHundred);

// const sortedExpense = expenses.sort((a, b) => a.amount - b.amount);
// console.log(sortedExpense);