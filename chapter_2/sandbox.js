// alert('hello, world');

// let age = 25;
// let email = 'eddie@e11world.com';
// let firstName = 'Eddie';
// let lastName = 'Potros';
// let fullName = firstName + ' ' + lastName;


// console.log(age);
// console.log(firstName + ' ' + lastName);
// console.log(email[0]);

// console.log(fullName.toUpperCase());
// console.log(email.indexOf('@'));
// console.log(email.lastIndexOf('1'));
// console.log(email.slice(0,10));
// console.log(email.substr(0,10));
// console.log(email.replace('d', 'D'));



// order of operation B I D M A S ( bracket indiceis division multiplication addition subtraction )

// math operators + - * / ** %
// Operator	Description
// +	    Addition
// -	    Subtraction
//- *	    Multiplication
//- **	    Exponentiation (ES2016)
// /	    Division
// %	    Modulus (Remainder)
// ++	    Increment
// --	    Decrement

// let radius = 10;
// const pi = 3.14;
// let result = radius % 3;
// let result = pi * radius ** 2;

// console.log(radius, pi);

// console.log(10 / 2);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes +=10;
// likes -=5;
// likes /=2;
// likes *=2;

// NaN = not a number
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// console.log(result);

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author;

// template string way
// let result = `The blog called ${title} by ${author}`;

// creating html templates
// let html = `<h2>${title}</h2>
{/* <p>By ${author}</p> */}
// `;

// console.log(html);



// let ninjas = ['eddie', 'mike', 'shawn'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 33];
// console.log(ages[2]);

// let random = ['eddie', 'potros', 37];
// console.log(random[2]);

// array methods

// let result = ninjas.join(', ');
// let result = ninjas.indexOf('eddie');
// let result = ninjas.concat(['ken', 'sugar']);
// let result = ninjas.push('ken');
// result = ninjas.pop();
// console.log(result);
// console.log(ninjas);



// let age;
// console.log(age, age + 3, `the age is ${age}`);
//             undefined NaN "the age is undefined"

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);
//         null 3 "the age is null"


// let names = ['eddie', 'potros'];
// let age = 37;

// let result = names.includes('eddie');
// console.log(result);

// comparison operators
// console.log(age == 37);
// console.log(age == 27);
// console.log(age != 33);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 20);
// console.log(age <= 20);


// let fName = 'Eddie';
// lower case letter is greater than uppercase
// console.log(fName == 'Eddie');
// console.log(fName == 'eddie');
// console.log(fName > 'ayad');
// console.log(fName > 'Ayad');

// loose comparison different type (string/number) can still be equal
// console.log(age == '37');
// console.log(age != 37);
// console.log(age != '37');

// // strict comparison (different types cannot be equal)
// console.log(age === 37);
// console.log(age === '37');
// console.log(age !== 37);
// console.log(age !== '37');



// type conversion
// let score = '100';
// if left as is, result is 1001
// score = Number(score);
// here we get the value of 100 + 1 = 101

// console.log(score + 1);
// console.log(typeof score);

// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
// let result = Boolean('');
// console.log(result, typeof result);




// for loop

// for(let i = 0; i < 5; i++) {
    //  console.log('in loop: ', i);
// }
// console.log('loop done');

// const names = ['eddie' , 'mike', 'sean'];

// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }



// WHILE loop

// let i = 0;

// while(i < 5) {
    // console.log('in loop ', i);
    // i++;
// }

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }


// DO WHLIE (RUN AT LEAST ONCE)
// let i = 3;
// do {
//     console.log('val of i is ', i);
//     i++;
// } while(i < 5);






// IF STATEMENTS

// const age = 21;

// if(age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['eddie' , 'mike', 'sean'];

// if(ninjas.length > 2) {
//     console.log("that's a lot of ninjas");
// }


const password = 'password1234';

// if(password.length >= 12) {
//     console.log('pass is very very good and long');
// } else if(password.length >= 8) {
//     console.log('password is ok');
// } else {
//     console.log('pass is bad');
// }

// LOGICAL OPERATORS OR || and AND &&

// if(password.length >= 12 && password.includes('@')) {
//     console.log('pass is very very good and long');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log('password is ok');
// } else {
//     console.log('bad pass');
// }

// const scores = [50, 20, 25, 0, 31, 99, 11, 83];

// for(let i = 0; i < scores.length; i++) {
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);
    
//     if(scores[i] === 99) {
//         console.log('congrats');
//         break;
//     }
// }
// if(!user) {

// }

// const removeLast = scores.pop();
// console.log(removeLast);
// const removeSome = scores.splice(1,2);
// console.log(removeSome);


// SWITCH STATEMENT

// const grade = 'D';

// switch(grade) {
//     case 'A':
//         console.log('got an A');
//     break;
//     case 'B':
//         console.log('got a B');
//     break;
//     case 'C':
//         console.log('got a C');
//     break;
//     case 'D':
//         console.log('got a D');
//     break;
//     case 'E':
//         console.log('got an E');
//     break;
//     default:
//         console.log('not correct');
// }




// let age = 30;

// if(true) {
//     let age = 40;
//     // age = 33;
//     let name = 'eddie';
//     console.log('inside 1st code block: ', age, name);
//     if(true) {
//         age = 44;
//         console.log('inside 2nd code block ', age);
//         var oldVar = '"global everywhere"';
//     }
// }

// console.log('outside code block: ', age, name, oldVar);





















/*
nfn
sfc
clg
ctrl+shift+l for #
*/

