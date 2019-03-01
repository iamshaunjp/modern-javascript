// rest parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num*2);
};

const result = double(1,3,5,7,2,4,6,8);
console.log(result);

// spread syntax (arrays)
const people = ['shaun', 'ryu', 'chun-li'];
const members = ['mario', 'luigi', ...people];
console.log(members);

// spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
const personClone = { ...person, location: 'manchester' };
console.log(person, personClone);