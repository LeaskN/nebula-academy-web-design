import React, { Component } from "react";
import { Row, Col, Button, } from "react-bootstrap";
import InfoPanel from "../Global/InfoPanel";
import AWSSlide1 from "../../assets/awsstats1.jpg";
import AWSSlide2 from "../../assets/awsslide2.jpg";
import AWSSlide3 from "../../assets/awsquote.jpg";
import AWSSlide4 from "../../assets/AdobeStock_312848234.jpg";
import SESlide1 from "../../assets/NebulaGrowingField.jpg";
import SESlide2 from "../../assets/nebulaSECourseDescription2.jpg";
import SESlide3 from "../../assets/nebulasecoursedescription.jpg";
import TechSkills1 from "../../assets/TechSkills1.jpeg";
import HelpDesk1 from "../../assets/HelpDesk1.jpeg";
import HelpDesk2 from "../../assets/HelpDesk2.jpg"; 
import HelpDesk3 from "../../assets/HelpDesk3.jpeg"; 
import TechSales1 from "../../assets/TechSales1.jpeg"; 
import TechSkills2 from "../../assets/TechSkills2.jpeg"; 
import TechSkills3 from "../../assets/TechSkills3.jpeg"; 
import TechSales2 from "../../assets/TechSales2.jpeg";
import TechSales3 from "../../assets/TechSales3.jpeg"; 


import { WorkforceCarousel } from "./WorkforceCarousel/WorkforceCarousel";
// import { WorkforceProgramSection } from "./WorkfroceProgramSection/WorkforceProgramSection";
import "./WorkforceDevelopmentContent.css";

class WorkforceDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "transparent",
      clicked: "sciencebehindlearning",
      shape: "circle",
      softwareEngineering: {
        section: {
          header: "Software Engineering",
          buttonName: "Bootcamp",
        },
        softwareEngineeringCarouselItems: [
          {
            image: SESlide1,
            al: "The field is exponentially growing.",
            header: "The field is exponentially growing.",
            body: (
              <div>
                <p>
                  According to the U.S. Bureau of Labor Statistics, software
                  engineer jobs are projected to increase by 21% from 2018 to
                  2028.
                </p>
                <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
                  >
                    Bureau of Labor Statistics
                  </a>
                </p>
              </div>
            ),
          },
          {
            image: SESlide2,
            al: "ReactJS is the future",
            header: "ReactJS is the future of Web Dev",
            body: (
              <div>
                <p>
                  Today, ReactJS has become highly popular because of its extra
                  simplicity and flexibility. It is estimated that more than
                  1,300 developers and over 94,000 sites utilize ReactJS. React
                  JS is leading in Top 10K Sites, Top 100K Sites, Top 1M Sites,
                  and The Entire Web.
                </p>
                <p>
                  Sources:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.tecla.io/blog/2019-stats-on-top-js-frameworks-react-angular-and-vue/#section-content"
                  >
                    Tecla.io
                  </a>{" "}
                  &{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://medium.com/@thinkwik/why-reactjs-is-gaining-so-much-popularity-these-days-c3aa686ec0b3"
                  >
                    Medium.com
                  </a>
                </p>
              </div>
            ),
          },
          {
            image: SESlide3,
            al: "Course Description",
            header: "Course Description",
            body: (
              <p>
                Taught by industry professionals, participants will spend 5 days
                a week and 8 hours a day learning, coding, and studying to
                become a full-stack developer with an AWS or Microsoft
                certification. Upon completion, participants will have the
                ability to launch a career in software development. We focus on
                holistic training including soft skills and personal
                development. Participants will get hands-on experience working
                with today’s modern web development tools.
              </p>
            ),
          },
        ],
      },

      AWS: {
        section: {
          header: "AWS",
          buttonName: "AWS",
        },
        AWSCarouselItems: [
          {
            image: AWSSlide1,
            al: "First slide",
            header: "AWS Certifications Pay Well",
            body: (
              <div>
                <p>
                  'The average salary of an AWS-certified IT professional is
                  $129,868 — ranking as one of the highest-paying certification
                  categories in North America.'
                </p>
                <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.globalknowledge.com/us-en/resources/resource-library/articles/how-to-earn-a-top-paying-aws-certification-salary/"
                  >
                    Global Knowledge
                  </a>
                </p>
              </div>
            ),
          },
          {
            image: AWSSlide2,
            al: "Second slide",
            header:
              "AWS ranks highly as one of the best certifications to hold.",
            body: (
              <div>
                <p>
                  Forbes Magazine has ranked AWS Certification as one of the Top
                  15 Most Valuable IT Certifications. Each of the five Amazon
                  Web Services (AWS) certifications brings in an average salary
                  of more than $100,000.
                </p>
                <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.forbes.com/sites/louiscolumbus/2016/02/21/15-top-paying-it-certifications-in-2016-aws-certified-solutions-architect-leads-at-125k/#24d610fc7978"
                  >
                    Forbes Magazine
                  </a>
                </p>
              </div>
            ),
          },
          {
            image: AWSSlide3,
            al: "Third slide",
            header: "AWS Certifications Are Great for All Levels of Employment",
            body: (
              <>
                <blockquote style={{ borderLeft: "none", paddingLeft: "" }}>
                  “My advice to people leaving college is always the same: Get
                  AWS-Certified.” <br />
                  <br />
                  <b>
                    <p>David Linthicum, Infoworld</p>
                  </b>
                </blockquote>
              </>
            ),
          },
          {
            image: AWSSlide4,
            al: "Fourth slide",
            header: "Course Description",
            body:
              "Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. Learn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions.",
          },
        ],
      },

      techSkills: {
        TechSkills: {
          header: "Tech Skills",
          buttonName: "Tech Skills",
        },
        techSkillsItems: [
          {
            image: TechSkills1,
            al: "First slide",
            header: "Build Competence in Computer Technology",
            body: (
              <div>
                <p>This program is an entry to any tech career and is an opportunity to explore potential paths based on individual participant’s interests and capabilities. Designed to improve basic workforce-related tech skills, a participant will learn networking fundamentals, IT fundamentals, MS 365, basic coding principals, presentation skills, collaboration skills, and more.</p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.globalknowledge.com/us-en/resources/resource-library/articles/how-to-earn-a-top-paying-aws-certification-salary/"
                  >
                    Global Knowledge
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: TechSkills2,
            al: "Second slide",
            header: "Build Foundational Knowledge",
            body: (
              <div>
                <p>Opportunity for participants to understand if they have a desire to work with technology, to foster participantconfidence, and build competence in computer technology.</p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.forbes.com/sites/louiscolumbus/2016/02/21/15-top-paying-it-certifications-in-2016-aws-certified-solutions-architect-leads-at-125k/#24d610fc7978"
                  >
                    Forbes Magazine
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: TechSkills3,
            al: "Fourth slide",
            header: "Course Description",
            body:
              "Build networking and presentation skills, master Microsoft Office 365 (Microsoft Teams​, Microsoft OneNote​, Microsoft Forms​, Microsoft PowerPoint​, Microsoft SharePoint), learn the IT fundamentals and intro to coding. ",
          },
        ],
      },

      techSales: {
        section: {
          header: "Tech Sales",
          buttonName: "Tech Sales",
        },
        techSalesItems: [
          {
            image: TechSales1,
            al: "First slide",
            header: "Build Client Facing Skills",
            body: (
              <div>
                <p>A Tech Sales Professional is someone with strong communication skills who understands technology and how it supports business operations at a high level. They track customer engagement and understand the sales process from customer initial engagement to the close of the sales cycle. There are a few roles in the tech-sales-cycle each one varying in client facing & technical capacity. This program focuses on preparing participants for their preferred technical sales role.</p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.globalknowledge.com/us-en/resources/resource-library/articles/how-to-earn-a-top-paying-aws-certification-salary/"
                  >
                    Global Knowledge
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: TechSales2,
            al: "Second slide",
            header: "Prepare For Your Preferred Technical Sales Role",
            body: (
              <div>
                <p>
                  There are a few roles in the tech-sales-cycle each one varying
                  in client facing and technical capacity.
                </p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.forbes.com/sites/louiscolumbus/2016/02/21/15-top-paying-it-certifications-in-2016-aws-certified-solutions-architect-leads-at-125k/#24d610fc7978"
                  >
                    Forbes Magazine
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: TechSales3,
            al: "Fourth slide",
            header: "Course Description",
            body:
              "Learn IT concepts, terminology and infrastructure concepts. Build Sales skills and customer relationship management. ",
          },
        ],
      },

      helpDesk: {
        section: {
          header: "Help Desk",
          buttonName: "Help Desk",
        },
        helpDeskItems: [
          {
            image: HelpDesk1,
            al: "First slide",
            header: "Guide End Users Through Issues",
            body: (
              <div>
                <p>
                  A Helpdesk Support Technician is empathetic, has strong problem-solving skills, understands how to provide remote support, asks the right questions to illicit important information, and has strong communication skills to help guide end users through issues.  They understand complex systems, can manage an AWS Management Console, a Microsoft Office 365 Administration Console, customer expectations, & much more.</p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.globalknowledge.com/us-en/resources/resource-library/articles/how-to-earn-a-top-paying-aws-certification-salary/"
                  >
                    Global Knowledge
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: HelpDesk2,
            al: "Second slide",
            header: "Build Your Tech Skills",
            body: (
              <div>
                <p>
                  Helpdesk Support Technicians understand complex systems, can
                  manage an AWS Management Console, a Microsoft Office 365
                  Administration Console, customer expectations, and much more.
                </p>
                {/* <p>
                  Source:{" "}
                  <a
                    className="linkLight"
                    target="empty"
                    href="https://www.forbes.com/sites/louiscolumbus/2016/02/21/15-top-paying-it-certifications-in-2016-aws-certified-solutions-architect-leads-at-125k/#24d610fc7978"
                  >
                    Forbes Magazine
                  </a>
                </p> */}
              </div>
            ),
          },
          {
            image: HelpDesk3,
            al: "Fourth slide",
            header: "Course Description",
            body:
              "Learn IT concepts, terminology and infrastructure concepts. Become a AWS Cloud Practitioner and Microsoft Office 360 Administrator",
          },
        ],
      },
      elements: [
        {
          color: "#8E5EA5",
          header: "Try Coding",
          content:
            "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6-hour in-person session provides the opportunity to build confidence, and clarity on an investment towards your future.",
        },
        {
          color: "#993955",
          header: "Scholarships",
          content:
            "As a social enterprise, our mission is to inspire future innovators through building awareness and skills related to technology and computer science. Our methodology, the Computer Science Growth System (CSGS), combined with our scholarship programs, builds capacity from K-Career.",
          buttonText: "Scholarships",
          buttonURL: "https://code.nebulaacademy.com/Scholarships",
          linkLeavesSite: true,
        },
        {
          color: "#138DFE",
          header: "Workforce Experience",
          content: [
            "The gap between academia and industry is growing and our workforce is suffering for it. Schools and universities don't prepare our students enough to join the industry and industries are unwilling to train and hire students. Therefore, the workforce is left unprepared and without the necessary skills to attain a sustainable career.",
            "The solution? Stop blaming and start training! Nebula Academy prepares anyone looking to join the growing technology industry, whether you have little to no skill or tremendous skill and looking to get certified. Our programs offer students comprehensive coursework, engaging and willing instructors, and career preparation and experience. We invest in our students to ensure participants have the necessary hard and soft skills to join the leading technology workforce.",
          ],
          buttonText: "Career Readiness",
          buttonURL: "https://code.nebulaacademy.com/Curriculum",
          linkLeavesSite: true,
        },
        {
          color: "#127FA5",
          header: "Guest Speakers",
          content:
            "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world.",
        },
        {
          color: "#9395D3",
          header: "Measuring Success",
          content:
            "As a research focused social enterprise, metrics are key to our long-term sustainability. Measuring matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results.",
        },
      ],
    };
  }

  createAWSSlides = () => (
    <WorkforceCarousel data={this.state.AWS.AWSCarouselItems} />
  );

  createSoftwareEngineeringSlides = () => (
    <WorkforceCarousel
      data={this.state.softwareEngineering.softwareEngineeringCarouselItems}
    />
  );

  createTechSkillsSlides = () => (
    <WorkforceCarousel data={this.state.techSkills.techSkillsItems} />
  );

  createTechSalesSlides = () => (
    <WorkforceCarousel data={this.state.techSales.techSalesItems} />
  );

  createHelpDeskSlides = () => (
    <WorkforceCarousel data={this.state.helpDesk.helpDeskItems} />
  );

  render() {
    return (
      <React.Fragment>
        <br />
        <Row className="WorkForceDevPrograms">
          <Col
            className="WorkforceDevelopmentUrlCard"
            style={{ borderColor: "#ff9900" }}
          >
            <h1>AWS</h1>
            {this.createAWSSlides()}
            <Button
              href="https://aws.nebulaacademy.com"
              target="blank"
              style={{ margin: '5px' }}

              variant="warning"
            >
              AWS Program Info
            </Button>
          </Col>
          <Col className="WorkforceDevelopmentUrlCard">
            <h1>Software Engineering</h1>
            {this.createSoftwareEngineeringSlides()}
            <Button
              style={{ margin: '5px' }}
              href="/workshops/4"
              variant="secondary"
            >
              FREE SE Workshop
              </Button>

            <Button
              style={{ margin: '5px' }}
              href="/application"
              variant="secondary"
            >
              SE Bootcamp Application
              </Button>
          </Col>

          <Col className="WorkforceDevelopmentUrlCard">
            <h1>Tech Skills</h1>
            {this.createTechSkillsSlides()}
            <Button
              style={{ margin: '5px' }}
              href="/workshops/1"
              variant="secondary"
            >
              FREE Jobs in Tech Workshop
            </Button>
            
            <Button
              style={{ margin: '5px' }}
              href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=21098006"
              variant="secondary"
            >
              Tech Skills Registration
            </Button>
          </Col>

          <Col className="WorkforceDevelopmentUrlCard">
            <h1>Tech Sales</h1>
            {this.createTechSalesSlides()}
            <Button
              href="/workshops/2"
              style={{ margin: '5px' }}
              variant="secondary"
            >
              FREE Tech Sales Workshop
              </Button>
            <Button
              href="/application"
              style={{ margin: '5px' }}
              variant="secondary"
            >
              Tech Sales Application
              </Button>
          </Col>

          <Col className="WorkforceDevelopmentUrlCard">
            <h1>Help Desk</h1>
            {this.createHelpDeskSlides()}
            <Button
              href="/workshops/3"
              style={{ margin: '5px' }}
              variant="secondary"
            >
              FREE Tech Support Workshop
              </Button>
            <Button
              href="/application"
              style={{ margin: '5px' }}
              variant="secondary"
            >
              Help Desk Application
              </Button>
            {/* <Button
                href="mailto:succeed@neublaacademy.com?subject=Help Desk Bootcamp"
                variant="secondary"
              >
                Register
              </Button> */}
          </Col>

        </Row>
        <InfoPanel state={this.state} />
      </React.Fragment>
    );
  }
}

export default WorkforceDevelopment;
