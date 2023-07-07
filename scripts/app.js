const details = document.querySelector(".details");
const time = document.querySelector(".card img");

//after updateCity, we are updating the UI for city name, weather conditions, night and day info. We are learning deconsctruction method.
const updateUi = async (mata) => {
  const cityDets = await mata.cityDets;
  const weather = await mata.weather;
  // const { cityDets, weather } = data;
  console.log(mata);

  const html = `
    <div class="text-muted text-uppercase text-center details">
            <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
          </div>
  `;
  details.innerHTML = html;

  if (weather.IsDayTime) {
    time.setAttribute("src", "img/day.svg");
  } else {
    time.setAttribute("src", "img/night.svg");
  }
};
///updating the city location by form and fire the fonctions getCity() getCurrent() storing them in an object
const updateCity = async (cityInput) => {
  const cityDets = await getCity(cityInput);

  const weather = await getCurrent(cityDets.Key);

  // console.log(cityDets, weather);
  // return { cityDets: cityDets, weather: weather };
  return { cityDets, weather };
};

/// getting the city name from form input to pass to getCity function
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityInput = form.city.value.trim();
  form.reset();
  // console.log(cityInput);

  updateCity(cityInput)
    .then((sata) => updateUi(sata))
    .catch((err) => console.log(err));
});
