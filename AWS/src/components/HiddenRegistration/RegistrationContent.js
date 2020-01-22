import React, { Component }from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './RegistrationContent.css'

class registrationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    getData(e) {
        e.preventDefault();
        fetch("https://reqres.in/api/users/2")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .then(console.log(this.state));
    }
    putData(e) {
        e.preventDefault();
        console.log(this.state)
        if(this.state.acknowledgement){                
            fetch("https://reqres.in/api/users/2", {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let isList = target.parentElement.className;
        let listName = target.parentElement.parentElement.className.split(" ")[0];
        
        if(isList === 'list'){
            if(!this.state[listName]){
                this.setState({
                    [listName]: [name]
                })
            } else {
                let nameArr = [this.state[listName].concat(name)].flat()
                this.setState({
                    [listName]: nameArr
                })
            }
        } else {
            if (value==="true"){
                value = true
            }
            if (value==="false"){
                value = false
            }
            this.setState({
                [name]: value
            });
        }
        console.log(this.state)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <h2 style={{marginTop:"20px"}}>The application consists of two parts: Part 1 is the following form on this page. Part 2 is an interview to understand a participants motivations, commitments, & capacity.</h2>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col className="alignCenter">
                                <h3>Completing online registration:</h3>
                                    <p>To preserve your data, do not close your browser session until Phase I is complete. Upon completion of Phase I you will receive a link via email to begin Phase II. Questions? Contact us at succeed@nebulaacademyny.com. Phone: 631-468-7475</p>
                            </Col>
                        </Row>
                        <Form className="manualContainer" onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First</Form.Label>
                                    <Form.Control required input onChange={this.handleInputChange} name="First_Name__c" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Last_Name__c" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required input onChange={this.handleInputChange} name="Email_ID__c" type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Contact_Number__c" placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Mailing Address 1</Form.Label>
                                    <Form.Control required input onChange={this.handleInputChange} name="Mailing_Address__c" placeholder="Mailing Address" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Mailing Address 2</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="Mailing_Address2__c" placeholder="Additional address information such as apartment number"/>
                                </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required input onChange={this.handleInputChange} name="Mailing_City__c" placeholder="City" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Mailing_State__c" as="select">
                                    <option aria-label="option 0"></option> 
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>AS</option>
                                    <option>AZ</option>
                                    <option>AR</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>DC</option>
                                    <option>FM</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>GU</option>
                                    <option>HI</option>
                                    <option>ID</option>
                                    <option>IL</option>
                                    <option>IN</option>
                                    <option>IA</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>ME</option>
                                    <option>MH</option>
                                    <option>MD</option>
                                    <option>MA</option>
                                    <option>MI</option>
                                    <option>MN</option>
                                    <option>MS</option>
                                    <option>MO</option>
                                    <option>MT</option>
                                    <option>NE</option>
                                    <option>NV</option>
                                    <option>NH</option>
                                    <option>NJ</option>
                                    <option>NM</option>
                                    <option>NY</option>
                                    <option>NC</option>
                                    <option>ND</option>
                                    <option>MP</option>
                                    <option>OH</option>
                                    <option>OK</option>
                                    <option>OR</option>
                                    <option>PW</option>
                                    <option>PA</option>
                                    <option>PR</option>
                                    <option>RI</option>
                                    <option>SC</option>
                                    <option>SD</option>
                                    <option>TN</option>
                                    <option>TX</option>
                                    <option>UT</option>
                                    <option>VT</option>
                                    <option>VI</option>
                                    <option>VA</option>
                                    <option>WA</option>
                                    <option>WV</option>
                                    <option>WI</option>
                                    <option>WY</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Mailing_Zipcode__c" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                                <Form.Label>Online Profiles (one per textbox) </Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control required input onChange={this.handleInputChange} name="Online_Profile_One__c" placeholder="GitHub, etc..." />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control required input onChange={this.handleInputChange} name="Online_Profile_Two__c" placeholder="LinkedIn, etc..." />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control required input onChange={this.handleInputChange} name="Online_Profile_Three__c" placeholder="Twitter, etc..." />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Briefly explain your most important accomplishments, traits and qualifications, etc. <a href="https://www.indeed.com/career-advice/career-development/guide-to-writing-a-bio-with-examples">Guide to Writing a Bio (with examples).</a></Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Tell us about yourself." required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Are you currently authorized to work in the US?</Form.Label>
                                <Form.Control required name="Authorized_to_work_in_US__c" as="select" onChange={this.handleInputChange}>
                                    <option aria-label="option 0" label="Select"/> 
                                    <option aria-label="option 1" label="Yes" value="true"/> 
                                    <option aria-label="option 2" label="No" value="false"/> 
                                </Form.Control>
                            </Form.Group> 
                            <Form.Group required>
                                <Form.Label>Would you be interested in learning more about our teacher certification program?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="Interested_inTeacher_certification_progr__c"  as="select">
                                        <option aria-label="option 0" label="Select" value="false"/> 
                                        <option aria-label="option 1" label="Yes" value="true"/> 
                                        <option aria-label="option 2" label="No" value="false"/> 
                                    </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Are you a US citizen or permanent resident?</Form.Label>
                                    <Form.Control required as="select" name="US_citizen_or_permanent_resident__c" onChange={this.handleInputChange}>
                                        <option aria-label="option 0" label="Select" value="false"/> 
                                        <option aria-label="option 1" label="Yes" value="true"/> 
                                        <option aria-label="option 2" label="No" value="false"/> 
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>If you are a VET do you have GI BILL benefits you would like to use?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="VET_GI_BILL_BENEFITS__c" as="select">
                                        <option aria-label="option 0" label="Select" value="false"/> 
                                        <option aria-label="option 2" label="Yes" value="true"/> 
                                        <option aria-label="option 3" label="No" value="false"/> 
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Group required onChange={this.handleInputChange} className="Payment_Type__c"><br/>
                                <Form.Label>How are you planning to fund the program fee of $16,995 if accepted into program? (For questions regarding scholarships contact scholarships@wctd.org. For questions regarding payment options contact succeed@nebulaacademyny.com)</Form.Label>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Applying to scholarship" type="checkbox"/> Applying to scholarship </label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Paying in full" type="checkbox"/> Paying in full</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Pay after employment option" type="checkbox"/> Pay after employment option</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Multiple payments option" type="checkbox"/> Multiple payments option</label><br/>
                            </Form.Group>
                            <Form.Group required onChange={this.handleInputChange} className="Scholarship_Type__c">
                                <Form.Label>Are you interested in any of the following scholarships?</Form.Label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Homemaker Returning to the Workforce" type="checkbox"/> Homemaker Returning to the Workforce</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Low Income Individuals" type="checkbox"/> Low Income Individuals</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Individuals with Disability" type="checkbox"/> Individuals with Disability</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Individuals 55 and older" type="checkbox"/> Individuals 55 and older</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Single Parent" type="checkbox"/> Single Parent</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Veteran or Veteran's Spouse" type="checkbox"/> Veteran or Veteran's Spouse</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Individuals formerly involved in the justice system" type="checkbox"/> Individuals formerly involved in the justice system</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Homeless individuals" type="checkbox"/> Homeless individuals</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Native American" type="checkbox"/> Native American</label><br/>
                            </Form.Group>
                            <Form.Group required onChange={this.handleInputChange} className="Ethnicity__c">
                                <Form.Label>Please provide your ethnicity</Form.Label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Caucasian" type="checkbox"/> Caucasian</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="African American" type="checkbox"/> African American</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Hispanic or Latin Origin" type="checkbox"/> Hispanic or Latin Origin</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Hispanic or Latin Origin" type="checkbox"/> Hispanic or Latin Origin</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Native American" type="checkbox"/> Native American</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Native Hawaiian or Other Pacific Islander" type="checkbox"/> Native Hawaiian or Other Pacific Islander</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Middle Eastern or North African" type="checkbox"/> Middle Eastern or North African</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Other" type="checkbox"/> Other</label><br/>
                            </Form.Group>
                            <Form.Group required onChange={this.handleInputChange} className="Gender__c">
                                <Form.Label>Please provide your Gender</Form.Label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Female" type="checkbox"/> Female</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Male" type="checkbox"/> Male</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Transgender" type="checkbox"/> Transgender</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Transsexual" type="checkbox"/> Transsexual</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Two-spirited" type="checkbox"/> Two-spirited</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Intersex" type="checkbox"/> Intersex</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Other" type="checkbox"/> Other</label><br/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Do you have coding experience?</Form.Label>
                                <Form.Control required onChange={this.handleInputChange} name="Coding_experience__c" as="select">
                                    <option aria-label="option 0" label="Select"/> 
                                    <option aria-label="option 1" value="None" label="None"/> 
                                    <option aria-label="option 2" value="Beginner (100 hours or less of tutorials)" label="Beginner (100 hours or less of tutorials)"/> 
                                    <option aria-label="option 3" value="Intermediate (Three or fewer classes and personal projects)" label="Intermediate (Three or fewer classes and personal projects)"/> 
                                    <option aria-label="option 4" value="Advanced (Degree or professional experience)" label="Advanced (Degree or professional experience)"/> 
                                </Form.Control>
                            </Form.Group>  
                            <Form.Group>
                                <Form.Label>Please provide highest education level</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Highest_education_level__c" as="select">
                                <option aria-label="option 0" label="Select"/> 
                                <option aria-label="option 1" value="High School" label="High School"/> 
                                <option aria-label="option 2" value="Some College" label="Some College"/> 
                                <option aria-label="option 3" value="Associates Degree" label="Associates Degree"/> 
                                <option aria-label="option 4" value="Bachelors Degree" label="Bachelors Degree"/> 
                                <option aria-label="option 5" value="Masters" label="Masters"/> 
                                <option aria-label="option 6" value="Doctorate" label="Doctorate"/> 
                                <option aria-label="option 7" value="Other" label="Other"/> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className={this.state.Highest_education_level__c === "Other" ? "showing" : "hidden"}>
                                <Form.Label>Please provide highest education level</Form.Label>
                                <Form.Control input onChange={this.handleInputChange} name="Highest_education_level_OTHER_Desc__c" placeholder="Highest Education" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Please include certification(s), specialized training(s), license(s), self-taught learning program(s), self-enrichment workshop(s) and other career-enhancing program(s) below.</Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Certifications, self-learning, etc.." required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Please provide details on how you heard about our program.</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="How_did_you_hear_about_our_program__c" as="select">
                                <option aria-label="option 0" label="Select"/> 
                                <option aria-label="option 1" value="Article" label="Article"/> 
                                <option aria-label="option 2" value="Course Report" label="Course Report"/> 
                                <option aria-label="option 3" value="Facebook" label="Facebook"/> 
                                <option aria-label="option 4" value="Friend/Family" label="Friend/Family"/> 
                                <option aria-label="option 5" value="GitHub" label="GitHub"/> 
                                <option aria-label="option 6" value="Google" label="Google"/> 
                                <option aria-label="option 7" value="Hiring Heroes" label="Hiring Heroes"/> 
                                <option aria-label="option 8" value="Institute for Vets & Families (IVMF)" label="Institute for Vets & Families (IVMF)"/> 
                                <option aria-label="option 9" value="LinkedIn" label="LinkedIn"/> 
                                <option aria-label="option 10" value="Operation Code" label="Operation Code"/> 
                                <option aria-label="option 11" value="Twitter" label="Twitter"/> 
                                <option aria-label="option 12" value="Veterans Affairs" label="Veterans Affairs"/> 
                                <option aria-label="option 13" value="Warrior Scholar" label="Warrior Scholar"/> 
                                <option aria-label="option 14" value="Other" label="Other"/> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className={this.state.How_did_you_hear_about_our_program__c === "Other" ? "showing" : "hidden"}>
                                    <Form.Label>Please provide how you heard of our program.</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="How_did_you_hear_OTHER_Desc__c" placeholder="Something else" />
                                </Form.Group>
                            <Form.Group>
                                <Form.Label>Please provide your preference to experience learning</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Preference_to_experience_learning__c" as="select">
                                <option aria-label="option 0" label="Select"/> 
                                <option aria-label="option 1" value="Virtual" label="Virtual"/> 
                                <option aria-label="option 1" value="In-Person" label="In-Person"/> 
                                <option aria-label="option 2" value="Both" label="Both"/> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>What are your primary intentions for enrolling in this program?</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Primary_intentions_for_enrolling__c" as="select">
                                <option aria-label="option 0" label="Select"/> 
                                <option aria-label="option 1" value="I intend to start a new job within 180 days of graduationg the program." label="I intend to start a new job within 180 days of graduationg the program."/> 
                                <option aria-label="option 2" value="I intend to start a business or become a self-employed contractor upon graduation." label="I intend to start a business or become a self-employed contractor upon graduation."/> 
                                <option aria-label="option 3" value="I intend to remain with my current employer upon graduation." label="I intend to remain with my current employer upon graduation."/> 
                                <option aria-label="option 4" value="I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation." label="I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation."/> 
                                <option aria-label="option 5" value="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation." label="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation."/> 
                                <option aria-label="option 6" value="Other" label="Other"/> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className={this.state.Primary_intentions_for_enrolling__c === "Other" ? "showing" : "hidden"}>
                                <Form.Label>Please describe your primary intentions below:</Form.Label>
                                <Form.Control input onChange={this.handleInputChange} name="Primary_Intentions_OTHER_DESC__c" placeholder="Primary Intentions: Other" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll.</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="Educational_Proof_for_HS_Diploma__c" required as="select">
                                    <option aria-label="option 0" label="Select"/> 
                                    <option aria-label="option 1" label="I Acknowledge" value="true"/> 
                                </Form.Control>
                            </Form.Group>
                            {/* <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="First_Name__c" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required onChange={this.handleInputChange} name="" placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name=""placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="" placeholder="New York City"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="" placeholder="New York"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name=""placeholder="10001"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridOnlineProfile1">
                                    <Form.Label>Online Profile 1</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="" placeholder="Ex: LinkedIn"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOnlineProfile2">
                                    <Form.Label>Online Profile 2</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="" placeholder="Ex: GitHub"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOnlineProfile3">
                                    <Form.Label>Online Profile 3</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="" placeholder="Ex: Portfolio"/>
                                </Form.Group>
                            </Form.Row>
                                <Form.Group controlId="FormControlShortBio">
                                    <Form.Label>Short Bio</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="" as="textarea" rows="3" placeholder="Tell us about yourself." />
                                </Form.Group>
                                <Form.Group controlId="FormControlHearProgram">
                                    <Form.Label>How did you hear about our program?</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name=""as="select">
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
                                    <Form.Label>Which cohort are you Registering to?</Form.Label>
                                    <Form.Control required as="select" >
                                        <option aria-label="option 0" label="Select"></option>
                                        <option onChange={this.handleInputChange} name="" aria-label="option 1" label="March 2 - August 7 2019"/> 
                                        <option onChange={this.handleInputChange} name="" aria-label="option 2" label="September 1 - February 26 2019"/>  
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="FormControlHowAttend">
                                    <Form.Label>How would you like to attend?</Form.Label>
                                        <Form.Check onChange={this.handleInputChange} name="" aria-label="option 1" label="Virtual"/> 
                                        <Form.Check onChange={this.handleInputChange} name="" aria-label="option 2" label="In-Person (Syosset, NY)"/> 
                                </Form.Group>
                                <Form.Group controlId="FormControlCohort">
                                    <Form.Label>What is your highest education level?</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="" as="select">
                                        <option>High School</option>
                                        <option>Associate Degree</option>
                                        <option>Bacherlors Degree</option>
                                        <option>Masters</option>
                                        <option>Doctorate</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>List any other education not included above:</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="Education_Not_included_above__c" placeholder="Certifications, self-learning, etc.."/>
                                </Form.Group>
                                <Form.Group controlId="FormControlCohort">
                                    <Form.Label>Which of the following do you identify with (select all that Register)?</Form.Label>
                                    <Form.Check onChange={this.handleInputChange} name="Ethnicity__c" aria-label="option 1" label="Caucasian"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 2" label="African American"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 3" label="Hispanic or Latin Origin"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 7" label="Asian"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 4" label="Native American"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Middle Eastern or North African"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Female"/>
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Male"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Nonbinary"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="LGBTQIA+"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Other"/> 
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
                                    <Form.Label>Are you interested in any of the following scholarships?</Form.Label>
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 1" label="Veteran In Person"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 2" label="Women re-entering the workforce"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 3" label="Hispanic or Latin Origin"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 7" label="Asian"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 4" label="Native American"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Middle Eastern or North African"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Female"/>
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Male"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Nonbinary"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="LGBTQIA+"/> 
                                    <Form.Check onChange={this.handleInputChange} name="" aria-label="option 5" label="Other"/> 
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3">
                                    <Form.Label>If you are a VET do you intend to use the VET TEC program to pay for tuition and housing?</Form.Label>
                                    <Form.Control onChange={(e) => this.handleVETTECChange(e)} as="select">
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 2" label="Yes"/> 
                                        <option aria-label="option 3" label="No"/> 
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridOnlineProfile3"> 
                                    <Form.Label>Are you currently authorized to work in the US?</Form.Label>
                                    <Form.Control required name="Authorized_to_work_in_US__c" as="select" onChange={(e) => this.handleAuthChange(e)}>
                                        <option aria-label="option 0" label="Select"/> 
                                        <option aria-label="option 1" label="Yes"/> 
                                        <option aria-label="option 2"  label="No"/> 
                                    </Form.Control>
                                </Form.Group> */}
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default registrationContent;