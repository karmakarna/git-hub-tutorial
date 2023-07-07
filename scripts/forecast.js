const accuKey = "	2I9eStCQIYa53aoK3J9bGoZ3AAeLwCi7";

//manuel cityInput
// const cityInput = "antalya";

//// getting the  current weather
const getCurrent = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${accuKey}`;

  const Response = await fetch(base + query);
  const data = await Response.json();

  // console.log(data);

  return data[0];
};

//fetching and returning the city details for weather
const getCity = async (cityInput) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${accuKey}&q=${cityInput}`;

  const Response = await fetch(base + query);
  const data = await Response.json();

  return data[0];
};

////manuel city input and getting the city detail, than current weather details
// getCity()
//   .then((data) => {
//     return getCurrent(data.Key);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
