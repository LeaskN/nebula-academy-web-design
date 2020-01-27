import React from "react";
import { Button, Modal, } from 'react-bootstrap';

export default class Conditions extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false,
            showText:'false',
        }
    }
    // handleClose = () => {this.setState({show: false})};
    handleShow = () => {
        let changeShow = !this.state.show;
        this.setState({ show: changeShow });
    };
    render() {
        
        return(
        <React.Fragment>
            <Button className="contentCentered fullWidth" variant="primary" onClick={(e)=>this.handleShow()}>
                Conditions
            </Button>

            <Modal show={this.state.show}  onHide={(e)=>this.handleShow()}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Project & Certification Conditions:</h5>
                    <ol>
                        <li>Pass your AWS Cloud Practitioner exam</li>
                        <li>Have five live projects assessed and accepted by program manager</li>
                        <li>All project assessments passed at a minimum of 80% (can be re-taken)</li>
                        <li>Resume submitted, reviewed, and approved by program manager</li>
                    </ol>
                    <h5>For the final two weeks of the program the following must be accomplished each day:</h5>
                    <ol>
                        <li>20 One click applications</li>
                        <li>10 LinkedIn applications</li>
                        <li>2 Industry website application</li>
                    </ol>
                </Modal.Body>
            </Modal>
        </React.Fragment>)
    }

    
}
