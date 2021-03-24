import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import InfoPanel from "../Global/InfoPanel";
import slide1 from "../../assets/Image1.jpg";
import slide2 from "../../assets/Image2.jpg";
import slide3 from "../../assets/Image3.jpg";
import Popup from "../Popup/Popup";
import "./EducatorsContent.css";

class Educators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "transparent",
      clicked: "sciencebehindlearning",
      shape: "circle",
      slides: [
        {
          image: slide2,
          al: "Second slide",
          header:
            "“I gained valuable skills and knowledge to bring technology into my classroom.”",
        },
        {
          image: slide1,
          al: "First slide",
          header:
            "“It helped me as a facilitator to have a new perspective on teaching, learning and the neuroscience behind education. Having a new understanding of how students operate help to better relate to their behaviors.”",
        },
        {
          image: slide3,
          al: "Third slide",
          header:
            "“The light bulb went off and I was able to put what I was learning into perspective as a mom and teacher.”",
        },
      ],
      elements: [
        {
          color: "#8E5EA5",
          header: "Online Collaboration Training",
          buttonURL: "https://csteach.nebulaacademy.com/sbls",
          buttonText: "Schedule a Call",
          content:
            "Nebula Academy offers custom designed online experiential learning programs that combine gamification with workforce skills to support organizations in building diverse and inclusive working cultures. Utilizing Microsoft Office 365 Teams as our collaboration platform, participants gain first hand experience with how technology supports teams to promote a culture of advocacy and accountability across the organization, both online and in person.",
        },
        {
          color: "#993955",
          header: "Psychological Safety At Work",
          buttonURL: "http://csteach.nebulaacademy.com/STEAMCoach",
          buttonText: "Schedule a Call",
          content:
            "Psychological Safety At Work is a program designed to help companies and organizations understand the importance of psychological safety in the workplace. Is your team at work psychologically safe? Do people feel comfortable raising difficult issues in team meetings? Today more than ever, there is a need to support better communication across multiple modalities to gain the benefits of increased productivity and greater employee well-being.",
        },
        {
          color: "#138DFE",
          header: "Science Behind Learning",
          buttonURL: "https://csteach.nebulaacademy.com/Certifications",
          buttonText: "Schedule a Call",
          content:
            "The Science Behind Learning program is a virtual-live professional development program designed for educators, teachers, administrators, and anyone working in the education sector with students. Upon completing this learning experience, participants will have the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain friendly learning environments and experiences.",
        },
        {
          color: "#127FA5",
          header: "Unlock The Box",
          buttonURL: "https://csteach.nebulaacademy.com/programs",
          buttonText: "Request a Demo",
          content:
            "Coming Soon: Unlock The Box is a new platform to support companies and organizations seeking gamification as a means to reinforce knowledge construction. This platform is designed for educators and workforce development instructors to support gamified problem solving scenarios. It offers both pre-built scenarios and the ability to create your own custom scenarios, which provide you with a tool to increase learning outcomes. ",
        },
        // {
        //   color: "#9395D3",
        //   header: "Technology Integration",
        //   buttonURL: "https://csteach.nebulaacademy.com/programs#drones",
        //   buttonText: "Learn More",
        //   content: `"Physical computing has taken a foothold in education as a result of its ability to create the necessary stickiness for students to learn. We provide educators with the necessary resources and workshops for them to integrate physical computing into the classroom. To see how we integrate technology in the classroom, visit ${"https://csteach.nebulaacademy.com"} "`,
        // },
      ],
    };
  }
  createSlideCard = () => {
    return this.state.slides.map((slide, idx) => (
      <Col
        key={idx}
        stysle={{ backgroundColor: "transparent" }}
        className="HomeUrlCard cardHeaderContainer"
      >
        <blockquote style={{ fontSize: "1.3em" }}>{slide.header}</blockquote>
        <p>{slide.body}</p>
      </Col>
    ));
  };
  render() {
    return (
      <React.Fragment>
        <Popup
          content={
            "All Teacher Professional Development courses are being offered online. Registrations are now open for our Computer Science Teaching Certification Program!"
          }
          buttons={[
            {
              title: "Learn More",
              link: "https://csteach.nebulaacademy.com/programs",
            },
          ]}
        />
        <Row
          style={{
            backgroundImage: `url('${slide2}')`,
            backgroundSize: "cover",
            marginLeft: "10vw",
            marginRight: "10vw",
          }}
        >
          {this.createSlideCard()}
        </Row>
        <InfoPanel name={"INFO PANEL!!!"} state={this.state} />
      </React.Fragment>
    );
  }
}

export default Educators;
