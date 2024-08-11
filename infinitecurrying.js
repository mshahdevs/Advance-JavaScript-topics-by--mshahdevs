// Infinite currying in JavaScript

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return (...moreArgs) => curried(...args, ...moreArgs);
//     }
//   };
// }

// Example usage:

function add(a) {
  return function (b){
    return function(){
        return a + b ;
    };
  };
}

console.log(add(3)(4)());

