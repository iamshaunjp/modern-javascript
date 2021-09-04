//async & await - set off all of our asynchronous code into a single function (asynchronous function), and then use the await keyword inside to chain promises together in a much more readable and logical way.

//by adding async in front of the parenthesis, we made an asynchronous function. It always return a promise regardless of what's inside.
const getTodos = async () => {
  //this await keyword stalls JavaScript right here, it stops it from assigning a value to this variable until the promise has resolved. Once the promise has resolved, we can take the value from the resolve function and assign it to a variable.
  const response = await fetch('todos/luigi.json');
  const data = await response.json()
  return data;
}

//***This asynchronous function itself is non-blocking. The entire block of code is being handled somewhere else in the browser, so the rest of our code could carry on if it wanted to. So, the await keyword only stalls inside the asynchronous function.

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log(err));

console.log(3);
console.log(4);

// fetch('todos/luigi.json').then(response => {
//     console.log('resolved', response)
//     return response.json()
// }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log('rejected', err)
// })

