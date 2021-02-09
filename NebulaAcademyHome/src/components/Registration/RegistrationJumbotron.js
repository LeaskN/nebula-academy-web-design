import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./RegistrationJumbotron.css";

export const RegistrationJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin registrationJumbo">
      <Container>
        <h1 className="contentCentered">Registration</h1>
        <p>
          Nebula Academy bridges the gap between Academia and Industry. We
          partner with universities to remain on the cutting edge of higher
          education.
        </p>
        <Button
          href="https://calendly.com/tomlemons/nebulaacademy"
          target="empty"
          variant="secondary"
        >
          Impact my University Today
        </Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
);
