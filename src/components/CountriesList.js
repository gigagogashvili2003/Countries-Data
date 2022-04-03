import React from "react";
import CountriesListItem from "./CountriesListItem";

function CountriesList({ countries }) {
  return (
    <div className="d-flex flex-wrap justify-content-between pt-5">
      {countries
        ? countries.map((country) => (
            <CountriesListItem
              key={country.name}
              name={country.name}
              image={country.image}
            />
          ))
        : null}
    </div>
  );
}

export default CountriesList;
