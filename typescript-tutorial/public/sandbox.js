"use strict";
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => console.log(input));
// // Arrays
// let names = ["rafa", "jan", "dzban"];
// names.push("icek");
// // names = 'asdasd' //does not work
// // names.push(5); //does not work
// let mixed = ["rafa", 5, true];
// mixed.push(1); //works
// mixed.push("icek"); //works
// // Objects
// let ninja = { name: "rafa", belt: "grey", age: 25 };
// ninja.age = 30; //works
// // ninja.age = "30"; //does not work
// // ninja.skills = ['fighting'] //does not work
// // ninja = []; //does not work
// // ninja = { name: "jan", belt: "white" }; //does not work, miising age
// ninja = { name: "jan", belt: "white", age: 45 }; //works
// // Explicit types
// let character: string;
// let age: number;
// // //Arrays:
// let ninjas: string[];
// // ninjas.push("rafa"); //does not show error here, but ninjas is undefined at the beginning
// ninjas = ["rafa", "jan"];
// // //Union types:
// let mixed: (string | number)[] = [];
// mixed.push(1);
// mixed.push("rafa");
// // mixed.push(true); //does not work
// let id: string | number;
// id = "123";
// id = 123;
// // //Objects:
// let ninjaOne: object;
// ninjaOne = { name: "rafa", age: 30, belt: "grey" };
// ninjaOne = []; //works because array is a type of object
// let ninjaTwo: { name: string; age: number };
// ninjaTwo = { name: "rafa", age: 30 };
//Any type
// let age: any;
// age = true;
// age = 25;
// age = "25";
// age = {};
// age = [];
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("5");
// let ninja: { name: any; age: any };
// ninja = { name: "rafa", age: "25" };
// ninja = { name: {}, age: [] };
// // Functions
// let func: Function;
// let greet = () => {
//   console.log("hello");
// };
// // greet = "hello"; //does not work
// // // ? for optional
// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(c); //undefined
// };
// //for default values "?" is prohibited
// const add2 = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c); //undefined
// };
// const minus = (a: number, b: number) => a - b;
// const minus2 = (a: number, b: number): number => a - b;
// let result = minus(10, 7); //result is the type of return value of minus
// type StringOrNum = string | number;
// type objWithName = { name: string; id: StringOrNum };
// const logDetauls = (id: StringOrNum, item: string) => {
//   console.log(`${item} has a id of ${id}`);
// };
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };
// Function signatures
// // example 1
let greet;
greet = (name, greeting) => console.log(`${name} says: ${greeting}`);
greet = (name, greeting) => console.log(`${name} says: ${greeting}`);
// // example 2:
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add")
        return numOne + numTwo;
    return numOne - numTwo;
};
// let logDetails: (obj: { name: string, age: number }) => void
let logDetails;
logDetails = (ninja) => console.log(ninja.name);
