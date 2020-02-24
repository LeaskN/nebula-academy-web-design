import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        },
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
                    <h1>Curriculum designed to support student centered outcomes: Addressing the diverse learning needs of a modern classroom.</h1>
                    <p>Our curriculum is designed by applying cognitive neuroscience research, our own experience with working with students and educators, blended with real-world industry experience. Our instructors teach across populations of students, educators, and adults in the workforce. This model brings greater value to our programs and to our participants. Our content and teaching model is continuously improved through feedback from students, educators, and our industry partners.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()} 
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Design the Strategy
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()} 
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Budgets & Timelines to Support your Capabilities
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            Building Capacity
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            Execution on Strategy
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button5()}
                                            className={this.state.toggle.button5 ? " subtleButton toggled" : "subtleButton"}>
                                            Measuring Outcomes and Building on Success
                                            </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns offWhite">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Design the Strategy:</h1>
                                            <Row>
                                            <h3>Let us help you build a successful strategy to implement computer science in your school or district</h3>
                                                <Col xs={10}md={12}>
                                                    <p>Our engagement begins by meeting with school leadership teams tasked to define Computer Science strategy. Understanding the culture and goals of our customers is our top priority so that we can design strategies that meet customer needs, both short and long-term. Our initial discussions will revolve around computer science content knowledge and relevant pedagogical practices that need to be included in all teacher preparation programs, and how those differentiate from multiple subject and single subject teaching credentials.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Budgets & Timelines to Support your Capabilities</h1>
                                        <Row>
                                            <Col xs={10} md={12}>
                                                <p>Every customer has unique budget structures that support new initiatives and long-term planning goals. Understanding cost models for implementation along with current capacity and future capacity allows for a strategy that is structured for long term success.</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Building Capacity:</h1>
                                        <Row>
                                            {/* <Col xs={1} md={3}>
                                                <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                            </Col> */}
                                            <Col xs={10} md={12}>
                                                <p>We support customers in better understanding resource needs to build long-term computer science programs. Culture changes may need to be considered in order to ensure long term success and the integration of computer science across K-12. Through our coaching model and industry experience and our relationships our instructors help customers reach their goals and overall vision of what success looks like.</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Execution on Strategy:</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>Through collaboration with customers we design a strategy that defines a vision, strategic goals, budget alignment, and time-line. Through a multi-year plan, we introduce computer science at a pace that fits our customers’ culture and capacity to successfully deliver.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Measuring Outcomes and Building on Success:</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>As a research focused organization, we offer an assessment structure for both teachers and students to evaluate and measure learning outcomes. throughout our engagement model. This structure creates the opportunity to provide continuous improvement in the overall computer science initiative. Demonstrating success is accomplished through the metrics that we set with customers, which align with organization’s overall goals, and what success looks like for each customer and each engagement.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                    <h1>Execution</h1>
                    <p>Computer science education should involve real-world problem solving, engaging, meaningful, and personally relevant activities for students that focus on problem-solving, critical thinking, and creativity while emphasizing the ethical impacts of computing. </p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.scheduleButton1()}
                                            className={this.state.toggle2.scheduleButton1 ? " subtleButton toggled" : "subtleButton"}>
                                            Initial Meeting
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton2()}
                                            className={this.state.toggle2.scheduleButton2 ? " subtleButton toggled" : "subtleButton"}>
                                            Planned First Step
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton3()}
                                            className={this.state.toggle2.scheduleButton3 ? " subtleButton toggled" : "subtleButton"}>
                                            Teacher Training
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton4()}
                                            className={this.state.toggle2.scheduleButton4 ? " subtleButton toggled" : "subtleButton"}>
                                            Systems Setups & Tech Integrations
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton5()}
                                            className={this.state.toggle2.scheduleButton5 ? " subtleButton toggled" : "subtleButton"}>
                                            Teaching in the Classroom
                                        </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Initial Meeting</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>In order to support a district or school with a full strategy to implement computer science programs whether that is for K-12 , Middle to High School, or High School alone, the first step is understanding the current capacity and programs.  Our success together is dependent on understanding the culture, budgets, vision, and teacher capacity. Understanding the vision and what it means to implement Computer Science is an important first step.  Many schools understand how to teach students to use technology and there can be confusion on what it means to implement Computer Science into a school or district.  Computer science calls upon students to understand why and how computing technologies work, and then to build upon that conceptual knowledge by creating computational artifacts. Project based learning with integration of computer science understanding helps to provide building blocks to deeper knowledge and abilities. Providing students the opportunity to problem solve using this knowledge and aligning to real world problems to apply and demonstrate competencies.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Planned First Step</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    As we engage with the leadership team to define the strategy and timeline our engagement will evolve to bring in a team of diverse members that may consist of one or more roles from the school board, administration, technology instructors, technology support staff, educators across learning domains, parent organization, community partners, and students. This is an effort that may require change in culture, and change in how and what we teach. To ensure its success having a collaborative group of stakeholders ensures the vision is met with perspectives from all groups that will be impacted.
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Teacher Training</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>Teacher training is critical to implementing a successful vision that transforms students and provides them the ability to better understand the evolution of technology and its role in their future.  Teaching computer science requires a different approach from traditional teaching and the first steps to developing teacher capacity is understanding the science behind learning.  We have learned more about the brain in the past 20 years than we have in our lifetime and we still have so much more to learn.  What we do know is that teaching the way we have in the past will not carry us forward into the future.  By helping to support teachers with new cognitive neuroscience understandings that support building growth mindsets, self-awareness, and stronger communication skills we can create greater learning outcomes for our students. We need to teach higher level thinking skills and we first have to ensure our teachers are prepared to teach differently before we begin to teach computer science skills and understanding.</p>
                                                    <p>A computer science strategy will fail if we skip this step.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Systems Setups & Tech Integrations</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>Vision first, cognitive neuroscience next, and now we have a strong foundation to build upon.  We are asking teachers to teach collaboration skills but we first need to teach teachers how to collaborative themselves.  Building a culture within the administration and the educators where they are able to work collaboratively both digitally and in person supports the needs of a modern workforce. Computer and mathematical occupations are among the fastest-growing and most lucrative sectors in the modern economy and will continue to drive demand from academia to ensure our students are prepared for the growing needs of industry. Setting up a professional learning environment for both the administration and all supporting staff within the school enables the continuous development of our skills so that we can stay aligned with industry not behind. What we teach our students must be what our teachers understand and our administration and staff utilize to ensure we are able to provide real-world understanding of how technology impacts us today and in our future. </p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Teaching in the Classroom</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>Practice makes perfect, and that requires getting out of our comfort zone to fail and learn from our failures. When we are introducing new concepts and new teaching approaches it is critical that we provide the opportunity for educators to fail and to fail without consequences. If we don't provide that opportunity any professional development will not stick.  It is our nature to turn to what we are comfortable with and to avoid being uncomfortable. Building confidence in new concepts and new ways of doing things takes time to create changed behavior.  Behavior that transforms our gray matter in our brain so that it becomes the norm and reshapes our thinking. Our professional development programs are designed to push educators out of their comfort zone and enable them to fail again and again and to reflect and learn from those failures to build new maps in the brain and to shape new behaviors.  We support educators in and out of the classroom so that they can fail and learn and so that they can see how teaching approaches impact results in the classroom through observation and co-teaching.</p>
                                                </Col>
                                            </Row>
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
