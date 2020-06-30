import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1: true,
        }
    };
    button1 = () => {
        this.setState({ toggle: {button1: true, button2: false, button3: false, button4: false, button5: false } })
    }
    button2 = () => {
        this.setState({ toggle: {button1: false, button2: true, button3: false, button4: false, button5: false } })
    }
    button3 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: true, button4: false, button5: false } })
    }
    button4 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: true, button5: false } })
    }
    button5 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: false, button5: true } })
    }
    scheduleButton1 = () => {
        this.setState({ toggle2:{scheduleButton1: true, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton2 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: true, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton3 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: true, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton4 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: true, scheduleButton5: false}})
    }
    scheduleButton5 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: true}})
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h1>AWS Academy courses offered by Nebula Academy</h1>
                    <p>Courseware is authored and maintained by AWS and taught by our industry instructors who have earned AWS Academy Accreditation. Regular updates from AWS reflect the pace of innovation, new releases and best practices. </p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <div className="noPadding">
                                        <div 
                                            onClick={() => this.button1()}
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            AWS Academy Cloud Foundations
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.button2()}
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            AWS Academy Cloud Architecting
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            AWS Academy Cloud Operations
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            AWS Academy Cloud Developing
                                        </div>
                                    </div> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns" style={{padding: '20px'}}>
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <div >
                                            <h1>AWS Academy Cloud Foundations</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>AWS Academy Cloud Foundations is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                                                    <h4>Curriculum Objectives</h4>
                                                    <p>AWS Cloud Developing teaches students how to:</p>
                                                    <ul>
                                                        <li> Define the AWS Cloud</li>
                                                        <li> Explain the AWS pricing philosophy</li>
                                                        <li> Identify the global infrastructure components of AWS</li>
                                                        <li> Describe the security and compliance measures of the AWS Cloud, including AWS Identity and Access Management (IAM)</li>
                                                        <li> Create a virtual private cloud (VPC) by using Amazon Virtual Private Cloud (Amazon VPC)</li>
                                                        <li> Demonstrate when to use Amazon Elastic Compute Cloud (Amazon EC2), AWS Lambda, and AWS Elastic Beanstalk</li>
                                                        <li> Differentiate between Amazon Simple Storage Service (Amazon S3), Amazon Elastic Block Store (Amazon EBS), Amazon Elastic File System (Amazon EFS), and Amazon Simple Storage Service Glacier (Amazon S3 Glacier)</li>
                                                        <li> Demonstrate when to use AWS database services, including Amazon Relational Database Service (Amazon RDS), Amazon DynamoDB, Amazon Redshift, and Amazon Aurora</li>
                                                        <li> Explain the architectural principles of the AWS Cloud</li>
                                                        <li> Explore key concepts related to Elastic Load Balancing, Amazon CloudWatch, and Amazon EC2 Auto Scaling</li>
                                                    </ul>
                                                    <h4>Course Outline</h4>
                                                    <p>Intended Audience:</p>
                                                    <ul><li>This is an intermediate (200-level) course</li></ul>
                                                    <h4>Student Prerequisites</h4>
                                                    <ul><li>AWS Academy Cloud Developing requires a strong foundation in IT concepts and skills. To ensure success in this course, students should have:</li></ul>
                                                    <ul>
                                                        <li>Completed AWS Academy Cloud Foundations or have equivalent experience</li>
                                                        <li>A working knowledge of distributed systems</li>
                                                        <li>Familiarity with general networking concepts</li>
                                                        <li>A working knowledge of multi-tier architectures</li>
                                                        <li>Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                    </div>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                            <Col>
                                            </Col>
                                            <h1>AWS Academy Cloud Architecting</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>AWS Academy Cloud Architecting covers the fundamentals of building IT infrastructure on AWS. The course is designed to teach solutions architects how to optimize their use of the AWS Cloud by understanding AWS services and how they fit into cloud-based solutions. Although architectural solutions can differ depending on the industry, type of application, and size of the business, this course emphasizes best practices for the AWS Cloud that apply to all of them. It also recommends various design patterns to help you think through the process of architecting optimal IT solutions on AWS. Throughout the course, students will explore case studies that showcase how some AWS customers have designed their infrastructures and the strategies and services that they have implemented. Finally, this course provides opportunities for students to build a variety of infrastructures through a guided, hands-on approach.</p>
                                                    <h4>COURSE OBJECTIVES</h4>
                                                    <p>Upon completion of this course, students will be able to:</p>
                                                    <ul>
                                                        <li> Describe how cloud adoption transforms the way IT systems work</li>
                                                        <li> Describe the benefits of cloud computing with Amazon Web Services</li>
                                                        <li> Discuss how to design systems that are secure, reliable, high-performing, and cost efficient</li>
                                                        <li> Describe principles to consider when migrating or designing new applications for the cloud</li>
                                                        <li> Identify the design patterns and architectural options applied in a variety of use cases</li>
                                                        <li> Define high availability, fault tolerance, and scalability</li>
                                                        <li> Discuss how to avoid single points of failure</li>
                                                        <li> List AWS services that have built-in fault tolerance or can be designed for fault</li>
                                                        <li> Describe why load balancing is a key architectural component for AWS-powered applications</li>
                                                        <li> Identify the benefits of Infrastructure as Code</li>
                                                        <li> Describe how to leverage the capabilities of AWS to support automation</li>
                                                        <li> Create, manage, provision, and update related resources using AWS CloudFormation</li>
                                                        <li> Articulate the importance of making systems highly cohesive and loosely coupled</li>
                                                        <li> Describe system coupling to support the distributed nature of applications built for the cloud</li>
                                                        <li> Describe database services for storing and deploying web-accessible applications</li>
                                                        <li> Compare structured query language (SQL) databases with NoSQL databases</li>
                                                        <li> Describe how the AWS Well-Architected Framework improves cloud-based architectures</li>
                                                        <li> Describe the business impact of design decisions</li>
                                                        <li> Identify the design principles and best practices of the Operational Excellence pillar</li>
                                                        <li> Describe how to secure data at every layer in the application</li>
                                                        <li> Describe the appropriate tools and services to provide security-focused content</li>
                                                        <li> Describe the design principles and best practices of the Reliability pillar.</li>
                                                        <li> Select compute, storage, database, and networking resources to improve performance</li>
                                                        <li> Evaluate the most important performance metrics for your applications</li>
                                                        <li> Follow best practices to eliminate unneeded costs or suboptimal resources</li>
                                                        <li> Troubleshoot common errors</li>
                                                    </ul>
                                                    <h4>Course Outline</h4>
                                                    <p>Intended Audience:</p>
                                                    <ul><li>This is an intermediate (200-level) course</li></ul>
                                                    <h4>Student Prerequisites</h4>
                                                    <p>To ensure success in this course, students should have:</p>
                                                    <ul>
                                                        <li> Completed AWS Academy Cloud Foundations or have equivalent experience</li>
                                                        <li> A working knowledge of distributed systems</li>
                                                        <li> Familiarity with general networking concepts</li>
                                                        <li> A working knowledge of multi-tier architectures</li>
                                                        <li> Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                            <h1>AWS Academy Cloud Operations</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>AWS Academy Cloud Operations is designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles. It will also help prepare them to take the AWS SysOps Administrator – Associate exam. Emphasizing best practices in the AWS Cloud and recommended design patterns, this course will teach students how to solve problems and troubleshoot various scenarios. The course will show students how to create automatable and repeatable deployments of networks and systems on AWS and covers specific AWS features and tools related to configuration and deployment. With case studies and demonstrations, students will learn how some AWS customers design their infrastructures and implement various strategies and services. Students will also have the opportunity to build a variety of infrastructures via guided, hands-on activities.</p>
                                                    <h4>COURSE OBJECTIVES</h4>
                                                    <p>Upon completion of this course, students will be able to:</p>
                                                    <ul>
                                                        <li> Understand AWS infrastructure as it relates to system operations, such as global infrastructure, core services, and account security</li>
                                                        <li> Use the AWS Command Line Interface (AWS CLI), and understand additional administration and development tools</li>
                                                        <li> Manage, secure, and scale compute instances on AWS</li>
                                                        <li> Manage, secure, and scale configurations</li>
                                                        <li> Identify container services and AWS services that are available for serverless computing.</li>
                                                        <li> Manage, secure, and scale databases on AWS</li>
                                                        <li> Build virtual private networks with Amazon Virtual Private Cloud (Amazon VPC)</li>
                                                        <li> Configure and manage storage options using the storage services offered with AWS</li>
                                                        <li> Monitor the health of your infrastructure with services such as Amazon CloudWatch, AWS CloudTrail, and AWS Config</li>
                                                        <li> Manage resource consumption in an AWS account by using tags, Amazon CloudWatch, and AWS Trusted Advisor</li>
                                                        <li> Create and configure automated and repeatable deployments with tools such as Amazon Machine Images (AMIs) and AWS CloudFormation </li>
                                                    </ul>
                                                    <h4>Course Outline</h4>
                                                    <p>Intended Audience:</p>
                                                    <ul><li>This is an intermediate (200-level) course</li></ul>
                                                    <h4>Employment Outcomes</h4>
                                                    <p>This course is intended for prospective operations/support/DevOps roles including:</p>
                                                    <ul>
                                                        <li>Operations Engineer</li>
                                                        <li>Support Engineer</li>
                                                        <li>Application Support Engineer</li>
                                                        <li>Product Support Engineer</li>
                                                        <li>Customer Support Engineer</li>
                                                        <li>Support Specialist</li>
                                                        <li>Junior DevOps Engineer</li>
                                                        <li>DevOps Engineer</li>
                                                        <li>Operations Engineer</li>
                                                        <li>Platform Engineer</li>
                                                        <li>Cloud Engineer</li>
                                                        <li>Site Reliability Engineer</li>
                                                    </ul>
                                                    <h4>Student Prerequisites</h4>
                                                    <p>AWS Academy Cloud Developing requires a strong foundation in IT concepts and skills. To ensure success, students should have:</p>
                                                    <ul>
                                                        <li> Completed AWS Academy Cloud Foundations or have equivalent experience</li>
                                                        <li> A working knowledge of at least one scripting language</li>
                                                        <li> Familiarity with Linux, the command line and Application Programming Interfaces (APIs)</li>
                                                        <li> Familiarity with virtualization and distributed computing</li>
                                                        <li> An understanding of version control (e.g., Git)</li>
                                                        <li> An understanding of data storage mechanisms such as SQL</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                            <h1>AWS Academy Cloud Developing</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>AWS Academy Cloud Developing is designed to help students gain technical expertise in development using cloud technologies and prepare them to take the AWS Certified Developer – Associate level AWS Certification exam. The curriculum is delivered through instructor-led classes, knowledge assessments, and hands-on labs. Students will also have access to course manuals, online knowledge assessments, a free practice certification exam, and a discount voucher for the certification exam.</p>
                                                    <h4>Curriculum Objectives</h4>
                                                    <p>AWS Cloud Developing teaches students how to:</p>
                                                    <ul>
                                                        <li>Recall cloud computing services and models</li>
                                                        <li>Describe developing on AWS</li>
                                                        <li>Configure AWS Identity and Access Management for programmatic access</li>
                                                        <li>Configure storage with Amazon S3 programmatically</li>
                                                        <li>Develop with DynamoDB</li>
                                                        <li>Explain caching</li>
                                                        <li>Configure containers</li>
                                                        <li>Develop event-driven solutions with Lambda</li>
                                                        <li>Configure solutions with API Gateway</li>
                                                        <li>Develop solutions with SQS and SNS</li>
                                                        <li>Describe the use of Step Functions</li>
                                                        <li>Identify best practice for building secure applications</li>
                                                        <li>Identify best practice for deploying applications</li>
                                                    </ul>
                                                    <h4>Course Outline</h4>
                                                    <p>Intended Audience:</p>
                                                    <ul><li>Undergraduate, graduate, or professional students seeking cloud developing expertise. This is an intermediate (200-level) course.</li></ul>
                                                    <h4>Student Prerequisites</h4>
                                                    <ul><li>AWS Academy Cloud Developing requires a strong foundation in IT concepts and skills. To ensure success in this course, students should have:</li></ul>
                                                    <ul>
                                                        <li>Completed AWS Academy Cloud Foundations course or have equivalent experience</li>
                                                        <li>A working knowledge of distributed systems</li>
                                                        <li>Familiarity with general networking concepts</li>
                                                        <li>A working knowledge of multi-tier architectures</li>
                                                        <li>Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                        </Col>
                    </Row>
                    <Row>
                        <h1>Schedule & Delivery Options</h1>
                        <p>We understand that a majority of our participants may be juggling other education, career, or personal priorities. Our schedule provides flexibility to ensure participants can balance gaining new skills while managing existing commitments.</p>
                    </Row>
                    <Row className="sponsorsArea">
                        <Col xs={12} lg={6} xl={6} className="curriculumBackImage1">
                            <Card className="overImage">
                                <div style={{padding: '10px'}}>
                                    <div>Partners</div>
                                    <div>
                                        Nebula Academy is helping companies prepare for the future of work.  Let us help you with your recruitment needs, as we develop the talent to grow your business. Learn more about our Partner program and how your company can be a part of addressing the skills gap so you can scale your business.
                                    </div>
                                    <div id="spacer"></div>
                                    <Button className="bottom" href="/partners" variant="warning">Partners</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={6} className="curriculumBackImage2">
                            <Card className="overImage">
                                <div style={{padding: '10px'}}>
                                    <div>Guest Speakers</div>
                                    <div>
                                        The information technology field is vast and offers opportunities that span every industry.  At Nebula Academy we offer our participants the opportunity to hear and speak to industry experts from diverse communities across industries.
                                    </div>
                                    <div id="spacer"></div>
                                    <Button className="bottom" href="/guestspeakers" variant="warning">Guest Speakers</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <div className="noPadding">
                                        <div 
                                            onClick={() => this.scheduleButton1()}
                                            className={this.state.toggle2.scheduleButton1 ? " subtleButton toggled" : "subtleButton"}>
                                            In Person Sessions
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.scheduleButton2()}
                                            className={this.state.toggle2.scheduleButton2 ? " subtleButton toggled" : "subtleButton"}>
                                            Live Remote Sessions
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.scheduleButton3()}
                                            className={this.state.toggle2.scheduleButton3 ? " subtleButton toggled" : "subtleButton"}>
                                            Lab Hours
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.scheduleButton4()}
                                            className={this.state.toggle2.scheduleButton4 ? " subtleButton toggled" : "subtleButton"}>
                                            Instructor Support Hours
                                        </div>
                                        <hr className="noMargin"/>
                                        <div 
                                            onClick={() => this.scheduleButton5()}
                                            className={this.state.toggle2.scheduleButton5 ? " subtleButton toggled" : "subtleButton"}>
                                                Exam Prep Hours
                                            </div>
                                    </div> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                            <h1>In Person Sessions</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>All in person sessions take place at 180 Michael Drive in Syosset NY 11791.  To locate our facility drive around the back of the building and look for our signs and entrance in the back-parking lot.</p>
                                                    <ul>
                                                        <li>All sessions begin promptly at 9:00 AM and end promptly at 4:00 PM</li>
                                                        <li>Participants can stay and continue working on labs after 4:00 PM and until closing.  Instructors are available depending on scheduling of other programs each day after 4:00 PM.</li>
                                                        <li>Participants can utilize our laptops within the facility and on as available basis, we cannot guarantee availability of a laptop. We recommend bringing your own each day.</li>
                                                        <li>There is a kitchen with refrigerator and microwave for those bringing a lunch. We suggest bringing a refillable water bottle as we have a water cooler available.</li>
                                                    </ul>
                                                    <p>What to expect for the flow of learning each day:</p>
                                                    <ul>
                                                        <li>Instructor led content and lab time will vary throughout each day.</li>
                                                        <li>Participants who invest in additional lab time are more likely to be successful in passing exams and to be able to demonstrate learned skills in interviews and on the job.</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <h1>Live Remote Sessions</h1>
                                        <div>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <ul>
                                                    <li>Participants are provided details on how to access the online sessions via Zoom calls upon registration and before sessions begin.</li>
                                                    <li>Participants will have access to our Microsoft Teams environment for both during and outside class hours engagement.</li>
                                                    <li>All live remote sessions are a blend of participates who are in the classroom and in the virtual classroom.</li>
                                                    <li>Microsoft Teams is monitored by instructors throughout the sessions to ensure remote experiences are as close to in person as possible.</li>
                                                    <li>We recommend that you are hardwired to an internet connection during live sessions to avoid wireless delays in connectivity</li>
                                                    <li>Instructions for setup and access to any additional content will be shared with participations via Microsoft Teams.</li>
                                                </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                        <h1>Lab Hours</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Lab time is blended throughout the session days and we encourage participants to utilize independent study time on labs outside of class.</li>
                                                        <li>Participants have access to labs from outside of class</li>
                                                        <li>Lab sessions are timed and in general participants have ample time to complete lab assignments</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <h1>Instructor Support Hours</h1>
                                        <div>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Instructors are available via Microsoft Teams for support participants outside of class hours, expect a response to questions from instructors and students as this is a community contribution environment.</li>
                                                        <li>Instructors are available for scheduled 1:1 sessions during the program hours as necessary</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <div style={{padding: '10px'}}>
                                        <div>
                                        <h1>Exam Prep Hours</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Designated hours are setup during program sessions to support participants with preparing for certification exams.</li>
                                                        <li>All scheduled sessions are posted within Microsoft Teams for awareness, we highly recommend participants work with other program participants in study groups to support successful exam scores.</li>
                                                        <li>Participants can schedule 1:1 sessions with instructors during program hours</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </Card>: null}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;