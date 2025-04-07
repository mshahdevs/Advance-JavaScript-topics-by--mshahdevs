//======= HIGHER-ORDER-FUNCTION =====//
//Definition : A function which take another function as an argument or returns a function from it which is known as Higher-Order-Function

//Example

function x() {
  console.log('Muhammad Shah');
}

function y(x) {
  x();
}

// y() functions takes another function (x function) as an argument in y function which is known as Higer order function , So y() function is higer-order-function
// and x() function is the callback here
//If you know more about Callback function then look at main directory of this Github repository

//Let's take another example of Higher-Order-function which is about Area of  circle

const radius = [3, 4, 4, 3, 5];

function calculateArea(radius) {
  //take an empty array for store values of area
  let output = [];
  //iterate values of radius array
  for (let i = 0; i < radius.length; i++) {
    // Use Area of circle formula
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  //take an empty array for store values of area
  let output = [];
  //iterate value of radius
  for (let i = 0; i < radius.length; i++) {
    // Use Circumference of circle formula
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculatDiameter = function (radius) {
  //take an empty array for store values of area
  let output = [];
  //iterate value of radius
  for (let i = 0; i < radius.length; i++) {
    // Use Diameter of circle formula
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculatDiameter(radius));

//there is you expect Repeating of code in above 3 functions for Area of Circle calculation
//then how would you avoid from repeatition of code
//Must follow => DRY principle
// The DRY principle, or "Don't Repeat Yourself," in software engineering emphasizes avoiding code duplication by ensuring that every piece of knowledge within a system has a single, unambiguous representation, promoting maintainability and reducing errors

// can we write it in Optimized Way? => "Yes"

//firstly write a logic function for area ,circumference and diameter

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

console.log(radius.map(area));
Array.prototype.calculate = (logic) => {
  //Polyfill for map function
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
const rad = radius.calculate(area);
console.log(rad);
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

//here's logic function used as an argument to pass in
