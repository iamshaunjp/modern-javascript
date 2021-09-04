//throwing & catching errors

const getTodos = async () => {
  
  const response = await fetch('todos/luigis.json');

  if(response.status !== 200){
    //when we through an error inside an asynchronous function, the promise returned by this asynchronous function is rejected. Therefore, if it is rejected, we are going to catch it one line 19. As a result, we get the custom error instead of the error given by the response.json() on line 12.
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();

  return data;
}

getTodos()
  .then(data => console.log('resolved: ', data))
  .catch(err => console.log('rejected: ', err.message));



