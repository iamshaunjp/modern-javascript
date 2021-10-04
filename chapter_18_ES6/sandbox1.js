// rest parameter
const double = (...nums) => {
  console.log(nums);
  // return nums;
  return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7,8)
console.log(result);

// spread syntax (arrays)
const people = ['shaun', 'ryu', 'crystal'];
console.log(people);
console.log(...people);
const members = ['mario', 'chun-li', ...people];
console.log(members);
// a good use case of spread would be when we want to take the elements of one array and spread them into another array.

// spread syntax (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'};
const personClone = {...person, location: 'london'};
console.log(personClone);