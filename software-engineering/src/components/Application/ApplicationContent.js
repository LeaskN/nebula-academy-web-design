import React, { Component }from 'react';
import { 
    // Form, Button,
    Container, Col, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';
// import fire from '../../fire';
import './ApplicationContent.css'

class ApplicationContent extends Component {
    state = {

    }
    handleResChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ permResident: element.label});
    }
    handleAuthChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ authToWork: element.label});
    }
    handleGIChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ GIBill: element.label});
    }
    handleVETTECChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ VETTEC: element.label});
    }
    handleCodingXPChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ codingXP: element.label});
    }
    handleIntentionsChange = (e) => {
        let index = e.target.selectedIndex;
        let element = e.target[index];
        this.setState({ element: element});
        this.setState({ intentions: element.label});
    }
    handleSubmit(event) {
        event.preventDefault();
        // let exportData = this.state
        // fire.database().ref('messages').push( exportData );
        this.setState({}); // <- clear the input
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 style={{marginTop:"20px"}}>The application consists of two parts</h2>
                        <Col xs={10}>
                            <h3>PART I:</h3>
                            <Col xs={10}>
                                <p>You provide personal background information (Budget 15 to 60 minutes) </p>
                            </Col>
                        </Col>
                        <Col xs={10}>
                            <h3>PART II:</h3>
                                <Col xs={10}>
                                    <p> Short Essays, Video, and Coding Challenges. (Budget 2 - 4 hours if you have coding experience. If you don't, then expect 4 to 6 hours to go through the recommended tutorials and coding questions) </p>
                                    <p>To preserve your data, do not close your browser session until Part I is complete.</p>
                                    <p>Upon completion of Part I you will receive a link to Part II. </p>
                                    <p>Questions? Contact us at succeed@nebulaacademy.com.  </p>
                                </Col>
                        </Col>
                        <Row>
                            <Col className="formContainer">
                                <Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DYC-61190U-xMgLVy3lNnmhMOgtjMC5JhCXq1Gwz5J5UQjlZMUZKSVFNRUxYVEpTRThOMlo2UEoxTyQlQCN0PWcu&embed=true"
                                    width="850px"
                                    height="800px"
                                    id="myId"
                                    className="form"
                                    display="initial"
                                    position="relative"
                                    />
                            </Col>
                        </Row>
                        <br/>       
                        
                        
                        
                        
                        
                        {/* <Form className="manualContainer" onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({firstName: event.target.value})}} placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({lastName: event.target.value})}} placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required input onChange={(event) => {this.setState({email: event.target.value})}} type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({phone: event.target.value})}} placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required onChange={(event) => {this.setState({address: event.target.value})}} placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onChange={(event) => {this.setState({address2: event.target.value})}}placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({city: event.target.value})}} placeholder="New York City"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({state: event.target.value})}} placeholder="New York"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({zip: event.target.value})}}placeholder="10001"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridOnlineProfile1">
                                    <Form.Label>Online Profile 1</Form.Label>
                                    <Form.Control onChange={(event) => {this.setState({onlineProfile1: event.target.value})}} placeholder="Ex: LinkedIn"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOnlineProfile2">
                                    <Form.Label>Online Profile 2</Form.Label>
                                    <Form.Control onChange={(event) => {this.setState({onlineProfile2: event.target.value})}} placeholder="Ex: GitHub"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOnlineProfile3">
                                    <Form.Label>Online Profile 3</Form.Label>
                                    <Form.Control onChange={(event) => {this.setState({onlineProfile3: event.target.value})}} placeholder="Ex: Portfolio"/>
                                </Form.Group>
                            </Form.Row>
                                <Form.Group controlId="FormControlShortBio">
                                    <Form.Label>Short Bio</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({shortBio: event.target.value})}} as="textarea" rows="3" placeholder="Tell us about yourself." />
                                </Form.Group>
                                <Form.Group controlId="FormControlHearProgram">
                                    <Form.Label>How did you hear about our program?</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({hearAboutProgram: event.target.value})}}as="select">
                                        <placeholder>Select</placeholder>
                                        <option>LinkedIn</option>
                                        <option>Facebook</option>
                                        <option>Google</option>
                                        <option>Twitter</option>
                                        <option>Facebook</option>
                                        <option>Veterans Affaris</option>
                                        <option>Operation Code</option>
                                        <option>Hiring Heroes</option>
                                        <option>IVMF</option>
                                        <option>Friend/Family</option>
                                        <option>Warrior Scholar</option>
                                        <option>Course Report</option>
                                        <option>GirHub</option>
                                        <option>Reddit</option>
                                        <option>Article</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group required controlId="FormControlCohort">
                                    <Form.Label>Which cohort are you applying to?</Form.Label>
                                    <Form.Control required as="select" >
                                        <option aria-label="option 0" label="Select"></option>
                                        <option onChange={(event) => {this.setState({ cohortMarToAug: event.target.value })}} aria-label="option 1" label="March 2 - August 7 2019"/> 
                                        <option onChange={(event) => {this.setState({ cohortSeptToFeb: event.target.value })}} aria-label="option 2" label="September 1 - February 26 2019"/>  
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="FormControlHowAttend">
                                    <Form.Label>How would you like to attend?</Form.Label>
                                        <Form.Check onChange={(event) => {this.setState({ howAttendVirtual: event.target.value })}} aria-label="option 1" label="Virtual"/> 
                                        <Form.Check onChange={(event) => {this.setState({ howAttendInperson: event.target.value })}} aria-label="option 2" label="In-Person (Syosset, NY)"/> 
                                </Form.Group>
                                <Form.Group controlId="FormControlCohort">
                                    <Form.Label>What is your highest education level?</Form.Label>
                                    <Form.Control required onChange={(event) => {this.setState({highestEDU: event.target.value})}} as="select">
                                        <option>High School</option>
                                        <option>Associate Degree</option>
                                        <option>Bacherlors Degree</option>
                                        <option>Masters</option>
                                        <option>Doctorate</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>List any other education not included above:</Form.Label>
                                    <Form.Control onChange={(event) => {this.setState({eduNotIncluded: event.target.value})}} placeholder="Certifications, self-learning, etc.."/>
                                </Form.Group>
                                <Form.Group controlId="FormControlCohort">
                                    <Form.Label>Which of the following do you identify with (select all that apply)?</Form.Label>
                                    <Form.Check onChange={(event) => {this.setState({  identifyCaucasian: event.target.value })}} aria-label="option 1" label="Caucasian"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyAfricanAmerican: event.target.value })}} aria-label="option 2" label="African American"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyHispanicLatin: event.target.value })}} aria-label="option 3" label="Hispanic or Latin Origin"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyAsian: event.target.value })}} aria-label="option 7" label="Asian"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyNativeAmerican: event.target.value })}} aria-label="option 4" label="Native American"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyNativeHawaiianPacificIslander: event.target.value })}} aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyMiddleEastNorthaAfrican: event.target.value })}} aria-label="option 5" label="Middle Eastern or North African"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyFemale: event.target.value })}} aria-label="option 5" label="Female"/>
                                    <Form.Check onChange={(event) => {this.setState({  identifyMale: event.target.value })}} aria-label="option 5" label="Male"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyNonbinary: event.target.value })}} aria-label="option 5" label="Nonbinary"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyLgbtqiap: event.target.value })}} aria-label="option 5" label="LGBTQIA+"/> 
                                    <Form.Check onChange={(event) => {this.setState({  identifyOther: event.target.value })}} aria-label="option 5" label="Other"/> 
                                </Form.Group>
                                <Form.Group required controlId="formGridOnlineProfile3">
                                    <Form.Label>What are your primary intentions for enrolling in this program?</Form.Label>
                                    <Form.Control required onChange={(e) => this.handleIntentionsChange(e)} as="select">
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 1" label="I intend to start a new lob within 180 days of graduating the program."/> 
                                        <option aria-label="option 2" label="I intend to start a business or become a self-employed contractor upon graduation."/> 
                                        <option aria-label="option 3" label="I intend to remain with my current employer upon graduation."/> 
                                        <option aria-label="option 4" label="I am attending the program to learn new skills for self-enrichment and do not intent to pursue a job upon graduation."/> 
                                        <option aria-label="option 5" label="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation."/> 
                                        <option aria-label="option 6" label="Other"/> 
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>Do you have coding experience?</Form.Label>
                                    <Form.Control required onChange={(e) => this.handleCodingXPChange(e)} as="select">
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 1" label="None"/> 
                                        <option aria-label="option 2" label="Beginner (100 hours or less of tutorials)"/> 
                                        <option aria-label="option 3" label="Intermediate (Three or fewer classes and personal projects)"/> 
                                        <option aria-label="option 4" label="Advanced (Degree or professional experience)"/> 
                                    </Form.Control>
                                </Form.Group> 
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>Are you interested in any of the following scholarships?</Form.Label>
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipVeteran: event.target.value })}} aria-label="option 1" label="Veteran In Person"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipWomenReEntry: event.target.value })}} aria-label="option 2" label="Women re-entering the workforce"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipHispanicLatin: event.target.value })}} aria-label="option 3" label="Hispanic or Latin Origin"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipAsian: event.target.value })}} aria-label="option 7" label="Asian"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipNativeAmerican: event.target.value })}} aria-label="option 4" label="Native American"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipNativeHawaiianPacificIslander: event.target.value })}} aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipMiddleEastNorthaAfrican: event.target.value })}} aria-label="option 5" label="Middle Eastern or North African"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipFemale: event.target.value })}} aria-label="option 5" label="Female"/>
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipMale: event.target.value })}} aria-label="option 5" label="Male"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipNonbinary: event.target.value })}} aria-label="option 5" label="Nonbinary"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipLGBTQIAP: event.target.value })}} aria-label="option 5" label="LGBTQIA+"/> 
                                    <Form.Check onChange={(event) => {this.setState({ scholarshipOther: event.target.value })}} aria-label="option 5" label="Other"/> 
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>If you are a VET do you intend to use the VET TEC program to pay for tuition and housing?</Form.Label>
                                    <Form.Control required onChange={(e) => this.handleVETTECChange(e)} as="select">
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 2" label="Yes"/> 
                                        <option aria-label="option 3" label="No"/> 
                                        <option aria-label="option 0" label="I am not a veteran"/> 
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>If you are a VET do you have GI BILL benefits you would like to use?</Form.Label>
                                    <Form.Control required onChange={(e) => this.handleGIChange(e)} as="select">
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 2" label="Yes"/> 
                                        <option aria-label="option 3" label="No"/> 
                                        <option aria-label="option 0" label="I am not a veteran"/> 
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>Are you currently authorized to work in the US?</Form.Label>
                                    <Form.Control required as="select" onChange={(e) => this.handleAuthChange(e)}>
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 1" label="Yes"/> 
                                        <option aria-label="option 2"  label="No"/> 
                                    </Form.Control>
                                </Form.Group> 
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>Are you a US citizen or permanent resident?</Form.Label>
                                    <Form.Control required as="select" onChange={(e) => this.handleResChange(e)}>
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 1" label="Yes"/> 
                                        <option aria-label="option 2" label="No"/> 
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group required  controlId="formGridOnlineProfile3">
                                    <Form.Label>I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll.</Form.Label>
                                        <Form.Control onChange={() => {this.setState({acknowledgement: 'acknowledged'})}} required as="select">
                                            <option aria-label="option 0" label="Select"/> 
                                            <option aria-label="option 1" label="I Acknowledge"/> 
                                        </Form.Control>
                                </Form.Group> 
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> */}
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default ApplicationContent;