const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries() {
  const res = await fetch(API_URL);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Cannot load the countries.");
  }

  const transformedCountries = [];

  for (const key in data) {
    const newData = {
      name: data[key].name.common,
      image: data[key].flags.svg,
    };

    transformedCountries.push(newData);
  }

  return transformedCountries;
}
