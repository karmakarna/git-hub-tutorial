const accuKey = "	ZNu9G2VwpHDDFnNtX3mhDbF1fm04E2uz";

////manuel cityinput
// const cityinput = "bolu";

const getCurrent = async (dataKey) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${dataKey}?apikey=${accuKey}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getCity = async (cityinput) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${accuKey}&q=${cityinput}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

//////////manuel getCity & getCurrent
// getCity()
//   .then((data) => {
//     console.log(data);
//     return getCurrent(data.Key);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
