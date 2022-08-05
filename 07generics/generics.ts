/*              *                 *                Generics with classes                  *                 *               */
class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  };
}

class ArrayOfStrings {
  constructor(public collection: string) { }

  get(index: number): string {
    return this.collection[index];
  };
}

// Generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  };
}

const arr = new ArrayOfAnything<string>(['one', 'tow', 'three']);
// we can write it without <> :
const arr2 = new ArrayOfAnything([1, 2, 3, 4]);


/*              *                 *                Generics with functions                  *                 *               */
function printStrings(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}
function printNumbers(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}
// Generic function
function printAnything<T>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

printAnything<string>(['book', 'computer', 'coffee']);
// we can write it without <> :
printAnything([1, 2, 3, 4, 5]);


/*              *                 *                Generic Constrints                  *                 *               */
class Car {
  print() {
    console.log('I am a car!');
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();

  }
}
/* - Generic constraints allow us to describe the “minimum requirement” for a type param, such that we can achieve a
high degree of flexibility, while still being able to safely assume some minimal structure and behavior.
- When a class extends from a base class, it’s guaranteed to at least align with the base class structure.
In the same way, T extends HasId guarantees that “T is at least a HasId”.
*/