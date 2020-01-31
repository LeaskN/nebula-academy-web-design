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
                        <Row>
                            <h2 style={{marginTop:"20px"}}>The program application process consists of three phases. All candidates: Scholarship applicants, partial, full, and or paid applicants must complete all three phases.</h2>
                        </Row>
                        <Row style={{marginLeft:"20px", marginTop:"20px"}}>
                            <Col xs={10} lg={4}>
                                <h3>Phase I:</h3>
                                <Col xs={10}>
                                    <p>You provide personal background information (Allow for 15 to 30 minutes)</p>
                                </Col>
                            </Col>
                            <Col xs={10} lg={4}>
                                <h3>Phase II:</h3>
                                    <Col xs={10}>
                                        <p>Short Essays and Coding challenges are required for all candidates. (Allow for 2 - 4 hours if you have coding experience. If you don't, then expect 4 to 6 hours to go through the recommended tutorials and coding questions)</p>
                                    </Col>
                            </Col>
                            <Col xs={10} lg={4}>
                                <h3>Phase III:</h3>
                                    <Col xs={10} >
                                        <p>Each candidate will be required to do either an in person or video interview, scheduled through our program manager.</p>
                                        
                                    </Col>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col className="alignCenter">
                                <h3>Completing online Application:</h3>
                                    <p>To preserve your data, do not close your browser session until Phase I is complete. Upon completion of Phase I you will receive a link via email to begin Phase II. Questions? Contact us at succeed@nebulaacademyny.com. Phone: 631-468-7475</p>
                            </Col>
                        </Row>
                        <hr></hr>
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
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default ApplicationContent;