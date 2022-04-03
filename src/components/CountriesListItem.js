import React from "react";
import { Card, Button } from "react-bootstrap";

function CountriesListItem({ name, image }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CountriesListItem;
