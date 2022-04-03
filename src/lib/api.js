const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Cannot load the countries.");
  }

  const data = await res.json();

  const transformedCountries = [];

  for (const key in data) {
    const newData = {
      name: data[key].name.common,
      image: data[key].flags.png,
    };

    transformedCountries.push(newData);
  }

  return transformedCountries;
}
