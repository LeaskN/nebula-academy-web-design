import React from "react";
import { Modal, } from 'react-bootstrap';

export default class CurrentOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: true,
        }
    }
    handleShow = () => {
        let changeShow = !this.state.show;
        this.setState({ show: changeShow });
    };
    render() {
        return(
        <React.Fragment>
            <Modal show={this.state.show}  onHide={(e)=>this.handleShow()}>
                <Modal.Header closeButton>
                <Modal.Title>Alert regarding Covid-19</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Anyone on the frontline battle against Covid-19 gets access to our courses for free:</h5>
                    This includes: 
                    <ol> 
                        <li>Doctors </li>
                        <li>Nurses</li>
                        <li>Grocery store employees</li>
                    </ol>
                    <h5>Everyone is affected in one way or another</h5>
                    <ol>
                        <li>Offer 1</li>
                        <li>Offer 2</li>
                        <li>Offer 3</li>
                    </ol>
                </Modal.Body>
            </Modal>
        </React.Fragment>)
    }   
}
