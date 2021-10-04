const getTodos = (callback) => {
  //step 1: create a request object.
  //This is a JavaScript build-in method to create a request object.
  //XML represents an old data format we used to work with much before JASON arrived on the scene.
  //This request object can work with any kind of data: XML, JSON, plain text, etc.
  const request = new XMLHttpRequest();

  //step 4: attached an event listener to the request itself. The callback fires whenever there is a state change. And there are 4 state changes in total.
  request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
      //check the data here. Since it passed the if statement, err is of course undefined, and the data comes through
      callback(undefined, request.responseText);
    } else if(request.readyState === 4){
      //check the err here. Since it did not pass the if statement and it went to the else if statement, then err becomes true, data becomes undefined.
      callback('could not fetch data', undefined);
    }
  })

  //step 2 : make a GET request from the designated API endpoint (where to send the request to)
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

  //step 3: to actually send the request. 
  //If we open the browser and look at Network, we should be able to see the request and the data. 
  request.send();
}

console.log(1);
console.log(2);

//taking in 2 parameters to the callback function, err and data. err always comes before data because its the convention.
 getTodos((err, data)=>{
  console.log('callback fired!')
  // console.log(err, data);
  if(err){
    console.log(err);
  } else {
    console.log(data)
  }
 });

console.log(3);
console.log(4);