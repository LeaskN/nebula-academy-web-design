import React, { Component }from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './ApplicationContent.css'

class applicationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: []
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
    arrayRemove(arr, value){
        return arr.filter(function(ele){
            return ele !== value;
        });
    }
    fixJSON(){
        let string = JSON.stringify(this.state);
        return string;
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let isList = target.parentElement.className;
        let listName = target.parentElement.parentElement.className.split(" ")[0];
        
        //if the parent element indicates that this is a list item
        if(isList === 'list'){
            if(!this.state[listName]){
                //first time something is being added to an array
                this.setState({
                    [listName]: [name]
                })
            } else if (this.state[listName].indexOf(name) > -1) {
                //unchecked box
                let nameArr = this.state[listName];
                nameArr = this.arrayRemove(nameArr, name)
                
                this.setState({
                    [listName]: nameArr
                })
                
                // this.state[listName].splice(this.state[listName].indexOf(name), 1) //this shouldnt work but it does
            } else {
                //adding to an existing array
                let nameArr = [this.state[listName].concat(name)].flat()
                this.setState({
                    [listName]: nameArr
                })
            }
        //else its not a list
        } else {
            //boolean comes as string so set it to boolean
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
                                <h3>Completing online application:</h3>
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
                                    <option aria-label="option 0" label="Select"></option> 
                                    <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                    <option aria-label="option 2" label="No" value="false">No</option> 
                                </Form.Control>
                            </Form.Group> 
                            <Form.Group required>
                                <Form.Label>Would you be interested in learning more about our teacher certification program?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="Interested_inTeacher_certification_progr__c"  as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                        <option aria-label="option 2" label="No" value="false">No</option> 
                                    </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Are you a US citizen or permanent resident?</Form.Label>
                                    <Form.Control required as="select" name="US_citizen_or_permanent_resident__c" onChange={this.handleInputChange}>
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                        <option aria-label="option 2" label="No" value="false">No</option> 
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>If you are a VET do you have GI BILL benefits you would like to use?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="VET_GI_BILL_BENEFITS__c" as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 2" label="Yes" value="true">Yes</option> 
                                        <option aria-label="option 3" label="No" value="false">No</option> 
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
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Other" type="checkbox"/> Other</label>
                                <br/>
                            </Form.Group>
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Ethnicity__c.indexOf('Other') > -1 ? "showding" : "hidden"}>
                                    <Form.Label>Please provide your ethnicity</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="Ethnicity_OTHER_Desc__c" placeholder="Gender" />
                                </Form.Group>
                            </Form.Row>
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
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Gender__c.indexOf('Other') > -1 ? "showding" : "hidden"}>
                                    <Form.Label>Please provide your gender</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="Gender_OTHER_Desc__c" placeholder="Gender" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Do you have coding experience?</Form.Label>
                                <Form.Control required onChange={this.handleInputChange} name="Coding_experience__c" as="select">
                                    <option aria-label="option 0" label="Select"></option> 
                                    <option aria-label="option 1" value="None" label="None">None</option> 
                                    <option aria-label="option 2" value="Beginner (100 hours or less of tutorials)" label="Beginner (100 hours or less of tutorials)">Beginner (100 hours or less of tutorials)</option> 
                                    <option aria-label="option 3" value="Intermediate (Three or fewer classes and personal projects)" label="Intermediate (Three or fewer classes and personal projects)">Intermediate (Three or fewer classes and personal projects)</option> 
                                    <option aria-label="option 4" value="Advanced (Degree or professional experience)" label="Advanced (Degree or professional experience)">Advanced (Degree or professional experience)</option> 
                                </Form.Control>
                            </Form.Group>  
                            <Form.Group>
                                <Form.Label>Please provide highest education level</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Highest_education_level__c" as="select">
                                <option aria-label="option 0" label="Select"></option> 
                                <option aria-label="option 1" value="High School" label="High School">High School</option> 
                                <option aria-label="option 2" value="Some College" label="Some College">Some College</option> 
                                <option aria-label="option 3" value="Associates Degree" label="Associates Degree">Associates Degree</option> 
                                <option aria-label="option 4" value="Bachelors Degree" label="Bachelors Degree">Bachelors Degree</option> 
                                <option aria-label="option 5" value="Masters" label="Masters">Masters</option> 
                                <option aria-label="option 6" value="Doctorate" label="Doctorate">Doctorate</option> 
                                <option aria-label="option 7" value="Other" label="Other">Other</option> 
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
                                <option aria-label="option 0" label="Select"></option> 
                                <option aria-label="option 1" value="Article" label="Article">Article</option> 
                                <option aria-label="option 2" value="Course Report" label="Course Report">Course Report</option> 
                                <option aria-label="option 3" value="Facebook" label="Facebook">Facebook</option> 
                                <option aria-label="option 4" value="Friend/Family" label="Friend/Family">Friend/Family</option> 
                                <option aria-label="option 5" value="GitHub" label="GitHub">GitHub</option> 
                                <option aria-label="option 6" value="Google" label="Google">Google</option> 
                                <option aria-label="option 7" value="Hiring Heroes" label="Hiring Heroes">Hiring Heroes</option> 
                                <option aria-label="option 8" value="Institute for Vets & Families (IVMF)" label="Institute for Vets & Families (IVMF)">Institute for Vets & Families (IVMF)" label="Institute for Vets & Families (IVMF)</option> 
                                <option aria-label="option 9" value="LinkedIn" label="LinkedIn">LinkedIn</option> 
                                <option aria-label="option 10" value="Operation Code" label="Operation Code">Operation Code</option> 
                                <option aria-label="option 11" value="Twitter" label="Twitter">Twitter</option> 
                                <option aria-label="option 12" value="Veterans Affairs" label="Veterans Affairs">Veterans Affairs</option> 
                                <option aria-label="option 13" value="Warrior Scholar" label="Warrior Scholar">Warrior Scholar</option> 
                                <option aria-label="option 14" value="Other" label="Other">Other</option> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className={this.state.How_did_you_hear_about_our_program__c === "Other" ? "showing" : "hidden"}>
                                    <Form.Label>Please provide how you heard of our program.</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="How_did_you_hear_OTHER_Desc__c" placeholder="Something else" />
                                </Form.Group>
                            <Form.Group>
                                <Form.Label>Please provide your preference to experience learning</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Preference_to_experience_learning__c" as="select">
                                <option aria-label="option 0" label="Select"></option> 
                                <option aria-label="option 1" value="Virtual" label="Virtual">Virtual</option> 
                                <option aria-label="option 1" value="In-Person" label="In-Person">In-Person</option> 
                                <option aria-label="option 2" value="Both" label="Both">Both</option> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>What are your primary intentions for enrolling in this program?</Form.Label><br/>
                                <Form.Control required onChange={this.handleInputChange} name="Primary_intentions_for_enrolling__c" as="select">
                                <option aria-label="option 0" label="Select"></option> 
                                <option aria-label="option 1" value="I intend to start a new job within 180 days of graduationg the program." label="I intend to start a new job within 180 days of graduationg the program.">I intend to start a new job within 180 days of graduationg the program." label="I intend to start a new job within 180 days of graduationg the program.</option> 
                                <option aria-label="option 2" value="I intend to start a business or become a self-employed contractor upon graduation." label="I intend to start a business or become a self-employed contractor upon graduation.">I intend to start a business or become a self-employed contractor upon graduation." label="I intend to start a business or become a self-employed contractor upon graduation.</option> 
                                <option aria-label="option 3" value="I intend to remain with my current employer upon graduation." label="I intend to remain with my current employer upon graduation.">I intend to remain with my current employer upon graduation." label="I intend to remain with my current employer upon graduation.</option> 
                                <option aria-label="option 4" value="I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation." label="I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation.">I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation." label="I am attending the program to learn new skills for self-enrichment and do not intend to pursue a job upon graduation.</option> 
                                <option aria-label="option 5" value="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation." label="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation.">I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation." label="I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation.</option> 
                                <option aria-label="option 6" value="Other" label="Other">Other</option> 
                                </Form.Control>
                            </Form.Group>
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Primary_intentions_for_enrolling__c === "Other" ? "showing " : "hidden"}>
                                    <Form.Label>Please describe your primary intentions below:</Form.Label>
                                    <Form.Control input onChange={this.handleInputChange} name="Primary_Intentions_OTHER_DESC__c" placeholder="Primary Intentions: Other" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll.</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="Educational_Proof_for_HS_Diploma__c" required as="select">
                                    <option label="Select"></option> 
                                    <option label="I Acknowledge" value="true">I Acknowledge</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <p style={{maxWidth:"80vw", wordWrap: "break-word"}}>JSON: {this.fixJSON()}</p>
            </Container>
        )
    }
};

export default applicationContent;