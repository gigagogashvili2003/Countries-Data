import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getCountryDetail } from "../lib/api";
import LoadingSpinner from "./UI/LoadingSpinner";
import CountryDetailItem from "./CountryDetailItem";
function CountryDetail() {
  const { countryName } = useParams();

  const {
    data: countryData,
    status,
    error,
    sendRequest,
  } = useHttp(getCountryDetail);

  useEffect(() => {
    sendRequest(countryName);
  }, []);

  if (status === "pending" && !error && !countryData) {
    return <LoadingSpinner />;
  }

  if (status === "completed" && error) {
    return <p>Something Went Wrong!</p>;
  }

  if (status === "completed" && (!countryData || countryData.length === 0)) {
    return <p>No such data found!</p>;
  }

  if (!countryData) {
    return <p>No data found!</p>;
  }

  return <CountryDetailItem details={countryData[0]} />;
}

export default CountryDetail;
