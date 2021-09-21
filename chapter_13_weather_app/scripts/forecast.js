//this document contains all of the JavaScript that will be responsible for interacting with the weather API and getting data

// this is the end point to the accuWeather API
const key = 'RjKdmCGXOVfvKql2HIhD8aEGQkaKB2Bv'; 

//when we're requesting data from the end point to this API, we're going to have to do two different things:
//1. we need to make a request to a certain end point to get city information(a city code)
//2. use that city code to make a second request to a weather conditions API end point. We're going to send that city code to it so it can identify where we want to get the weather and it will send us the weather conditions back for that area.

//get weather information
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data)
  return data[0];
}

//get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data)
  return data[1];
}


// getCity('richmond')
//   .then(data => {
//   //we want to take the data and get the Key(city code), and pass it into a get weather request - getWeather(). We return a promise by returning the whole thing, so we can chain these things together.  
//     return getWeather(data.Key)})
//   .then(data => {
//     console.log(data)})
//   .catch(err => console.log(err))