// async & await

const getTodos = async () => {

  let response = await fetch('json/luigi.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  let data = await response.json();
  return data;

};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));