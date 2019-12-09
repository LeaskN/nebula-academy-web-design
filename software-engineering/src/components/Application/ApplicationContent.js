import React from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import './ApplicationContent.css'

export const ApplicationContent = () => (
  <React.Fragment>
    <Container>
        <h1>Application</h1>
        <p>About 3-5 sentences</p>
        <p>Must include length of time the course takes, AWS, JS, React, and WF experience</p>   
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Enter Phone Number" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="New York City"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="New York"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="10001"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridOnlineProfile1">
                    <Form.Label>Online Profile 1</Form.Label>
                    <Form.Control placeholder="Ex: LinkedIn"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridOnlineProfile2">
                    <Form.Label>Online Profile 2</Form.Label>
                    <Form.Control placeholder="Ex: GitHub"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridOnlineProfile3">
                    <Form.Label>Online Profile 3</Form.Label>
                    <Form.Control placeholder="Ex: Portfolio"/>
                </Form.Group>
            </Form.Row>
                <Form.Group controlId="FormControlShortBio">
                    <Form.Label>Short Bio</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Tell us about yourself." />
                </Form.Group>
                <Form.Group controlId="FormControlHearProgram">
                    <Form.Label>How did you hear about our program?</Form.Label>
                    <Form.Control as="select">
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
                <Form.Group controlId="FormControlCohort">
                    <Form.Label>Which cohort are you applying to?</Form.Label>
                    <Form.Control as="select">
                        <option>March 2 - August 7 2019</option>
                        <option>September 1 - February 26 2019</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="FormControlHowAttend">
                    <Form.Label>How would you like to attend?</Form.Label>
                        <Form.Check aria-label="option 1" label="Virtual"/> 
                        <Form.Check aria-label="option 2" label="In-Person (Syosset, NY)"/> 
                </Form.Group>
                <Form.Group controlId="FormControlCohort">
                    <Form.Label>What is your highest education level?</Form.Label>
                    <Form.Control as="select">
                        <option>High School</option>
                        <option>Associate Degree</option>
                        <option>Bacherlors Degree</option>
                        <option>Masters</option>
                        <option>Doctorate</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>List any other education not included above:</Form.Label>
                    <Form.Control placeholder="Certifications, self-learning, etc.."/>
                </Form.Group>
                <Form.Group controlId="FormControlCohort">
                    <Form.Label>Which of the following do you identify with (select all that apply)?</Form.Label>
                    <Form.Check aria-label="option 1" label="Caucasian"/> 
                    <Form.Check aria-label="option 2" label="African American"/> 
                    <Form.Check aria-label="option 3" label="Hispanic or Latin Origin"/> 
                    <Form.Check aria-label="option 7" label="Asian"/> 
                    <Form.Check aria-label="option 4" label="Native American"/> 
                    <Form.Check aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                    <Form.Check aria-label="option 5" label="Middle Eastern or North African"/> 
                    <Form.Check aria-label="option 5" label="Female"/>
                    <Form.Check aria-label="option 5" label="Male"/> 
                    <Form.Check aria-label="option 5" label="Nonbinary"/> 
                    <Form.Check aria-label="option 5" label="LGBTQIA+"/> 
                    <Form.Check aria-label="option 5" label="Other"/> 
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>What are your primary intentions for enrolling in this program?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="I intend to start a new lob within 180 days of graduating the program."/> 
                        <option aria-label="option 2" label="I intend to start a business or become a self-employed contractor upon graduation."/> 
                        <option aria-label="option 3" label="I intend to remain with my current employer upon graduation."/> 
                        <option aria-label="option 4" label="I am attending the program to learn new skills for self-enrichment and do not intent to pursue a job upon graduation."/> 
                        <option aria-label="option 5" label="I am attending the program in prepartion to enroll in an accredited post-secondary institution and do not intend to pursur a job upon graduation."/> 
                        <option aria-label="option 6" label="Other"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>Do you have coding experience?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="None"/> 
                        <option aria-label="option 2" label="Beginner (100 hours or less of tutorials)"/> 
                        <option aria-label="option 3" label="Intermediate (Three or fewer classes and personal projects)"/> 
                        <option aria-label="option 4" label="Advanced (Degree or professional experience)"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>Are you interested in any of the following scholarships?</Form.Label>
                    <Form.Check aria-label="option 1" label="Veteren In Person"/> 
                    <Form.Check aria-label="option 2" label="Women re-entering the workforce"/> 
                    <Form.Check aria-label="option 3" label="Hispanic or Latin Origin"/> 
                    <Form.Check aria-label="option 7" label="Asian"/> 
                    <Form.Check aria-label="option 4" label="Native American"/> 
                    <Form.Check aria-label="option 5" label="Native Hawaiian or Other Pacific Islander"/> 
                    <Form.Check aria-label="option 5" label="Middle Eastern or North African"/> 
                    <Form.Check aria-label="option 5" label="Female"/>
                    <Form.Check aria-label="option 5" label="Male"/> 
                    <Form.Check aria-label="option 5" label="Nonbinary"/> 
                    <Form.Check aria-label="option 5" label="LGBTQIA+"/> 
                    <Form.Check aria-label="option 5" label="Other"/> 
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>If you are a VET do you intend to use the VET TEC program to pay for tuition and housing?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="Yes"/> 
                        <option aria-label="option 2" label="No"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>If you are a VET do you have GI BILL benefits you would like to use?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="Yes"/> 
                        <option aria-label="option 2" label="No"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>Are you currently authorized to work in the US?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="Yes"/> 
                        <option aria-label="option 2" label="No"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Label>Are you a US citizen or permanent resident?</Form.Label>
                    <Form.Control as="select">
                        <option aria-label="option 1" label="Yes"/> 
                        <option aria-label="option 2" label="No"/> 
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridOnlineProfile3">
                    <Form.Check aria-label="option 1" label="I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll."/> 
                </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  </React.Fragment>
)

