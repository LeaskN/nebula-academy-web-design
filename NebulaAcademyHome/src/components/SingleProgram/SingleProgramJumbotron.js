import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./SingleProgramJumbotron.css";

class SingleProgramJumbotron extends Component {
  render() {
    const { title } = this.props.data;

    return (
      <React.Fragment>
        <Jumbotron className="programsJumbo">
          <Container>
            <h1
              className="homeJumboHeader contentCentered"
              style={{ fontSize: "3em" }}
            >
              {title}
            </h1>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default SingleProgramJumbotron;
