
// step 1: create a request object.

//This is a JavaScript build-in method to create a request object.

//XML represents an old data format we used to work with much before JASON arrived on the scene.

//This request object can work with any kind of data: XML, JSON, plain text, etc.

const request = new XMLHttpRequest();

//step 4: attached an event listener to the request itself. The callback fires whenever there is a state change. And there are 4 state changes in total.
request.addEventListener('readystatechange', ()=>{
  // console.log(request, request.readyState);
  if(request.readyState === 4){
    console.log(request.responseText);
  }
})

//step 2 : make a GET request from the designated API endpoint (where to send the request to)
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

//step 3: to actually send the request. If we open the browser and look at Network, we should be able to see the request and the data. 
request.send();