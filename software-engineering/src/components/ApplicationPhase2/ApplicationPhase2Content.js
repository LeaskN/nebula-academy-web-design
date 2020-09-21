import React, { Component }from 'react';
import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap';
import './ApplicationPhase2Content.css'
import keypad from '../../assets/keypadImage.png'

class ApplicationPhase2Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "Name" : "",
            "Last" : "",
            "Answers":{
                "Answer_1__c": '',
                "Answer_2__c": '',
                "Answer_3__c": '',
                "Answer_4__c": '',
                "Answer_5__c": '',
                "Answer_6__c": '',
                "Answer_7__c": '',
                "Answer_8__c": '',
                "Answer_9__c": '',
                "Answer_10__c": ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    id(){
        let str = window.location.href;
        let n = str.lastIndexOf('/');
        let result = str.substring(n+1, n+8)
        return result;
    }
    postData(e) {
        e.preventDefault();
        if( 
            (!this.state.Answers.Answer_1__c && !this.state.Answers.Answer_2__c && !this.state.Answers.Answer_3__c) ||
            (!this.state.Answers.Answer_1__c && !this.state.Answers.Answer_2__c) ||
            (!this.state.Answers.Answer_1__c && !this.state.Answers.Answer_3__c) ||
            (!this.state.Answers.Answer_2__c && !this.state.Answers.Answer_3__c)
        ){
            alert('For questions 1, 2, & 3 please respond to two of the three questions. In the one you choose to omit please write "skip" into the text field"');
            return
        }
        else if(!this.state.Answers.Answer_4__c){
            alert('Please complete question 4.')
            return
        }
        else if(!this.state.Answers.Answer_5__c){
            alert('Please complete question 5.')
            return
        }
        else if(!this.state.Answers.Answer_6__c){
            alert('Please complete question 6.')
            return
        }
        else if(!this.state.Answers.Answer_7__c){
            alert('Please complete question 7.')
            return
        }
        else if(!this.state.Answers.Answer_8__c){
            alert('Please complete question 8.')
            return
        }
        else if(!this.state.Answers.Answer_9__c){
            alert('Please complete question 9.')
            return
        }
        else if(!this.state.Answers.Answer_10__c){
            alert('Please complete question 10.')
            return
        }
        
        this.setState({loader:true});
        fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/application/phase2/${this.id()}`, {
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
            console.log(response.status);
            this.setState({loader: false})
            if(response.status !== 200){
                alert("We're unable to match your provided name, email, or ID to an existing application. If you have completed the phase 1 application for the Software Engieering program please copy the link provided to you from succed@nebulaacademyny.com (could be in your junkmail) and ensure you are writing your information in an identical fashion to your application.");
                throw new Error(response.status)
            } else {
                return response.json();
            }

             
        })
        .then((response) => {
            if(response.errors.length === 0){
                alert(`Phase II of the application completed. Please give the team some time to review your application.\n\nIMPORTANT! This is an automated email and can land in your junkmail. Please whitelist succeed@nebulaacademyny.com and check your junk or spam mail for your confirmation.\n\nIf after 15 minutes you still haven’t received your confirmation please email succeed@nebulaacademyny.com`);
            } else {
                alert(`It seems that your device is unable to submit through this form. Please submit using this link: https://bit.ly/2E96QRN\n\nThe link is case-sensitive.`)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    fixJSON(){
        let tempObj = this.state;
        delete tempObj.cohortOptions;
        delete tempObj.loading;
        delete tempObj.Id;
        delete tempObj.loader;
        //if the temporary object contains a list make it a semicolon seperated list
        console.log(tempObj)
        return JSON.stringify(tempObj);
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'radio' ? target.alt : target.value;
        let name = target.name;

        if(name === 'Name' || name === 'Last'){
            this.setState({
                [name]: value.trim(),
            })
        } else {
            let answers = this.state.Answers;
            answers[name] = value;
            this.setState({
                "Answers" : answers
            })
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
                                    <Form.Control required input="true" onChange={this.handleInputChange} name="Name" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last</Form.Label>
                                    <Form.Control required onChange={this.handleInputChange} name="Last" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required input="true" name="Email_ID__c" type="email" placeholder="Enter Email" />
                                </Form.Group>
                                 <Form.Group as={Col}>
                                    <Form.Label>ID (should match ID provided via email)</Form.Label>
                                    <Form.Control required input="true" name="Id" disabled placeholder={this.id()} />
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
                                <Form.Group className="question">
                                    <Form.Label className="top"><b>Q1:</b> Explain the internet to someone coming out of a 30 year coma.</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 1 here." onChange={this.handleInputChange} name="Answer_1__c" required />
                                </Form.Group>
                                <Form.Group className="question">
                                    <Form.Label className="top"><b>Q2:</b> Describe a color to a blind person (for example purple, green, or yellow).</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 2 here." onChange={this.handleInputChange} name="Answer_2__c" required />
                                </Form.Group>
                                <Form.Group className="question">
                                    <Form.Label className="top"><b>Q3:</b> Write instructions teaching someone to make an egg sandwich.</Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 3 here." onChange={this.handleInputChange} name="Answer_3__c" required />
                                </Form.Group>
                            <hr></hr>
                            {/* Section 3: Logical Thinking */}
                            <Row>
                                <h4>Section 3: Logical Thinking</h4>
                            </Row>
                            <br></br>
                                <Form.Group className="question">
                                    <Form.Label className="top">
                                        <p><b>Q4:</b> You are a spy following a target who just entered a building with a door locked by a keypad. You noticed they clearly punched in 4 numbers and you walk up to the keypad.</p> 
                                        <p>Based on the following image what code would you punch in and why?</p>
                                    </Form.Label>
                                    <Row>
                                        <Col><Image style={{display:'flex', maxWidth: '500px', margin:'auto'}} src={ keypad } fluid /></Col>
                                    </Row>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 4 here." onChange={this.handleInputChange} name="Answer_4__c" required />
                                </Form.Group>
                                <Form.Group className="question">
                                    <Form.Label className="top"><b>Q5:</b> What is the next number in the following series: <i>13, 19, 25, 31, 37, 43</i></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 5 here." onChange={this.handleInputChange} name="Answer_5__c" required />
                                </Form.Group>
                                <Form.Group className="question">
                                    <Form.Label className="top"><b>Q6:</b> Determine the missing numbers in the series: <i>5, 1, 9, 6, _, _, 17, 16</i></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your response to question 6 here." onChange={this.handleInputChange} name="Answer_6__c" required />
                                </Form.Group>
                                <hr></hr>
                                {/* Section 4: Multiple Choice */}
                                <Row>
                                    <h4>Section 4: Multiple Choice</h4>
                                </Row>
                                <br></br>
                                <fieldset className="question">
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Answer_7__c">
                                        <Form.Label  className="top"  ><b>Q7:</b> Arrange the following words in a meaningful sequence.
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
                                            <Form.Check type="radio" label="1, 3, 2, 4, 5" name="Answer_7__c" id="formHorizontalRadios1" alt="1, 3, 2, 4, 5"/>
                                            <Form.Check type="radio" label="2, 3, 4, 5, 1" name="Answer_7__c" id="formHorizontalRadios2" alt="2, 3, 4, 5, 1"/>
                                            <Form.Check type="radio" label="5, 2, 3, 1, 4" name="Answer_7__c" id="formHorizontalRadios3" alt="5, 2, 3, 1, 4"/>
                                            <Form.Check type="radio" label="2, 4, 3, 5, 1" name="Answer_7__c" id="formHorizontalRadios4" alt="2, 4, 3, 5, 1"/>
                                            <Form.Check type="radio" label="5, 2, 4, 3, 1" name="Answer_7__c" id="formHorizontalRadios5" alt="5, 2, 4, 3, 1"/>
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <fieldset className="question">
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Answer_8__c">
                                        <Form.Label  className="top" ><b>Q8:</b> Mike is taller than Petunia who is the same height as Steve. Steve is shorter than Phoebe who is taller than Sharmania, Bob, and Petunia. Petunia is shorter than Sharmania who is the same height as Mike. Who is the tallest?</Form.Label>
                                        <Col sm={10}>
                                            <Form.Check type="radio" label="Mike" name="Answer_8__c" id="formHorizontalRadios6" alt="Mike" />
                                            <Form.Check type="radio" label="Petunia" name="Answer_8__c" id="formHorizontalRadios7" alt="Petunia" />
                                            <Form.Check type="radio" label="Steve" name="Answer_8__c" id="formHorizontalRadios8" alt="Steve" />
                                            <Form.Check type="radio" label="Phoebe" name="Answer_8__c" id="formHorizontalRadios9" alt="Phoebe" />
                                            <Form.Check type="radio" label="Sharmania" name="Answer_8__c" id="formHorizontalRadios10" alt="Sharmania" />
                                            <Form.Check type="radio" label="Bob" name="Answer_8__c" id="formHorizontalRadios11" alt="Bob" />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <fieldset className="question" >
                                    <Form.Group as={Row} required onChange={this.handleInputChange} className="Answer_9__c">
                                        <Form.Label  className="top" ><b>Q9:</b>Jimmy is shorter than Kathy and Carla. Emmanuel is taller than Kathy. Nate is taller than Kathy and Emmanuel however, Emmanuel is taller than Carla. Who is the tallest?</Form.Label>
                                        <Col sm={10}>
                                            <Form.Check type="radio" label="Jimmy" name="Answer_9__c" id="formHorizontalRadios12" alt="Jimmy"/>
                                            <Form.Check type="radio" label="Kathy" name="Answer_9__c" id="formHorizontalRadios13" alt="Kathy"/>
                                            <Form.Check type="radio" label="Carla" name="Answer_9__c" id="formHorizontalRadios14" alt="Carla"/>
                                            <Form.Check type="radio" label="Emmanuel" name="Answer_9__c" id="formHorizontalRadios15" alt="Emmanuel"/>
                                            <Form.Check type="radio" label="Nate" name="Answer_9__c" id="formHorizontalRadios16" alt="Nate"/>
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <hr></hr>
                                <Row>
                                    <h4>Section 5: Essay</h4>
                                </Row>
                                <br></br>
                                <Form.Group className="question">
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
                                    <Form.Control type="text" as="textarea" rows="3" placeholder="Write your essay here." onChange={this.handleInputChange} name="Answer_10__c" required />
                                </Form.Group>
                            <Button variant="secondary" type="submit" onClick={(e) => this.postData(e)}>Submit</Button>
                            {this.state.loader? <div className='fullScreen'><h1 className="loaderText"><br></br>Submitting</h1><div className="loader"><div></div><div></div><div></div></div></div>:<span></span>}
                        </Form>
                    </Col>
                </Row>
                <br/>
            </Container>
        )
    }
};

export default ApplicationPhase2Content;