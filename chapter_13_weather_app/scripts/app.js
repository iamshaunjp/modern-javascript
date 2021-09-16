//DOM manipulation in this document - show things on the page

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const  details = document.querySelector('.details');



const updateCity = async (city) => {
  
  // console.log(city)

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  // return {
  //   cityDetails: cityDetails,
  //   weather: weather
  // }

  //object shorthand notation - when we have a property name and a value that are exactly the same name.
  return { cityDetails, weather }
}

cityForm.addEventListener('submit', e=>{
  //prevent default action
  e.preventDefault();

  //get city value (user input)
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})