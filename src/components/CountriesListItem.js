import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CountriesListItem({ name, image }) {
  const navigate = useNavigate();
  const countryDetailClickHandler = () => {
    navigate(name, { replace: false });
  };

  return (
    <Fragment>
      <Card style={{ width: "18rem", height: "18rem", margin: "1rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={countryDetailClickHandler}>
            See More
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default CountriesListItem;
