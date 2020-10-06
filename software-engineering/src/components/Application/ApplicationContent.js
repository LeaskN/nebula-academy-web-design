import React, { Component }from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './ApplicationContent.css'

class applicationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    // this lifecycle component can prevent component updates by returning either true (update) or false (dont update)
    shouldComponentUpdate(nextProps, nextState) {
            // if next state has cohort options 
        if (nextState.cohortOptions) {
            // allow an update
            return true;
            // if the current this.state has cohort options and the next state WONT have cohort options (see prev if())
        } else if (this.state.cohortOptions) {
            // dont update
            return false;
            // if the this state doesn't have cohort options 
        } else {
            // update (and therefore make a request to search for the new info by recalling populateOptions)
            this.getCohortOptions();
            return true;
        }
    }
    // fetch all programs and set them to state
    componentDidMount(){
        return this.getCohortOptions();
    }
    // get cohort options
    getCohortOptions(){
        return fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)
        .then(res => res.json())
        .then(res => this.setState({cohortOptions: res}))
        .catch(err => {console.log(err)})
    }
    // populate the dropdown lists with all SE Bootcamps (from state)
    populateOptions(){
        let options = this.state.cohortOptions;
        let finalArray = [];
            // filter for ONLY the bootcamps
        for(let item in options){
            if((options[item].name).indexOf('BootCamp') > -1){
                finalArray.push(<option aria-label="option 1" key={options[item].id} label={options[item].name} value={options[item].id}>{options[item].name}</option> );
            }
        }

        return (finalArray);
    }
    // When a applicant presses submit check all data and if it's clean, submit it, otherwise state the issue to the user
    putData(e) {
        e.preventDefault();
        if(this.state.Contact_Number__c){
                let newNumber = this.state.Contact_Number__c.replace(/\D/g,'');
            // if just the digits comes out to either 10 or 11 then set it to state
                if(newNumber.length === 10 || newNumber.length === 11){
                    this.setState({
                        Contact_Number__c: newNumber
                    })
                    // code is breaking here, not going into the next if statement
                // if it is too many or too few digits present an error and exit the function
                } else {
                    alert('Please correct your phone number.')
                    return;
                }
            // if the email exists but doesnt have a length, or an @ sign and a '.' then alert: please correct typos
        } 
        if( this.state.Email_ID__c && (this.state.Email_ID__c.length === 0 || this.state.Email_ID__c.indexOf('@') === -1 || this.state.Email_ID__c.indexOf('.') === -1)){
            alert('There is an issue with your email address. Please check for typos to continue.');
            return
        }

        if(!this.state.First_Name__c){
            alert('Please complete the field titled: "First"')
        }
        else if(!this.state.Last_Name__c){
            alert('Please complete the field titled: "Last"')
        } 
        else if(!this.state.Email_ID__c){
            alert('Please complete the field titled: "Email"')
        }
        else if(!this.state.Contact_Number__c){
            alert('Please complete the field titled: "Phone"')
        } 
        else if(!this.state.Mailing_Address__c){
            alert('Please complete the field titled: "Mailing Address 1"')
        } 
        else if(!this.state.Mailing_City__c){
            alert('Please complete the field titled: "City"')
        } 
        else if(!this.state.Mailing_State__c){
            alert('Please complete the field titled: "State"')
        } 
        else if(!this.state.Mailing_Zipcode__c){
            alert('Please complete the field titled: "Zip"')
        } 
        else if(!this.state.Short_Bio__c){
            alert('Please complete the "bio" field"')
        }
        else if(!this.state.How_did_you_hear_about_our_program__c){
            alert('Please complete the field titled: "Please provide details on how you heard about our program."\n\nIf you selected "Other" please describe your "Other".')
        } 
        else if(!this.state.Coding_experience__c){
            alert('Please complete the field titled: "Do you have coding experience?"')
        }
        else if(!this.state.Highest_education_level__c){
            alert('Please complete the field titled: "Please provide highest education level"\n\nIf you selected "Other" please describe your "Other".')
        } 
        else if(!this.state.Preference_to_experience_learning__c){
            alert('Please complete the field titled: "Please provide your preference to experience learning"')
        } 
        else if(!this.state.Primary_intentions_for_enrolling__c){
            alert('Please complete the field titled: "What are your primary intentions for enrolling in this program?"\n\nIf you selected "Other" please describe your "Other".')
        }
        else if(!this.state.Payment_Type__c){
            alert('Please complete the field titled: "How are you planning to fund the program fee if accepted into program?"')
        } 
        else if(!this.state.Ethnicity__c || this.state.Ethnicity__c === ''){
            alert('Please complete the field titled: "Please provide your ethnicity"\n\nIf you selected "Other" please describe your "Other".')
        }
        else if(!this.state.Gender__c || this.state.Gender__c === ''){
            alert('Please complete the field titled: "Please provide your Gender"\n\nIf you selected "Other" please describe your "Other".')
        }
        // else if(!this.state.VET_GI_BILL_BENEFITS__c){
        //     alert('Please complete the field titled: "Are you a VET who has GI BILL Benefits that you would like to use?"')
        // }
        else if(!this.state.Program_you_are_applying_to__c){
            alert('Please complete the field titled: "Which cohort are you applying to?"')
        } 
        else if(!this.state.US_citizen_or_permanent_resident__c){
            alert('All participants must be a US citizen or permanent resident.')
        }
        else if(!this.state.Authorized_to_work_in_US__c){
            alert('All participants must be authorized to work in the US.')
        }
        else if(!this.state.High_School_Diploma_or_GED__c){
            alert('Please complete the field titled: "I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll."')
        } else {
            // Post request to the database
            this.setState({loader:true}); 
            // fetch(`http://localhost:3000/dev2/application`, {
            fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/application`, {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer',
                body: this.fixJSON()
            })
            .then((response) => {
                this.setState({loader: false}) 
                return response.json()}
            )
            .then((response) => {
                console.log(response)
                if(response.success){
                    alert(`Congratulations! You've successfully applied to the Software Engineering BootCamp! \n\nIMPORTANT! This is an automated email and can land in your junkmail. Please whitelist succeed@nebulaacademyny.com and check your junk or spam mail for your confirmation. \n\n If after 15 minutes you still haven’t received your confirmation please email succeed@nebulaacademyny.com`)
                } else if(response.errorCode === 'FIELD_CUSTOM_VALIDATION_EXCEPTION'){
                    alert(`It looks like you have already registered for this program. If this is not the case or you'd like to amend previously sent information please let us know at support@nebulaacademyny.com. \n\nIf you haven’t received a verification email from succeed@nebulaacademyny.com within 24 hours please check your spam.\n\nIf the email isn’t there please contact us at support@nebulaacademyny.com regarding the issue.`)
                } else {
                    alert(`It seems that your device is unable to submit through this form. Please submit an application through the following link: https://bit.ly/3h15PJT`)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })

        }

    }
    arrayRemove(arr, value){
        return arr.filter(function(ele){
            return ele !== value;
        });
    }
    fixJSON(){
        let tempObj = { ...this.state };
        delete tempObj.cohortOptions;
        delete tempObj.loading;
        
        //if the temporary object contains a list make it a semicolon seperated list
        for(let item in tempObj){
            if(typeof tempObj[item] == "object"){
                tempObj[item] = tempObj[item].join(';');
            }
        }
        return JSON.stringify(tempObj);
    }

    handleInputChange(event) {
        let target = event.target;
        
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let isList = target.parentElement.className;
        let listName = target.parentElement.parentElement.className.split(" ")[0];
        //if the parent element indicates that this is a list item
        if(isList === 'list'){
            //if state does not contain that specific listName yet
            if(!this.state[listName]){
                //first time something is being added to an array
                this.setState({
                    [listName]: [name]
                })
            //if that specific listName exists 
            } else if (this.state[listName].indexOf(name) > -1) {
                //unchecked box
                let oldList = this.state[listName]
                oldList.pop(oldList.indexOf(name))
                this.setState({
                    [listName]: oldList
                })
            } else {
                //adding to an existing array
                let fullArray = [...this.state[listName], name]
                this.setState({
                    [listName]: fullArray
                })
            }
        //else its not a list
        } else {
            //boolean comes as string so set it to boolean
            if((value === "true" || value === "false") && target === 'select-one'){
                this.setState({
                    [name]: value === 'true' ? true : false,
                })
            } else {
                this.setState({
                    [name]: value.trim()
                });
            }           
        }
    } 
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <h2 style={{marginTop:"20px"}}>The application consists of three phases: </h2>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><b>Phase 1:</b> the form on this page</p>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><b>Phase 2:</b> an assessment to test your logical thinking</p>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><b>Phase 3:</b> an interview to understand a participants motivations, commitments, & capacity</p>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col className="alignCenter">
                                <h3>Completing online application:</h3>
                                    <p>To preserve your data, do not close your browser session until Phase I is complete. Upon completion of Phase I you will receive a link via email to begin Phase II. Questions? Contact us at succeed@nebulaacademyny.com or by phone at: 631-468-7475.</p>
                            </Col>
                        </Row>
                        <Form className="manualContainer" >
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First</Form.Label>
                                    <Form.Control required input="true" onChange={this.handleInputChange} name="First_Name__c" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Last_Name__c" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required input="true" onChange={this.handleInputChange} name="Email_ID__c" type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Contact_Number__c" placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Mailing Address 1</Form.Label>
                                    <Form.Control required input="true" onChange={this.handleInputChange} name="Mailing_Address__c" placeholder="Mailing Address" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Mailing Address 2</Form.Label>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Mailing_Address2__c" placeholder="Additional address information such as apartment number"/>
                                </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required input="true" onChange={this.handleInputChange} name="Mailing_City__c" placeholder="City" />
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
                                    <Form.Control required onChange={this.handleInputChange} name="Mailing_Zipcode__c" placeholder="00000" />
                                </Form.Group>
                            </Form.Row>
                                <Form.Label>Online Profiles (one per textbox) </Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Online_Profile_One__c" placeholder="GitHub, etc..." />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Online_Profile_Two__c" placeholder="LinkedIn, etc..." />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Online_Profile_Three__c" placeholder="Twitter, etc..." />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Briefly explain your most important accomplishments, traits and qualifications, etc. <a href="https://www.indeed.com/career-advice/career-development/guide-to-writing-a-bio-with-examples">Guide to Writing a Bio (with examples)</a></Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Tell us about yourself." onChange={this.handleInputChange} name="Short_Bio__c" required />
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
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="None" type="checkbox"/> None</label><br/>
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
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.How_did_you_hear_about_our_program__c === "Other" ? "showing" : "hidden"}>
                                    <Form.Label>Please provide how you heard of our program.</Form.Label>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="How_did_you_hear_OTHER_Desc__c" placeholder="Something else" />
                                </Form.Group> 
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Do you have coding experience?</Form.Label>
                                <Form.Control required onChange={this.handleInputChange} name="Coding_experience__c" as="select">
                                    <option aria-label="option 0" label="Select"></option> 
                                    <option aria-label="option 1" value="None" label="None">None</option> 
                                    <option aria-label="option 2" value="Beginner (100 hours or less of tutorials)" label="Beginner (100 hours or less of tutorials)">Beginner (100 hours or less of tutorials)</option> 
                                    <option aria-label="option 3" value="Intermediate (three or fewer classes or personal projects)" label="Intermediate (Three or fewer classes and personal projects)">Intermediate (Three or fewer classes and personal projects)</option> 
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
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Highest_education_level__c === "Other" ? "showing" : "hidden"}>
                                    <Form.Label>Please provide highest education level</Form.Label>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Highest_education_level_OTHER_Desc__c" placeholder="Highest Education" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Please include certification(s), specialized training(s), license(s), self-taught learning program(s), self-enrichment workshop(s) and other career-enhancing program(s) below.</Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Certifications, self-learning, etc.." name="Education_Not_included_above__c" required />
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
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Primary_Intentions_OTHER_DESC__c" placeholder="Primary Intentions: Other" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Would you be interested in learning more about our teacher certification program?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="Want_to_know_more_about_teacher_cert_pgm__c"  as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                        <option aria-label="option 2" label="No" value="false">No</option> 
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Group required onChange={this.handleInputChange} className="Payment_Type__c"><br/>
                                <Form.Label>How are you planning to fund the program fee if accepted into program? (For questions regarding scholarships contact scholarships@wctd.org. For questions regarding payment options contact succeed@nebulaacademyny.com)</Form.Label>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Applying to scholarship" type="checkbox"/> Applying to scholarship </label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Paying in full" type="checkbox"/> Paying in full</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Pay after employment option" type="checkbox"/> Pay after employment option</label><br/>
                                <label className="list">&nbsp;&nbsp;&nbsp;&nbsp;<input name="Multiple payments option" type="checkbox"/> Multiple payments option</label><br/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Please provide your ethnicity</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} className="Ethnicity__c" name="Ethnicity__c"  as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Caucasian" value="Caucasian"> Caucasian</option>
                                        <option aria-label="option 2" label="African American" value="African American"> African American</option>
                                        {/* <option aria-label="option 3" label="Asian" value="Asian"> Asian</option> */}
                                        <option aria-label="option 3" label="Hispanic or Latin Origin" value="Hispanic or Latin Origin"> Hispanic or Latin Origin</option>
                                        <option aria-label="option 4" label="Native American" value="Native American"> Native American</option>
                                        <option aria-label="option 5" label="Native Hawaiian or Other Pacific Islander" value="Native Hawaiian or Other Pacific Islander"> Native Hawaiian or Other Pacific Islander</option>
                                        <option aria-label="option 6" label="Middle Eastern or North African" value="Middle Eastern or North African"> Middle Eastern or North African</option>
                                        <option aria-label="option 7" label="Other" value="Other"> Other</option>
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Ethnicity__c && (this.state.Ethnicity__c === 'Other' || this.state.Ethnicity__c === 'Other ') ? "showing" : "hidden"}>
                                    <Form.Label>Please provide your ethnicity</Form.Label>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Ethnicity_Other_description__c" placeholder="Ethnicity" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Please provide your gender</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} className="Gender__c" name="Gender__c" as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Female" value="Female"> Female</option>
                                        <option aria-label="option 2" label="Male" value="Male"> Male</option>
                                        <option aria-label="option 3" label="Non-binary/third gender" value="Non-binary/third gender"> Non-binary/third gender</option>
                                        <option aria-label="option 4" label="Transsexual" value="Transsexual"> Transsexual</option>
                                        <option aria-label="option 5" label="Other/Prefer to self-describe" value="Other/Prefer to self-describe"> Other/Prefer to self-describe</option>
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Row className="paddedSides">
                                <Form.Group as={Col} className={this.state.Gender__c && this.state.Gender__c === 'Other/Prefer to self-describe' ? "showing" : "hidden"}>
                                    <Form.Label>Please provide your gender</Form.Label>
                                    <Form.Control input="true" onChange={this.handleInputChange} name="Gender_Other__c" placeholder="Gender" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Are you a VET who has GI BILL benefits that you would like to use?</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="VET_GI_BILL_BENEFITS__c" as="select">
                                        <option aria-label="option 0" label="Select" value="false"></option> 
                                        <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                        <option aria-label="option 2" label="No" value="false">No</option> 
                                    </Form.Control>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>Which cohort are you applying to?</Form.Label>
                                <Form.Control required as="select" name="Program_you_are_applying_to__c" onChange={this.handleInputChange}>
                                    <option aria-label="option 0" label="Select" value="false"></option> 
                                    {this.populateOptions()}
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
                                <Form.Label>Are you currently authorized to work in the US?</Form.Label>
                                <Form.Control required name="Authorized_to_work_in_US__c" as="select" onChange={this.handleInputChange}>
                                    <option aria-label="option 0" label="Select"></option> 
                                    <option aria-label="option 1" label="Yes" value="true">Yes</option> 
                                    <option aria-label="option 2" label="No" value="false">No</option> 
                                </Form.Control>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll.</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="High_School_Diploma_or_GED__c" required as="select">
                                    <option label="Select"></option> 
                                    <option label="I Acknowledge" value="true">I Acknowledge</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="secondary" type="submit" onClick={(e) => this.putData(e)}>Submit</Button>
                            {this.state.loader? <div className='fullScreen'><h1 className="loaderText"><br></br>Submitting</h1><div className="loader"><div></div><div></div><div></div></div></div>:<span></span>}
                        </Form>
                    </Col>
                </Row>
                <br/>
            </Container>
        )
    }
};

export default applicationContent;