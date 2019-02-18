const scores = [10, 30, 15, 25, 50, 40, 5];

// const highScores = scores.filter(score => score > 20);
// console.log(highScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);