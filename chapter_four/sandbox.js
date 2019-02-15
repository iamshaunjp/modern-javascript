// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
