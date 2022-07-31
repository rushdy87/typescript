const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40]; //it's array. we can swap elements, add, remove...
const cocaCola: [string, boolean, number] = ['brown', true, 40]; //now its tuple.
// cocaCola[0] = 59; //error: Type 'number' is not assignable to type 'string'.
// we can write a code above like this:
type Drink = [string, boolean, number]; // Type alies
const sprite: Drink = ['white', true, 35];
const coffee: Drink = ['black', false, 0];
///////
const carSpace: [number, number] = [400, 3354];
const carSpase2 = {
  horsPower: 400,
  weight: 3354
};
// lines(16 - 19) with tuple it's hard to know what data represent. with object it's clear.