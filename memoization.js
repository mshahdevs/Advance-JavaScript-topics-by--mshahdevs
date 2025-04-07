//What is Implementing Memorization in JavaScript

//Memorization is an optimization technique that can be used to reduce time-consuming
// calculations by saving previous input to something called cache and returning  the resulting from it.


let sum = 0;
const calc = (n) => {
    for(let i = 0; i <= n; i++) {
    console.log(`${sum} + ${i}= ${sum+i} n= ${n}`);
     sum += 1;
    }
    return sum;
};

const memorize = (func) => {
   let cache = {};
   return function(...args) {
    let n = args[0];
    if(n in cache) {
        console.log("Cache");
        return cache[n];
    }else{
        console.log("calculate first time cache");
        let result =func(n);
        cache[n] = result;
        console.log("result:",result,"cache:",cache);
        return result;
    }
   }
}

console.time();
const effecient = memorize(calc);
console.log(effecient(5));

console.timeEnd();



