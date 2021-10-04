const getTodos = (apis) => {
  return new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if(request.readyState === 4){
        reject('encountered some error!')
      }
    })
    request.open('GET', apis)
    request.send();
  })
  
}

//chain promises together (huge benefits)
getTodos('todos/luigi.json').then(data=>{
  console.log('promise 1 resolved: ', data)
  //below line of code means the parent now has a return value of a promise
  return getTodos('todos/mario.json');
}).then(data => {
  console.log('promise 2 resolved: ', data)
  return getTodos('todos/shaun.json')
}).then(data => {
  console.log('promise 3 resolved: ', data)
}).catch(err => {
  console.log('promise rejected: ', err)
})