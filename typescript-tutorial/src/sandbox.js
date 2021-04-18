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
