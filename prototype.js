// Prototype Scenarios:-
// whenever you create any object javascript engine puts thess hidden properties into an Object and attaches it to an Object
//it attaches in it to your Original Object

//Just keep in Mind 🧠
//Just it is an Object which is attached to each and every method or an Array and Object whatever you create in JavaScript Object ,its attached to it

let arr = ['Muhammad', 'Shah'];

// Let's see

//Prototype Chain

//go to browser console (any)

//type in
arr.__proto__; // this array has own prototype
//then
Array.prototype; // this shows prototype arr.__proto__ same of above
//then
arr.__proto__.__proto__; //this shows Object.prototype in the console
//then
Object.prototype; // this shows same of above Object.prototype
//then
arr.__proto__.__proto__.__proto__; // this  shows null

//whenever you create any array , it has prototype like see Line:20
//and Array.prototype Object it also has Object.prototype
// and then Object.prototype, which  is null that is the end of the chain.. PROTOTYPE CHAIN

//In case of Object

let obj = {
  name: 'muhammad',
  age: 12,
  getIntro: function () {
    console.log(this.name + "'s age is " + this.age);
  },
};

let obj2 = {
  name: 'shah',
};

//Never do this
obj2.__proto__ = obj; // this prototype refers to Obj see in the console
console.log(obj2.__proto__); //Obj and override the properties of obj2;
//if you do like this
console.log(obj2.age); // 12 of Obj.age
console.log(obj2.getIntro()); // shah is age 12

//In case of Function

Function.prototype.myName = () => {
  console.log('my name is muhammad shah');
};
function name() {}
console.log(name.myName()); // muhammad shah
