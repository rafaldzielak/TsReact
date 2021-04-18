import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";

// Interfaces:
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "rafa",
  age: 25,
  speak: (text): void => console.log(text),

  spend(num: number) {
    console.log(num);
    return num;
  },
  // skills: [], //does not work
};
console.log(me);

const greetPerson = (person: IsPerson) => console.log("hello", person.name);
greetPerson(me);

let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice("rafa", "work", 25);
docTwo = new Payment("jan", "wokrs", 200);

//

const invOne = new Invoice("rafa", "work", 250);
const invTwo = new Invoice("jan", "works", 150);

let docs: HasFormatter[] = [];
docs.push(invOne);
docs.push(invTwo);
console.log(docs);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format())); //inv.details is not available here

class Invoice2 {
  constructor(readonly client: string, private details: string, public amount: number) {} //works only with access modifiers
  // constructor(client: string, details: string, amount: number) {} // does not work
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
//

const anchor = document.querySelector("a")!; // ! means that developer knows it will be there

console.log(anchor.href);

// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form")! as HTMLFormElement;
console.log(form.children);

// inputs

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  else doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  console.log(doc);
  list.render(doc, type.value, "end");
});


// Generics:
