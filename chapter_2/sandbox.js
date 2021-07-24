// 1
/*
let age = 25
let year = 2019

console.log(age, year)

age = 30
console.log(age)

const point = 100
// point = 50;
console.log(point)

var score = 75 //older way of defining variables
console.log(score)
*/

// 2
/*
//strings
console.log('hello, world')

let email = 'evelyn@gmail.com'
console.log(email)

//string concatenation
let firstName = 'Brandon'
let lastName = 'Sanderson'

let fullName = firstName + ' ' + lastName
console.log(fullName)

//getting characters
console.log(fullName[0])

//string length
console.log(fullName.length)

//string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase()
console.log(result, fullName) //these methods dont alter the original variables

let index = email.indexOf('@');
console.log(index)
*/

// 3
/*
//common string methods

let email = 'mario@thenetninja.co.uk'

// let result = email.lastIndexOf('n')

// let result = email.slice(0, 5);

// let result = email.substr(0, 10)

// let result = email.replace('m', 'w')

let result = email.replace('n', 'w')

console.log(result)
*/

// 4
/*
let radius = 10
const pi = 3.14

// console.log(radius, pi)

//math operators +, -, *, /, **, %

// console.log(10/2);

// let result = radius % 3;

// let result = pi * radius ** 2

//order of operation - B I D M A S

// let result = 5 * (10 - 3) ** 2

// console.log(result)

let likes = 10;

// likes = likes + 1
// likes++
// likes--

// likes += 10;
// likes -= 5;
// likes *=2;
// likes /= 2;

// console.log(likes)

//NaN - not a number
// console.log(5* 'hello')

let result = 'the blog has ' + likes + ' likes'
console.log(result)
*/

//5
/*
//template strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

//concatenation way
// let result =
//   'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
//   console.log(result)

//template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
  console.log(result)

//creating html tmeplates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html)
*/

// 6
/*
let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';

// console.log(ninjas[1])

// let random = ['shaun', 'crystal', 30, 20]

// console.log(ninjas.length)

//array methods

// let result = ninjas.join(',')
// let result = ninjas.concat(['John', 'Crystal'])
let result = ninjas.push('ken');
result = ninjas. pop();

console.log(ninjas)
*/

// 7
/*
let age = null;

console.log(age, age + 3, `the age is ${age}`)
*/

//8
/*
//booleans & comparisons
// console.log(true, false, 'true', 'false')

//method can return booleans
let email = 'luigi@thenetninjas.co.uk'
let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!')
// let result = names.includes('luigi')

// console.log(result)

//comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');
*/

//9
/*
let age = 25
//loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');

//strict comparison (different types cannot be equal)

console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')
*/

//10
/*
//type conversion
let score = '100';

// score = Number(score)
// console.log(score + 1)
// console.log(typeof score)

// let result = Number('hello')

// let result = String(50);

// let result = Boolean(0);

let result = Boolean('')

console.log(result, typeof result)
*/
