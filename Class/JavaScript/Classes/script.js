console.log("Script running...");

// How can we express the object above as a class?
// class Car {
//   constructor(makeArg, modelArg, yearArg) {
//     // Every class has a constructor
//     // A constructor is the name given to the method that is ran by default upon class instantiation (i.e. when you use the class to create an object)
//     this.make = makeArg; // this.make refers to the objects own 'make' property
//     this.model = modelArg; // the word 'this' refers to the instance of the object itself after/while it is instantiated
//     this.year = yearArg;
//   }
//   displayInfo() {
//     // Functions that behave as a property of a class/object are referred to as methods
//     return `This car is of make ${this.make} and of model ${this.model} and of year ${this.year}`;
//   }
// }
// // const car = {
// //   make: "Koenigsegg",
// //   model: "Gemera",
// //   year: 2024,
// // };
// const car = new Car("Koenigsegg", "Gemera", 2024);
// const car2 = new Car("Ferrari", "Roma Spider", 2025);
// // console.log(car);
// console.log(car.displayInfo());
// console.log(car2.displayInfo());

// Parent Class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return `This vehicle is of make ${this.make} and of model ${this.model} and of year ${this.year}`;
  }
  startEngine() {
    return "Engine started!";
  }
}

// Sub-class (Child class)
class ElectricCar extends Vehicle {
  // The extends keyword means that this current class will inherit (i.e. have access to and can use) all the properties & methods of its parent class (note: vanilla javascript does NOT have access modifiers)
  constructor(make, model, year, batteryLife) {
    super(make, model, year); // equivalent to Parent.constructor() (i.e. Vehicle.constructor())
    this.batteryLife = batteryLife; // All the new properties we can set manually
  }
  chargeBattery() {
    if (this.batteryLife < 100) {
      console.log("Charging battery...⚡️");
      this.batteryLife += 10;
    } else {
      return "Battery is full!";
    }
  }
  displayBatteryLife() {
    return `Battery Life remaining: ${this.batteryLife} %`;
  }
}

const tesla = new ElectricCar("Tesla", "Roadster", 2024, 50);
console.log(tesla);

console.log(tesla.displayInfo());
console.log(tesla.startEngine());
console.log(tesla.displayBatteryLife());
tesla.chargeBattery();
tesla.chargeBattery();
tesla.chargeBattery();
tesla.chargeBattery();
console.log(tesla.displayBatteryLife());
tesla.chargeBattery();
console.log(tesla.chargeBattery());

class Motorcycle extends Vehicle {
  // NO Multiple Inheritance
  constructor(make, model, year, hasSidecar) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }
  doWheelie() {
    return "Doing a wheelie!";
  }
  checkSidecar() {
    if (this.hasSidecar == true) {
      return "Sidecar attached";
    } else {
      return "No sidecar attached";
    }
  }
}

const yamaha = new Motorcycle("Yamaha", "Supersport", "2024", false);
console.log(yamaha);
console.log(yamaha.doWheelie());
console.log(yamaha.checkSidecar());

