//if we have several files(endpoints) that we need to get one after the other
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

getTodos('todos/luigi.json').then(data=>{
  console.log(data)
}).catch(err => {
  console.log(err)
})