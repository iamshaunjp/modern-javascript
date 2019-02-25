const todos = [
  {text: 'play mariokart', author: 'shaun'},
  {text: 'buy some milk', author: 'mario'},
  {text: 'buy some bread', author: 'luigi'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
// console.log(stored);

console.log(JSON.parse(stored));