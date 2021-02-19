import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AWSSlide1 from "../../assets/awsstats1.jpg";
import AWSSlide2 from "../../assets/awsslide2.jpg";
import AWSSlide3 from "../../assets/awsquote.jpg";
import AWSSlide4 from "../../assets/AdobeStock_312848234.jpg";
import "./ProgramsContent.css";

class ProgramsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [
        {
          id: 1,
          title: "AWS",
          image: AWSSlide1,
          description1: "description1",
          description2: "description2",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 2,
          title: "Software Engineering Bootcamp",
          image: AWSSlide2,
          description1: "description1",
          description2: "description2",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 3,
          title: "Advanced SE Bootcamp",
          image: AWSSlide3,
          description1: "description1",
          description2: "description2",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 4,
          title: "Tech Skills Bootcamp",
          image: AWSSlide4,
          description1: "description14",
          description2: "description4",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 5,
          title: "Tech Sales Bootcamp",
          image: "image5",
          description1: "description15",
          description2: "description5",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 6,
          title: "title6",
          image: "image6",
          description1: "description16",
          description2: "description6",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 7,
          title: "title7",
          image: "image7",
          description1: "description17",
          description2: "description7",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 8,
          title: "title8",
          image: "image8",
          description1: "description18",
          description2: "description8",
          CTA: "Learn More",
          hover: false,
        },
        {
          id: 9,
          title: "title9",
          image: "image9",
          description1: "description19",
          description2: "description9",
          CTA: "Learn More",
          hover: false,
        },
      ],
    };
  }

  onMouseHover = (e) => {
    let hoverId = e.target.dataset.id;
    if (hoverId) {
      this.setState((prevState) => {
        const newState = prevState;
        newState.programs[hoverId - 1].hover = true;
        console.log(newState.programs[hoverId - 1].hover, "<--- changing?");
        return {
          programs: [...newState.programs],
        };
      });
    }
    console.log(this.state, "<-- new state?");
  };

  onMouseUnhover = (e) => {
    let hoverId = e.target.dataset.id;
    if (hoverId) {
      this.setState((prevState) => {
        const newState = prevState;
        newState.programs[hoverId - 1].hover = false;
        console.log(newState.programs[hoverId - 1].hover, "<--- changing?");
        return {
          programs: [...newState.programs],
        };
      });
    }
  };

  render() {
    return (
      <div>
        <Row className="ProgramsRow">
          {this.state.programs.map((program) => (
            <Col
              key={program.id}
              data-id={program.id}
              className="ProgramsCard"
              onMouseOver={this.onMouseHover}
              onMouseOut={this.onMouseUnhover}
            >
              {program.hover ? (
                <h3>{program.CTA}</h3>
              ) : (
                <h3>{program.title}</h3>
              )}
              {/* <h3>{program.title}</h3> */}
              {/* <img className="programImages" src={program.image} /> */}
              <p>{program.description1}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProgramsContent;
