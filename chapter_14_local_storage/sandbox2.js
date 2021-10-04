const todos = [
  {text: 'play mariokart', author: 'shaun'},
  {text: 'buy some milk', author: 'mario'},
  {text: 'buy some bread', author: 'luigi'}
];

localStorage.setItem('todos', JSON.stringify(todos))
const stored = localStorage.getItem('todos')
const converted = JSON.parse(stored)
console.log(converted)

