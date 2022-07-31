const carMAkers = ['Ford', 'Toyota', 'BMW']; //const carMAkers: string[]
// const carMAkers:[] = ['Ford', 'Toyota', 'BMW'];
const carMAkers2 = []; //const carMAkers2: never[],
// in this case we need to use Type Annotation, (carMAkers3)
const carMAkers3: string[] = [];
////////////
const dates = [new Date(), new Date()]; //const dates: Date[]
///////////
const carsByMAke = [ //const carsByMAke: string[][]
  ['Bronco', 'F-150', 'Shelby GT500'],
  ['Corolla', 'Land Cruiser'],
  ['X7']
];
const carsByMAke2: string[][] = [];
// /////
// Help with infreencs when extracting values
const myCar = carMAkers[0]; //const myCar: string
const myCar2 = carMAkers.pop(); //const myCar2: string | undefined
// prevent incompatible values
// carMAkers.push(100); //error: Argument of type 'number' is not assignable to parameter of type 'string'
//  help with map
carMAkers.map((car: string): string => {
  return car.toUpperCase();
});
// Flexible Types
const importantDates = [new Date(), 'May 5, 1789']; //const importantDates: (string | Date)[]
const importantDates2: (string | Date)[] = [];
importantDates2.push('May 5, 1789');
importantDates2.push(new Date());
//  importantDates2.push(2022); // error: Argument of type 'number' is not assignable to parameter of type 'string | Date'
