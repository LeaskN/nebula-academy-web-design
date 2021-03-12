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
          description1:
            "The average salary of an AWS-certified IT professional is $129,868 — ranking as one of the highest-paying certification categories in North America.The average salary of an AWS-certified IT professional is $129,868 — ranking as one of the highest-paying certification categories in North America.",
          description2:
            "Forbes Magazine has ranked AWS Certification as one of the Top 15 Most Valuable IT Certifications. Each of the five Amazon Web Services (AWS) certifications brings in an average salary of more than $100,000. Forbes Magazine has ranked AWS Certification as one of the Top 15 Most Valuable IT Certifications. Each of the five Amazon Web Services (AWS) certifications brings in an average salary of more than $100,000.",
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

  render() {
    return (
      <div>
        <Row className="ProgramsRow">
          {this.state.programs.map((program) => (
            <Col key={program.id} data-id={program.id} className="ProgramsCard">
              <h3>{program.title}</h3>

              <div
                className="hoverContainer"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <p className="description1">{program.description1}</p>
                <div className="hovered">
                  <p className="description">{program.description2}</p>
                  <Button
                    className="learnMore"
                    href={`/program/${program.id}`}
                    variant="info"
                  >
                    {program.CTA}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProgramsContent;
