//store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age)

//updating data
//all this does is to see if name already exists. If it does, it's going to replace that. If it doesn't. it will create a new one.
localStorage.setItem('name','luigi');
localStorage.age = 50

name = localStorage.getItem('name')
age = localStorage.getItem('age')
 
console.log(name, age)

//deleting data from local storage
// localStorage.removeItem('name')
localStorage.clear();

name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age)