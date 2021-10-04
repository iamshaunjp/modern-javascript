//if we have several files(endpoints) that we need to get one after the other
const getTodos = (apis, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText)
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  })
  
  request.open('GET', apis)
  request.send();
}

//promise example

const getSomething = () => {
  // step 1: when we use promises the first thing we do is to return a new promise
  return new Promise((resolve, reject)=>{
    //fetch something
    // resolve('some data');
    reject('some error');
  });
}

//when we resolve something in a promise, it fires the callback(first parametor) inside the then method, and that callback function takes the data we pass through to the resolve function.
//same thing with the reject method, when promise has a reject outcome, the callback(second parameter) will fire inside the then method, and that callback function takes the data we pass through to the reject function.
// getSomething().then((data)=>{
//   console.log(data); //will display 'some data'
// }, (err)=>{
//   console.log(err) //will display 'some err'
// })


//Below works the same but looks neater, especially when it comes to chainning promises together.
//If the promise gets resolved, then it fires the callback in the then() method. If it get rejected, instead it comes to the catch() method and fires the callback inside of it.

getSomething().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})