// Currying function in JavaScript

// function additionFunct(a,b,c){
//     return a + b + c;
// }
// let add =additionFunct(2,3,4)
// console.log(add);

// function addition(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }


//Bad method to pass data to functions

// let addCurry = addition(2);
// let add2Func= addCurry(3);
// let add3Func = add2Func(3);
// console.log(add3Func);

// Good method to pass data to functions using currying

// let data = addition(2)(3)(2);
// console.log(data);

// Real life Example of age using currying

// function getAge(birthYear){
//     return function(currentYear){
//         return currentYear - birthYear;
//     }
// }

// let birthYear = 2005;

// let currentYear = 2024;

// let getAgeFunction = getAge(birthYear);

// let age = getAgeFunction(currentYear);

// console.log(age);

// Real life example of object using currying function

// function createPerson(name){
//     return function(age){
//         return function(city){
//             return {name, age, city};
//         }
//     }
// }

// let personName = 'John';

// let personAge = 30;

// let personCity = 'New York';

// let createJohn = createPerson(personName);

// let createJohn30 = createJohn(personAge);

// let john = createJohn30(personCity);

// console.log(john);


 userObj = {
    name:"Muhammad",
    age:17,
}

function userInfo(obj){
    return function( userAge){
        return obj[ userAge];
    }
}

let getUserInfo = userInfo(userObj);

console.log(getUserInfo("age"));