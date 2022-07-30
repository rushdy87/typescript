const add = (a: number, b: number): number => {
  return a + b;
  // return "the sumation is: "+ a + b; //error
};

const subtract = (a: number, b: number) => {
  // a - b; // const subtract: (a: number, b: number) => void
  return a - b; //const subtract: (a: number, b: number) => number
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return message; // error Type 'string' is not assignable to type 'void'.
};

const throwErorr = (message: string): never => {
  throw new Error(message); //const throwErorr: (message: string) => never
};
/*
TypeScript introduced a new type never, which indicates the values that will never occur.
The void type can have undefined or null as a value where as never cannot have any value.
let something: void = null;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
*/
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
const logWeather = (forcast: { date: Date, weather: string }): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
}
// ES2015
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);