//DOM manipulation in this document - show things on the page

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

  console.log(data)
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  //below is Destructuring, which works the same as line 10 & 11 but less code and better readability
  //Desctruturing is an easy way to get properties from an object and them store them in a constant of the sname name.
  const {cityDetails, weather} = data;

  //update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  //update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc)

  //Ternary Operator
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg'
  // }
  time.setAttribute('src', timeSrc)

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

const result = false ? 'value 1' : 'value 2';
console.log(result);
