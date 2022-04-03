import React from "react";

import { Button, Spinner } from "react-bootstrap";
function LoadingSpinner() {
  return (
    <Button className="spinner" variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  );
}

export default LoadingSpinner;
