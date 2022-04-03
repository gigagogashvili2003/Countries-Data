import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CountryDetailItem({ details }) {
  const navigate = useNavigate();

  const navigateToHomeHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <header>
        <img
          className="p-3 border border-2 border-dark rounded-3"
          src={details.flag}
          alt={details.name.common}
          style={{ width: "500px" }}
        />
        <h1 className="mt-3 fs-1 text-center">
          Country: {details.name.common}
        </h1>
      </header>
      <main className="p-1 d-flex justify-content-around w-75">
        <div>
          <h2 className="fs-6">Capital City: {details.capital}</h2>
          <h2 className="fs-6">
            Latlng of capital: ({details.capitalInfo.latlng})
          </h2>
          <h2 className="fs-6">Area: {details.area}</h2>
          <h2 className="fs-6">Cca2: {details.cca2}</h2>
          <h2 className="fs-6">Cca3: {details.cca3}</h2>
          <h2 className="fs-6">Ccn3: {details.ccn3}</h2>
          <h2 className="fs-6">
            Coat of Arms:{" "}
            <img width={40} src={details.coatOfArms} alt="Coat Of Arms" />
          </h2>
          <h2 className="fs-6">Continents: {details.continents}</h2>
          <h2 className="fs-6">
            Independent: {details.independent ? "Yes" : "No"}
          </h2>
          <h2 className="fs-6">
            Landlocked: {details.landlocked ? "Yes" : "No"}
          </h2>
        </div>

        <div>
          <h2 className="fs-6">Language: {Object.values(details.languages)}</h2>
          <h2 className="fs-6">Latlng: ({details.latlng})</h2>
          <h2 className="fs-6">Population: {details.population}</h2>
          <h2 className="fs-6">Region: {details.region}</h2>
          <h2 className="fs-6">Start Of Week: {details.startOfWeek}</h2>
          <h2 className="fs-6">Status {details.status}</h2>
          <h2 className="fs-6">Subregion: {details.subregion}</h2>
          <h2 className="fs-6">Top-Level Domain: ({details.tld})</h2>
          <h2 className="fs-6">
            United Nations Member: {details.unMember ? "Yes" : "No"}
          </h2>
          <h2 className="fs-6">Border Countries {`${details.borders}`}</h2>
        </div>
      </main>

      <Button
        variant="primary"
        style={{ position: "absolute", top: "15px", left: "15px" }}
        onClick={navigateToHomeHandler}
      >
        Back To Home
      </Button>
    </Container>
  );
}

export default CountryDetailItem;
