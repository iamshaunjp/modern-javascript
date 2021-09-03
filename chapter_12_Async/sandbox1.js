console.log(1)
console.log(2)

//This is asynchronous code in action. In this case we are not fetching data from a database, this is just wait in two seconds to emulate that request and then we are firing the console log.
setTimeout(()=>{
  console.log('callback function fired')
}, 2000)

console.log(3)
console.log(4)