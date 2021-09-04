//fetch api

//fetch('todos/luigi.json) returns towards a promise. A promise is basically saying, at some point I will either resolve if we have a success or reject if there's an error.
fetch('todos/luigi.json').then(response => {
  if(response.status === 200) {
    console.log('resolved', response)
    return response.json()
  }
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log('rejected', err)
})

//the way the Fetch API works is that the promise is only ever rejected when we get some kind of network error. For example, if we're offlice or we can't reach the API for some reason.