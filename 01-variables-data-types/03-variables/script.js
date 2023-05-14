// ways to declare a variable
//var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

//initialize your variables BEFORE using them, otherwise you will get an uncaught referenceerror in the console

//cannot start variables with numbers
//multi-word formatting
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

//re-assign variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(age);

const x = 100;

// x = 200;
//you cannot directly reassign a const
//you cannot just declare a const variable, it must be assigned from the beginning

const arr = [1,2,3,4];

// arr = [1,2,3,4,5];
//this will cause a uncaught typeerror: assignment to constant variable

arr.push(5);

console.log(arr);

const person = {
    name: 'Brad'
};

person.name = 'John'

console.log(person);
//this doesn't give an error because you are only changing a property or value of a key in the object

person.email = 'brad@gmail.com';

console.log(person);

//always use const, unless you know you will be changing a variable for instance, score, this is brad's preference

//you can declare multiple values at once
let a, b, c;

const d = 10,
    e = 20,
    f = 30;

console.log(d);