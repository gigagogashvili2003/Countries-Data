const API_URL = "https://restcountries.com/v3.1/all";
const COUNTRY_DETAIL_URL = "https://restcountries.com/v3.1/name/";

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
      image: data[key].flags.svg,
    };

    transformedCountries.push(newData);
  }

  return transformedCountries;
}

export async function getCountryDetail(countryName) {
  const res = await fetch(`${COUNTRY_DETAIL_URL}${countryName}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something Went Wrong!");
  }

  const transformedCountry = [];

  const newData = data.slice(0, 1);

  for (const key in newData) {
    const {
      altSpellings,
      borders,
      area,
      capital,
      capitalInfo,
      cca2,
      cca3,
      ccn3,
      cioc,
      coatOfArms,
      continents,
      flags,
      independent,
      landlocked,
      languages,
      latlng,
      maps,
      name,
      population,
      region,
      startOfWeek,
      status,
      subregion,
      tld,
      unMember,
    } = newData[key];

    const newCountryData = {
      area,
      borders,
      capital,
      capitalInfo,
      cca2,
      cca3,
      ccn3,
      cioc,
      coatOfArms: coatOfArms.svg,
      continents,
      flag: flags.svg,
      independent,
      landlocked,
      languages,
      latlng,
      googleMap: maps.googleMaps,
      name,
      population,
      region,
      startOfWeek,
      status,
      subregion,
      tld,
      unMember,
    };
    transformedCountry.push(newCountryData);
  }

  return transformedCountry;
}
