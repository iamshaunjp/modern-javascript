//JSON data looks like an array with lots of JacaScript object inside it, but it is just a string. A string that is formatted in a way that looks like JavaScript objects (curly braces and key value).

const getTodos = (callback) => {
 
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200){
      //We want to turn the JSON data(string) into objects in an array, in order to have access have its different properties - using JSON.parse()
      const data = JSON.parse(request.responseText)
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
  
  // request.open('GET', 'todos.json')

  request.send();
}

 getTodos((err, data)=>{
  console.log('callback fired!')
  if(err){
    console.log(err);
  } else {
    console.log(data)
  }
 });
