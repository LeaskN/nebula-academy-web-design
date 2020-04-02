import React, { Component }from 'react';
import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap';
import './ApplicationPhase2Content.css'
import keypad from '../../assets/keypadImage.png'

class ApplicationPhase2Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    componentDidMount(e){
        fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)
        .then(res => res.json())
        .then(res => this.setState({cohortOptions : res.records}))
    }
    populateOptions(){
        let options = this.state.cohortOptions;
        let finalArray = [];
        for(let item in options){
            if((options[item].name).indexOf('BootCamp') > -1){
                finalArray.push(<option aria-label="option 1" key={options[item].id} label={options[item].name} value={options[item].id}>{options[item].name}</option> );
            }
        }
        return (
            finalArray
        );
    }
    postData(e) {
        this.fixJSON();
        e.preventDefault();
        if(this.state.Contact_Number__c){
            let newNumber = this.state.Contact_Number__c.replace(/\D/g,'');
            if(newNumber.length === 10 || newNumber.length === 11){
                this.setState({
                    Contact_Number__c: newNumber
                })
            } else {
                alert('Please correct your phone number.')
                return
            }
        } else if (this.state.How_did_you_hear_about_our_program__c === 'Other'){
            if( !this.state.How_did_you_hear_OTHER_Desc__c || this.state.How_did_you_hear_OTHER_Desc__c.length === 0 ){
                alert('If the field titled, "Please provide details on how you heard about our program." is "Other" please fill in the "Other" text field.');
            }
        } else if (this.state.Highest_education_level__c === 'Other'){
            if( !this.state.Highest_education_level_OTHER_Desc__c || this.state.Highest_education_level_OTHER_Desc__c.length === 0 ){
                alert('If the field titled, "Please provide details on how you heard about our program." is "Other" please fill in the "Other" text field.');
            }
        } else if (this.state.Primary_intentions_for_enrolling__c === 'Other'){
            if( !this.state.Primary_Intentions_OTHER_DESC__c || this.state.Primary_Intentions_OTHER_DESC__c.length === 0 ){
                alert('If the field titled, "Please provide details on how you heard about our program." is "Other" please fill in the "Other" text field.');
            }
        } else if (this.state.Ethnicity__c === 'Other'){
            if( !this.state.Ethnicity_Other_description__c || this.state.Ethnicity_Other_description__c.length === 0 ){
                alert('If the field titled, "Please provide details on how you heard about our program." is "Other" please fill in the "Other" text field.');
            }
        } else if (this.state.Gender__c === 'Other/Prefer to self-describe'){
            if( !this.state.Gender_Other__c || this.state.Ethnicity_Other_description__c.length === 0 ){
                alert('If the field titled, "Please provide details on how you heard about our program." is "Other" please fill in the "Other" text field.');
            }
        } else if(this.state.Email_ID__c){
            if(!this.state.Email_ID__c.indexOf('@') || this.state.Email_ID__c.indexOf('@') === -1 || this.state.Email_ID__c.indexOf('.com') === -1){
                alert('There is an issue with your email address. Please check for typos to continue.');
                return;
            }
        }
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
        .then((response) => response.json())
        .then((response) => {
            if(response['message'].indexOf('Required fields are missing') > -1){
                alert('Please complete the application by filling in missing fields.')
            } else if (response['message'].indexOf('Already registered for this program') > -1){
                alert( `It looks like you have already registered for this program. If this is not the case or you'd like to amend previously sent information please let us know at support@nebulaacademyny.com. \nIf you haven’t received a verification email from succeed@nebulaacademyny.com within 24 hours please check your spam.\nIf the email isn’t there please contact us at support@nebulaacademyny.com. regarding the issue.`)
            } else {
                alert(`Congratulations! You've successfully applied to the Software Engineering BootCamp!`)
                // console.log('Response:', response);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            
        })
    }
    arrayRemove(arr, value){
        return arr.filter(function(ele){
            return ele !== value;
        });
    }
    fixJSON(){
        let tempObj = this.state
        delete tempObj['cohortOptions']
        //if the temporary object contains a list make it a semicolon seperated list
        for(let item in tempObj){
            if(typeof tempObj[item] == "object"){
                tempObj[item] = tempObj[item].join(';');
            }
        }
        return JSON.stringify(tempObj)
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'radio' ? target.checked : target.value;
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
    } 
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <h2 style={{marginTop:"20px"}}>This is phase 2 of the Nebula Academy Software Engineering Bootcamp </h2>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><s><b>Phase 1:</b> the form on this page</s></p>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><b>Phase 2:</b> an assessment to test your logical thinking</p>
                        </Row>
                        <Row style={{marginLeft:"50px"}}>
                            <p><b>Phase 3:</b> an interview to understand a participants motivations, commitments, & capacity</p>
                        </Row>
                        <hr></hr>
                        <hr></hr>
                        <Row>
                            <Col className="alignCenter">
                                <h3>General Information</h3>
                                    <p>This phase should take approximately 2-4 hours depending on your writing skills.</p>
                                    <p>This is not a test to determine your writing capabilities. It is about your thinking. However, we do suggest that you use a spellchecker to ensure your answers are properly understood. </p>
                                    <p>This is a web form. Therefore if you lose connection you will lose your responses. We suggest you response offline and copy and paste into this form when you're ready to submit. For example you can use a notebook, notes on your phone or computer, a text document like Word, Google Docs, or Pages to ensure you don't lose your work. </p>
                            </Col>
                        </Row>
                        <hr></hr>
                        <hr></hr>
                        {/* Section 1: Personal Information */}
                        <Row>
                            <h4>Section 1: Personal Information</h4>
                        </Row>
                        <Row>
                            <h5 style={{color: 'red'}}><b>IMPORTANT: </b></h5>
                            <h6>Your first name, last name, and email address <em>must</em> match your previously enetered information. The email that provided you with this link also has the first name, last name, and email address which you previously entered.</h6>
                        </Row>
                        <br></br>
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
                            </Form.Row>
                            <hr></hr>
                            {/* Section 2: Short Answers  */}
                            <Row>
                                <h4>Section 2: Written Responses</h4>                            
                            </Row>
                            <Row>
                                <h6>This section has 3 questions. In your own words, complete 2 questions of your choice and write <i>skip</i> for the question you choose to omit.</h6>
                            </Row>
                            <br></br>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q1:</b> Explain the internet to someone coming out of a 30 year coma.</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 1 here." onChange={this.handleInputChange} name="Answer_1__c" required />
                                </Form.Group>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q2:</b> Describe a color to a blind person (for example purple, green, or yellow).</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 2 here." onChange={this.handleInputChange} name="Answer_2__c" required />
                                </Form.Group>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q3:</b> Write instructions teaching someone to make an egg sandwich.</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 3 here." onChange={this.handleInputChange} name="Answer_3__c" required />
                                </Form.Group>
                            <hr></hr>
                            {/* Section 3: Logical Thinking */}
                            <Row>
                                <h4>Section 3: Logical Thinking</h4>
                            </Row>
                            <br></br>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q4:</b> You are a spy following a target who just entered a building with a door locked by a keypad. You noticed they clearly punched in 4 numbers and you walk up to the keypad. </Form.Label>
                                    <Row>
                                        <Col><p>Based on the following image what code would you punch in and why?</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><Image style={{display:'flex', maxWidth: '500px', margin:'auto'}} src={ keypad } fluid /></Col>
                                    </Row>
                                    <br/>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 4 here." onChange={this.handleInputChange} name="Answer_4__c" required />
                                </Form.Group>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q5:</b> What is the next number in the following series: <i>13, 19, 25, 31, 37, 43</i></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 5 here." onChange={this.handleInputChange} name="Answer_5__c" required />
                                </Form.Group>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label><b>Q6:</b> Determine the missing numbers in the series: <i>5, 1, 9, 6, _, _, 17, 16</i></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 6 here." onChange={this.handleInputChange} name="Answer_6__c" required />
                                </Form.Group>
                                <hr></hr>
                                {/* Section 4: Multiple Choice */}
                                <Row>
                                    <h4>Section 4: Multiple Choice</h4>
                                </Row>
                                <br></br>
                                <fieldset>
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Scholarship_Type__c">
                                        <Form.Label as="legend" style={{backgroundColor:'#ecbfff', padding: '0 1200px 0 0'}}><b>Q7:</b> Arrange the following words in a meaningful sequence.
                                            <ol style={{listStyle: 'number'}}>
                                                <i>
                                                    <li>Repair</li>
                                                    <li>Crash</li>
                                                    <li>Mechanic</li>
                                                    <li>Tow</li>
                                                    <li>Estimate</li>
                                                </i>
                                            </ol>
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check type="radio" label="1, 3, 2, 4, 5" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                            <Form.Check type="radio" label="2, 3, 4, 5, 1" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                            <Form.Check type="radio" label="5, 2, 3, 1, 4" name="formHorizontalRadios" id="formHorizontalRadios3" />
                                            <Form.Check type="radio" label="2, 4, 3, 5, 1" name="formHorizontalRadios" id="formHorizontalRadios4" />
                                            <Form.Check type="radio" label="5, 2, 4, 3, 1" name="formHorizontalRadios" id="formHorizontalRadios5" />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <fieldset>
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Scholarship_Type__c">
                                        <Form.Label as="legend" style={{backgroundColor: '#ecbfff'}}><b>Q8:</b> Mike is taller than Petunia who is the same height as Steve. Steve is shorter than Phoebe who is taller than Sharmania, Bob, and Petunia. Petunia is shorter than Sharmania who is the same height as Mike. Who is the tallest?</Form.Label>
                                        <Col sm={10}>
                                            <Form.Check type="radio" label="Mike" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                            <Form.Check type="radio" label="Petunia" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                            <Form.Check type="radio" label="Steve" name="formHorizontalRadios" id="formHorizontalRadios3" />
                                            <Form.Check type="radio" label="Phoebe" name="formHorizontalRadios" id="formHorizontalRadios4" />
                                            <Form.Check type="radio" label="Sharmania" name="formHorizontalRadios" id="formHorizontalRadios5" />
                                            <Form.Check type="radio" label="Bob" name="formHorizontalRadios" id="formHorizontalRadios6" />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <fieldset>
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Scholarship_Type__c">
                                        <Form.Label as="legend" style={{backgroundColor: '#ecbfff', padding: '0 300px 0 0'}}><b>Q9:</b>Jimmy is shorter than Kathy and Carla. Emmanuel is taller than Kathy. Nate is taller than Kathy and Emmanuel however, Emmanuel is taller than Carla. Who is the tallest?</Form.Label>
                                        <Col sm={10}>
                                            <Form.Check type="radio" label="Jimmy" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                            <Form.Check type="radio" label="Kathy" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                            <Form.Check type="radio" label="Carla" name="formHorizontalRadios" id="formHorizontalRadios3" />
                                            <Form.Check type="radio" label="Emmanuel" name="formHorizontalRadios" id="formHorizontalRadios4" />
                                            <Form.Check type="radio" label="Nate" name="formHorizontalRadios" id="formHorizontalRadios5" />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <hr></hr>
                                <Row>
                                    <h4>Section 5: Essay</h4>
                                </Row>
                                <br></br>
                                <Form.Group style={{backgroundColor:'#ecbfff'}}>
                                    <Form.Label>
                                        <p> In 350-700 words, tell us how you can relate your past experiences to how this program will help build your future.</p>
                                        
                                            <i>
                                                <p> Here are some ideas you may want to include in your essay:</p>                                
                                                <ul>
                                                    <li>Something that excites you</li>
                                                    <li>A time you overcame a significant hurdle</li>
                                                    <li>An accomplishment that you're proud of</li>
                                                    <li>What made you realize you're interested in technology</li>
                                                    <li>How you use technology daily</li>
                                                    <li>How you can stay motivated in a 3 month program</li>
                                                    <li>Why you should be chosen as a participant</li>
                                                    <li>How the program would change your future</li>
                                                </ul>
                                                <p> Anything submitted will be kept in full confidence.</p>
                                            </i>   
                                        
                                    </Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your essay here." onChange={this.handleInputChange} name="Short_Bio__c" required />
                                </Form.Group>
                            <Button variant="secondary" type="submit" onClick={(e) => this.postData(e)}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <br/>
            </Container>
        )
    }
};

export default ApplicationPhase2Content;