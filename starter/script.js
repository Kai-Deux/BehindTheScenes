'use strict';

/* 
function calAge(birthYear) {
    const age = 2037 - birthYear;
   
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
    
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // creating NEW variable with same name as outer scope's variable
            const firstName = 'Gray';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b
            }

            // Reassigning outer scope's variable
         output = 'NEW OUTPUT!';
        }
        // console.log(str);
        console.log(millenial);
        //console.log(add(2, 3));
        console.log(output);
}
    printAge();
    
    return age;
}


const firstName = 'Kai';
calAge(1993);


// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Kai';
let job = 'Developer';
const year = 1993;

// Function
console.log(addDecl(2,
    3));
    //console.log(addExpr(2,
        //3));
console.log(addArrow);
        //console.log(addArrow(2,
            //3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAgeArrow(1990);

const kai = {

  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
kai.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = kai.calcAge;
matilda.calcAge();

const f = kai.calcAge;
f();


// var firstName = 'Matilda';

const kai = {
  firstName: 'Kai',
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    //const self = this; // self or that
    //const isMillenial = function () {
      //console.log(self);
      //console.log(self.year >= 1981 && self.year <= 1996);
    //};

    // Solution 2
    const isMillenial = () => {
     console.log(this);
     console.log(this.year >= 1981 && this.year <= 1996);
   };
    isMillenial();
  },

  greet: () =>{
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
kai.greet();
kai.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Kai',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me); 
*/

// Primitive TYPES
let lastName = 'Duex';
let oldLastName = lastName;
lastName = 'Rei';
console.log(lastName, oldLastName);

// REFERENCE TYPES
const ashish = {
  firstName: 'Ashish',
  lastName: 'Misra',
  age: 27,
};
const marriedAshish = ashish;
marriedAshish.lastName = 'Davis';
console.log('Before marriage:', ashish);
console.log('After marriage:', marriedAshish );

//marriedAshish = {};

// COPYING OBJECTS
const ashish2 = {
  firstName: 'Ashish',
  lastName: 'Misra',
  age: 27,
  family: ['Alice', 'Bob'],
};

const ashishCopy = Object.assign({}, ashish2);
ashishCopy.lastName = 'Davis';
console.log('Before marriage:', ashish2);
console.log('After marriage:', ashishCopy);

ashishCopy.family.push('Mary');
ashishCopy.family.push('John');

console.log('Before marriage:', ashish2);
console.log('After marriage:', ashishCopy);
