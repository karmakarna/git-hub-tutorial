const form = document.querySelector("form");

const time = document.querySelector(".time");

const details = document.querySelector(".details");
const icon = document.querySelector(".icon img");

const updateUI = async (data) => {
  // const { cityDets, weather } = data;

  // console.log(cityDets, weather);

  const cityDets = data.cityDets;
  const weather = data.weather;
  console.log(data);

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
  console.log(icon);
  icon.setAttribute("src", `img/icons/${weather.WeatherIcon}.svg`);
};

const updateCity = async (cityinput) => {
  const cityDets = await getCity(cityinput);
  const weather = await getCurrent(cityDets.Key);

  return { cityDets: cityDets, weather: weather };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityinput = form.city.value.trim();

  form.reset();
  // console.log(cityinput);

  updateCity(cityinput)
    .then((data) => {
      updateUI(data);
    })

    .catch((err) => console.log(err));
});
