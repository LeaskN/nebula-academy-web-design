import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
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
                    <h1>Full Stack Development</h1>
                    <p>
                        Courseware is authored and maintained by AWS and taught by our industry instructors who have earned AWS Academy Accreditation. Regular updates from AWS reflect the pace of innovation, new releases and best practices. 
                    </p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body>
                                        <Card.Title className="subtleButton" onClick={() => this.button1()}>Academy Cloud Foundations</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button4()}>Academy Cloud Developing</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button2()}>Academy Cloud Architect</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button3()}>Academy Cloud Operations</Card.Title>
                                        
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Academy Cloud Foundations</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <h3>Description:</h3>
                                                    <p>AWS Academy Cloud Foundations is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                                                    <h3>Course Objectives</h3>
                                                    <h5>Upon completion of this course, students will be able to:</h5>
                                                    <ul>
                                                        <li> Define the AWS Cloud</li>
                                                        <li>Explain the AWS pricing philosophy</li>
                                                        <li>Identify the global infrastructure components of AWS</li>
                                                        <li>Describe the security and compliance measures of the AWS Cloud, including AWS Identity and Access Management (IAM)</li>
                                                        <li>Create a virtual private cloud (VPC) by using Amazon Virtual Private Cloud (Amazon VPC)</li>
                                                        <li>Demonstrate when to use Amazon Elastic Compute Cloud (Amazon EC2), AWS Lambda, and AWS Elastic Beanstalk</li>
                                                        <li>Differentiate between Amazon Simple Storage Service (Amazon S3), Amazon Elastic Block Store (Amazon EBS), Amazon Elastic File System (Amazon EFS), and Amazon Simple Storage Service Glacier (Amazon S3 Glacier)</li>
                                                        <li>Demonstrate when to use AWS database services, including Amazon Relational Database Service (Amazon RDS), Amazon DynamoDB, Amazon Redshift, and Amazon Aurora</li>
                                                        <li>Explain the architectural principles of the AWS Cloud</li>
                                                        <li>Explore key concepts related to Elastic Load Balancing, Amazon CloudWatch, and Amazon EC2 Auto Scaling</li>
                                                    </ul>
                                                    <h5>Course Outline</h5>
                                                    <h6>Duration</h6>
                                                    <p>Approximately 40 Hours, delivered over a period of six weeks. Actual delivery times will vary from class to class and depending on delivery format.</p>
                                                    <h6>Intended Audience</h6>
                                                    <p>This is an advanced (level 200) course</p>
                                                    <h6>Student Prerequisites (To ensure success in this course, students should have):</h6>
                                                    <ul>
                                                        <li>Completed AWS Academy Cloud Foundations (ACF) or have equivalent experience</li>
                                                        <li>A working knowledge of distrubted systems</li>
                                                        <li>Familiarity with general networking concepts</li>
                                                        <li>Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <Col>
                                            </Col>
                                            <h1>Academy Cloud Architect</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <h3>Description:</h3>
                                                        <p>AWS Academy Cloud Architecting covers the fundamentals of building IT infrastructure on AWS. The course is designed to teach solutions architects how to optimize their use of the AWS Cloud by understanding AWS services and how they fit into cloud-based solutions. Although architectural solutions can differ depending on the industry, type of application, and size of the business, this course emphasizes best practices for the AWS Cloud that apply to all of them. It also recommends various design patterns to help you think through the process of architecting optimal IT solutions on AWS. Throughout the course, students will explore case studies that showcase how some AWS customers have designed their infrastructures and the strategies and services that they have implemented. Finally, this course provides opportunities for students to build a variety of infrastructures through a guided, hands-on approach.</p>
                                                    <h3>Course Objectives</h3>
                                                    <h5>Upon completion of this course, students will be able to:</h5>
                                                    <ul>
                                                        <li>Describe how cloud adoption transforms the way IT systems work</li>
                                                        <li>Describe the benefits of cloud computing with Amazon Web Services</li>
                                                        <li>iscuss how to design systems that are secure, reliable, high-performing, and cost efficient</li>
                                                        <li>Describe principles to consider when migrating or designing new applications for the cloud</li>
                                                        <li>Identify the design patterns and architectural options applied in a variety of use cases</li>
                                                        <li>Define high availability, fault tolerance, and scalability</li>
                                                        <li>Discuss how to avoid single points of failure</li>
                                                        <li>List AWS services that have built-in fault tolerance or can be designed for fault tolerance</li>
                                                        <li>Describe why load balancing is a key architectural component for AWS-powered applications</li>
                                                        <li>Describe how to leverage the capabilities of AWS to support automation</li>
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
                                                    <h5>Course Outline</h5>
                                                    <h6>Duration</h6>
                                                    <p>Approximately 40 Hours, delivered over a period of six weeks. Actual delivery times will vary from class to class and depending on delivery format.</p>
                                                    <h6>Intended Audience</h6>
                                                    <p>This is an advanced (level 200) course</p>
                                                    <h6>Student Prerequisites (To ensure success in this course, students should have):</h6>
                                                    <ul>
                                                        <li> Completed AWS Academy Cloud Foundations (ACF) or have equivalent experience</li>
                                                        <li> A working knowledge of distributed systems</li>
                                                        <li> Familiarity with general networking concepts</li>
                                                        <li> A working knowledge of multi-tier architectures</li>
                                                        <li> Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Academy Cloud Operations</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <h3>Description:</h3>
                                                        <p>AWS Academy Cloud Operations is designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles. It will also help prepare them to take the AWS SysOps Administrator – Associate exam. Emphasizing best practices in the AWS Cloud and recommended design patterns, this course will teach students how to solve problems and troubleshoot various scenarios. The course will show students how to create automatable and repeatable deployments of networks and systems on AWS and covers specific AWS features and tools related to configuration and deployment. With case studies and demonstrations, students will learn how some AWS customers design their infrastructures and implement various strategies and services. Students will also have the opportunity to build a variety of infrastructures via guided, hands-on activities.</p>
                                                    <h3>Curriculum Objectives</h3>
                                                    <h5>This course teaches students how to:</h5>
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
                                                    <li> Create and configure automated and repeatable deployments with tools such as Amazon Machine Images (AMIs) and AWS CloudFormation</li> 
                                                    </ul>
                                                    <h5>Course Outline</h5>
                                                    <h6>Duration</h6>
                                                    <p>Approximately 40 Hours, delivered over a period of six weeks. Actual delivery times will vary from class to class and depending on delivery format.</p>
                                                    <h6>Intended Audience</h6>
                                                    <p>This is an intermediate (level 200) course</p>
                                                    <h5>Employment Outcomes</h5>
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
                                                    <h6>Student Prerequisites (AWS Academy Cloud Developing requires a strong foundation in IT concepts and skills. To ensure success, students should have:):</h6>
                                                    <ul>
                                                        <li>Completed AWS Academy Cloud Foundations or have equivalent experience</li>
                                                        <li>A working knowledge of at least one scripting language</li>
                                                        <li>Familiarity with Linux, the command line and Application Programming Interfaces (APIs)</li>
                                                        <li>Familiarity with virtualization and distributed computing</li>
                                                        <li>An understanding of version control (e.g., Git)</li>
                                                        <li>An understanding of data storage mechanisms such as SQL</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Academy Cloud Developing</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <h3>Description:</h3>
                                                        <p>AWS Academy Cloud Developing is designed to help students gain technical expertise in development using cloud technologies and prepare them to take the AWS Certified Developer – Associate level AWS Certification exam. The curriculum is delivered through instructor-led classes, knowledge assessments, and hands-on labs. Students will also have access to course manuals, online knowledge assessments, a free practice certification exam, and a discount voucher for the certification exam.</p>
                                                    <h3>Curriculum Objectives</h3>
                                                    <h5>AWS Cloud Developing teaches students how to:</h5>
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
                                                    <h5>Course Outline</h5>
                                                    <h6>Duration</h6>
                                                    <p>Approximately 40 hours, delivered over a period of four weeks. Actual delivery times will vary from class to class and depending on delivery format.</p>
                                                    <h6>Intended Audience</h6>
                                                    <p>Undergraduate, graduate, or professional students seeking cloud developing expertise. This is an intermediate (level 200) course.</p>
                                                    <h6>Student Prerequisites (AWS Academy Cloud Developing requires a strong foundation in IT concepts and skills. To ensure success in this course, students should have):</h6>
                                                    <ul>
                                                        <li> Completed AWS Academy Cloud Foundations course or have equivalent experience</li>
                                                        <li> A working knowledge of distributed systems</li>
                                                        <li> Familiarity with general networking concepts</li>
                                                        <li> A working knowledge of multi-tier architectures</li>
                                                        <li> Familiarity with cloud computing concepts</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
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
                                <Card.Body>
                                    <Card.Title>Partners</Card.Title>
                                    <Card.Text>
                                        Nebula Academy is helping companies prepare for the future of work.  Let us help you with your recruitment needs, as we develop the talent to grow your business. Learn more about our Partner program and how your company can be a part of addressing the skills gap so you can scale your business.
                                    </Card.Text>
                                    <Button href="/partners" variant="primary">Partners</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={6} className="curriculumBackImage2">
                            <Card className="overImage">
                                <Card.Body>
                                    <Card.Title>Guest Speakers</Card.Title>
                                    <Card.Text>
                                        The information technology field is vast and offers opportunities that span every industry.  At Nebula Academy we offer our participants the opportunity to hear and speak to industry experts from diverse communities across industries.
                                    </Card.Text>
                                    <Button href="/guestspeakers" variant="primary">Guest Speakers</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton1()}>In Person Sessions</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton2()}>Live Remote Sessions</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton3()}>Lab Hours</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton4()}>Instructor Support Hours</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton5()}> Exam Prep Hours</Card.Title>
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>In Person Sessions</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>The Nebula Academy Software Engineering program is 22 weeks long.</p>
                                                    <p>We primarily work in 4-week sprints where we are learning, practicing, and implementing new and previously covered technologies. We finish the 4-week cycle by creating projects.</p>
                                                    <p>The following week is flexible where students are covering their weak areas, fixing old or current projects, or taking some time to recuperate.</p>
                                                    <p>We can't do anything with burnt-out participants, so we want to ensure that participants are pacing themselves for the long-haul: employment.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Live Remote Sessions</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>The daily schedule will vary but it will generally look like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up is a classic developer team start to the day where issues, thoughts, and schedules are shared.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>There are specific problems which can be practiced in order to build coding competency and interview ability. We practice them daily.</p>
                                                    <p>11:00 AM: New Subject Matter</p>
                                                    <p style={{marginLeft:"20px"}}>We will be learning our new topics at this time specifically in an introduction and coaching style.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>We provide lunch and snacks to all participants in our program. This is an immersive program and we need sharp brains that are fed and ready to learn. Whether you are paying for the program yourself, by your company, or have been granted a scholarship we create an inclusive learning environment that includes a healthy lunch and snacks each day. We do also have a fridge so participants can bring in meals if these choose to.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Project based learning. Here we will be continuing with the new subject specifically in a hands-on style.</p>
                                                    <p>3:00 PM: Content Review</p>
                                                    <p style={{marginLeft:"20px"}}>Old Material. At the end of the day we want to cover old topics that students feel they need to brush up on.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>Participants frequently are working on an issue, new material, or a project and extend their day beyond 4:00 PM but this is the "official" end of day.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Lab Hours</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Students will have to Register themselves both in and outside of the classroom. We recommend practicing around 2-4 additional hours each night and 4-6 hours on the weekend.</p>
                                                <p>We understand that this is intense and have built in planning to ensure that our students don't burn out. Firstly this additional practice time isn't required, secondly 5th weeks are weeks that can be used to rest, relax, and recuperate.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Instructor Support Hours</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>As previously mentioned, we typically have four weeks of study and practice followed by one week of unspecified time.</p>
                                                <p>Depending upon where we are in the course this can vary for different students. Some will relax, some will work on previous projects, and others will study previous topics.</p>
                                                <p>We follow a <a href="https://www.redcort.com/us-federal-bank-holidays">National US Holiday Calendar</a> similar to this link and build our recuperation weeks around them.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Exam Prep Hours</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>In the last couple weeks of the course our daily schedule will not revolve around practice and learning but instead around registrations, projects, interview preparation, mock interviews, studying and taking certification exams, meeting with career coaches to outline short list of employers, completing job registrations, and creating a plan to ensure they land a job.</p>
                                                <p>This means our daily schedule will look more like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up becomes even more important as participant schedules will vary and so will topics covered. By doing this students will see similarities and be able to help one another with their problems.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>This is core interview practice and will be kept up throughout.</p>
                                                    <p>11:00 AM: Registering for jobs</p>
                                                    <p style={{marginLeft:"20px"}}>Every day our participants will be sending out new registrations. We want to ensure participants are hitting both quality and quantity.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>Having a set time for lunch helps fight burnout and is still suggested as something the students should observe for the full hour.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Updating and fixing projects. Unless a participant has a new project that they are passionate about we don't suggest starting new projects at this time. However we definitely want our participants to dive in deeper on older projects.</p>
                                                    <p>3:00 PM: Interview Preparation</p>
                                                    <p style={{marginLeft:"20px"}}>Interview prep. This can take the form of Jeopardy games, white-boarding, or coding challenges.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>We suggest taking the time to visit some hiring partners, local companies with job listings, & doing some "one-click" registrations through registration websites like LinkedIn, Microsoft, Google, Amazon, Company Partner Sites, ZipRecruiter, & Glassdoor.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;
