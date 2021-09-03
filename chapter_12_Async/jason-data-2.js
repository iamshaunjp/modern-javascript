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

//this is callback hell situation, it's very messy when there are many requests/callbacks - and this is when PROMISES comes into play
 getTodos('todos/luigi.json', (err, data)=>{
  console.log(data)
  getTodos('todos/mario.json', (err, data)=>{
    console.log(data)
    getTodos('todos/shaun.json', (err, data)=>{
      console.log(data)
    })
  })
 });
