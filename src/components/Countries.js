import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getCountries } from "../lib/api";
import CountriesList from "./CountriesList";

import LoadingSpinner from "./UI/LoadingSpinner";
function Countries() {
  const {
    sendRequest,
    data: loadedCountries,
    status,
    error,
  } = useHttp(getCountries);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log(status);

  if (status === "pending" && !error && !loadedCountries) {
    return <LoadingSpinner />;
  }

  if (status === "completed" && error) {
    return <p>Data not found!</p>;
  }

  if (
    status === "completed" &&
    (!loadedCountries || loadedCountries.length === 0)
  ) {
    return <p>Countries not found!</p>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-between pt-5">
      <CountriesList countries={loadedCountries} />
    </div>
  );
}

export default Countries;
