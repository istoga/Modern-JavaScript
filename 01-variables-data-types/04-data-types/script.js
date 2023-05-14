//-----primitive data types-----
//string enclosed in quotes or backticks
//number integers and floating-point numbers
//boolean true or false
//null intentional absence of any object value, think of it as an empty variable, treated as falsy for booleans
//undefined is a variable that has yet been defined/assigned
//symbol built in object whose constructor returns a unique symbol
//BigInt- numbers greater than the "number" type can handle


//-----reference data types(objects)-----
//reference types or "objects" are a non-primiteve value and when assigned to a variable, the variable is given a reference to that value
//object literals, arrays and functions are all reference types

//static type vs dynamic types
//JS is dynamically typed language, meaning we don't explicitly define the types of our variables. Many languages do such as C, C++, Java

//TypeScript is a superset of JavaScript, which does allow static-typing. Making your code more verbose(more words) and less prone to errors.

//String
const firstName = 'Sara';

//Number
const age = 30;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//Undefined
let score;

//Symbol
const id = Symbol('id');

//BigInt
const n = 9007199254740991n;

//Reference Types**************
const numbers = [1, 2, 3, 4];//this will show as an object because any reference type is an object

const person = {
    name: 'Brad'
}

function sayHello() {
    console.log("Hello");
}//though it will come out saying function in the console, it is still considered an object because it is a reference type in JS

const output = sayHello;//change the n to whatever const variable to see the output in the console
console.log(output, typeof output);

//https://262.ecma-international.org/5.1/#sec-11.4.3
