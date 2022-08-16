const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

  console.log(data);

  // Destructure properties
  const { cityDetails, weather } = data;

  // Update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // Update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  // Remove the display none class if present
  if (card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {  
  // Prevent default action
  e.preventDefault();

  // Get city value
  const city = cityForm.city.value.trim().toLowerCase();
  cityForm.reset();

  // Update UI with new city
  updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

  // Set local storage
  localStorage.setItem('city', city);

});

if (localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(data));
}