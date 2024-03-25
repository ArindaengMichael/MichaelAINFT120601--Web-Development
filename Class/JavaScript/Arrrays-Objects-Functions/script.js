console.log("JavaScript is running...");

// ------------ Arrays ------------

// let mixArray = [10, "A string", [2, 3, 4], { myKey: "myValue" }, true];

// console.log(mixArray);

// console.log(mixArray[0]); // Returns the element at index 0 from the array
// mixArray.push("Dinosaur"); // the Array.push() method will append a new element to the array

// console.log(mixArray);

// // console.log(mixArray.slice(0, 3)); // Slice will return a section of the array from the startIndex to the endIndex ex. index 0 to 3

// mixArray.pop(); // Array.pop() will remove the last element in the array

// console.log(mixArray);

// mixArray.shift();

// console.log(mixArray); // Array.shift() will remove the first element in the array

// mixArray.unshift(200); // Array.unshift(arg) will add a new element at the beginning of the Array (index 0)

// console.log(mixArray);

// console.log(mixArray.length); // Array.length will return the length of the array.

// console.log(mixArray[mixArray.length - 1]); // Will return the last element in the array

// console.log(mixArray.reverse()); // Array.reverse() will reverse the order of the elements in the array

// console.log(mixArray);

// let copyOfMixArray = [...mixArray]; // the spread (...) operator will copy with contents of an iterable object (ex. arrays, objects, strings)

// console.log(mixArray.includes(10)); // will return TRUE

// ------------ Objects ------------

// let car = {
//   type: "Supercar", // type => KEY, Supercar -> Value
//   brand: "Bugatti", // These are Key-Value pairs
//   year: 2016,
//   color: "White",
//   subCar: { color: "red" }, // Object Nesting
//   numsArray: [1, 2, 3],
//   // A function can be included as a property in an object, and it is formally referred to as a method
//   greeting: () => console.log("Hello world!"),
//   updateColor: (colorArg) => (car.color = colorArg),
// };

// let key = "type";
// console.log(car["type"]); // Returns value of the "Type" key inside the car object
// console.log(car[key]); // Returns value of the "Type" key inside the car object
// console.log(car.type); // Returns value of the "Type" key inside the car object
// console.log(car.subCar.color); // Returns value of the "subCar" key inside the car object, and then the value of the "color"  key inside that one
// console.log(car["subCar"]["color"]); // Returns value of the "subCar" key inside the car object, and then the value of the "color"  key inside that one
// console.log(Object.keys(car)); // Returns an array of all the keys in the object car
// console.log(Object.values(car)); // Returns an array of all the values in the object car
// console.log(Object.entries(car)); // Returns an array of arrays that include both the key and the value for each entry
// car.greeting(); // This will invoke the greeting method from the car object

// console.log(car.color);
// car.updateColor("blue");
// console.log(car.color);

// ------------ Functions ------------

//Function Declaration
//We want to create a funcion that will take 2 numbers as inputs, and return the sum of those numbers
/* function sum(a,b) { //a and b are out inputs
    debugger;
    console.log(a + b)
    let sum = a + b
    return sum //returns the value of the sum vriable to the caller
}

let sumOfFourAndTwo = sum(4, 2);
console.log(sumOfFourAndTwo + 10); */


// console.log(sumDec(3,4));
// console.log(sumEx(6,4));
// console.log(sumArr(10,4));
// // Function Declaration
// function sumDec(a, b){
//     return a + b
// }

// // Fuction Expression
// const sumEx = function (a, b){
//     return a + b;

// };

//Arrow Fuction
// const sumArr = (a, b) => a + b; // Implicit Returns

// let nums = [1,2,3,4,5,6,7,8,9]
// let evanNumbers = nums.filter((num) => num % 2 == 0);
// console.log(evenNumbers);

// Scope refers to the visibility 







// Closures 

// function func1(a, b){

//     function func2(c) {
//         console.log(a,b,c);
//         return c
//     }
//     func2(10)
//     console.log(c);
// }

// func1(2, 4);

// Example

// function vendingMachine() {
//     // Inventory
//     let inventory = {
//         'S1': { item: "Coca-Cola", count: 5 },
//         'C1': {item: "Ruffles", count: 3},
//         'S2': { item: "RootBeer", count: 4},
//         'C1': {item: "Lays", count: 25},
//     };

//     //Fuction to check
//     function dispenseItem(code, callbackFn){
//         //Check invintory inclues request
//         if (inventory[code] && inventory[code].count > 0) {
//             inventory[code].count--;
//             callbackFn()
//         }else{
//             callbackFn();
//         }
//             return{
//                 selectItem: function (code, callback){
//                     dispenseItem(code, callback);
//                 },
//                 inventoryStatus: function () {
//                     return inventory;
//                 }
//             }
//         }
//     }


// function handleResponse(err, result){
//     if (err){
//         console.log(err);

//     }else{
//         console.log(result);
//     }
// }

//     const machine = vendingMachine();
//     console.log(machine);

//     machine.selectItem('S1', handleResponse)


function sumToTen(a, sum){
    if (sum >= 10) return sum;
    sum += a
    return sumToTen (a + 1, sum)
}

console.log(sumToTen(1, 0));