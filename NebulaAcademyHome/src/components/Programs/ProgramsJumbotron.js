import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./ProgramsJumbotron.css";

export const ProgramsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="programsJumbo">
      <Container>
        <h1
          className="homeJumboHeader contentCentered"
          style={{ fontSize: "3em" }}
        >
          Programs
        </h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
);
