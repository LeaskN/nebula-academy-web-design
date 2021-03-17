import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IoIosArrowDropup } from "react-icons/io";

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
      ],
    };
  }

  render() {
    return (
      <div>
        <Row className="ProgramsRow">
          {this.state.programs.map((program) => (
            <Col key={program.id} data-id={program.id} className="ProgramsCard">
              <h3 className="programTitle">{program.title}</h3>

              <div
                className="hoverContainer"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <div className="description1">
                  <p>{program.description1}</p> 
                  <div>
                    <IoIosArrowDropup />
                    <p className='moreInfo'>More Info</p>
                  </div>
                </div>

                <div className="hovered">
                  <p className="description">{program.description2}</p>
                  <Button href={`/program/${program.id}`} variant="info">
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
