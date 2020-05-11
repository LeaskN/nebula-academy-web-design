import React from "react";
import { Button, Modal, Alert, Col, Row } from 'react-bootstrap';


export default class Conditions extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false,
            showText:'false',
        }
    }
    handleShow = () => {
        let changeShow = !this.state.show;
        this.setState({ show: changeShow });
    };
    render() {
        
        return(
        <React.Fragment>
            <Button style={{margin:'6px', width:'300px'}} className="contentCentered fullWidth" variant="warning" onClick={(e)=>this.handleShow()}>
                In Person Registration
            </Button>

            <Modal show={this.state.show}  onHide={(e)=>this.handleShow()}>
                <Modal.Header closeButton>
                <h1>AWS Academy Cloud Foundations - <b>In Person</b></h1>
                </Modal.Header>
                <Alert variant="danger" style={{height: '100%', margin: '0px'}}>
                    <Row>
                        <Col>
                            <h4> COVID-19 Alert:</h4>
                            <p>Unfortunately, due to the global COVID-19 outbreak, Nebula Academy is temporarily on hold our in person AWS training sessions as our students' safety is our main concern.
                            That said, the Nebula team is offering both Virtual and Live Virtual courses to provide our students with a flexible and comprehensive learning experience regardless of the situation.</p>
                            <hr></hr>
                            <p className="mb-0">
                            Please continue to stay healthy and safe. 
                            </p>
                            <hr></hr>
                            <p className="mb-0">
                            Register for a virtual class below: 
                            </p>
                            <br></br>
                            <Row style={{display:'flex', justifyContent:'center',}}>
                                <Button style={{margin:'6px', width:'300px'}} href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=11903416" target="empty" variant="warning">Virtual Registration</Button>
                                {/* <Button style={{margin:'6px', width:'300px'}} href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10267054" target="empty" variant="warning">Live Virtual Registration</Button> */}
                            </Row>
                            {/* <Button style={{margin:'6px', width:'300px'}} href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10096510" target="empty" variant="warning">In Person Registration</Button> */}
                        </Col>
                    </Row>
                </Alert>
            </Modal>
        </React.Fragment>)
    }

    
}
