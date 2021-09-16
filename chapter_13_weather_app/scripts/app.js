//DOM manipulation in this document - show things on the page

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const  details = document.querySelector('.details');

const updateUI = (data) => {

  const cityDetails = data.cityDetails;
  const weather = data.weather;
  // console.log(cityDetails, weather)

  //update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather[0].Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  //remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  }

}

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
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})