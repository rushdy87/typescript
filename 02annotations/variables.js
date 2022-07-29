var apple = 5;
// in js: let apple = 5;
// apple = true; error: Type 'boolean' is not assignable to type 'number'.
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in Objects
var now = new Date();
// Array
var colors = ['red', 'green', 'blue'];
// in js: let colors = ['red', 'green', 'blue'];
var myNumbers = [2, 6, 7, 10];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
;
var car = new Car();
/*
in js:
class Car {};
let car = new Car();
*/
// Object literal
var point = {
    x: 10,
    y: 20
};
// Functions
var logNumber = function (i) {
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
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
