let apple: number = 5;
// in js: let apple = 5;
// apple = true; error: Type 'boolean' is not assignable to type 'number'.

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
// in js: let colors = ['red', 'green', 'blue'];
let myNumbers: number[] = [2, 6, 7, 10];

// classes
class Car { };
let car: Car = new Car()
/*
in js:
class Car {};
let car = new Car();
*/

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
/*
in js:
const logNumber = (i) => {
    console.log(i);
};
*/

// When to use Annotations:
// 1
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{ x: 10, y: 20 }
coordinates.fsdfdslanflasf; //with Any TS cann't couch propirty don't exist.

const coordinates2: { x: number, y: number } = JSON.parse(json);
console.log(coordinates2); //{ x: 10, y: 20 }
// coordinates2.fsdfdslanflasf; //this is an error

// 2
let words = ['book', 'computer', 'spon'];
let foundWord; //Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.
// let foundWord: boolean; // this is best
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'computer') {
    foundWord = true;
  }
}

// 3
let numbers = [-10, -1, 12];
let numberAboveZero = false;
// let numberAboveZero: boolean | number = false; //now its work.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // numberAboveZero = numbers[i]; //error: Type 'number' is not assignable to type 'boolean'.
  }
}