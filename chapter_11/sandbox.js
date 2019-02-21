const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if(request.readyState === 4){
    // console.log(request);
    console.log(request.responseText);
  } else if(request.readyState === 4) {
    console.log('error with request');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();