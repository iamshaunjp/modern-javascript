// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20).add(30);
ages.delete(30);

console.log(ages, ages.size);

ages.clear();
console.log(ages);


