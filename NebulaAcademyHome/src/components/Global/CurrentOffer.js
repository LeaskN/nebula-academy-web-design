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
                    <h5>Anyone on the frontline battle against Covid-19 will be granted access to select courses for free.</h5>
                    <p>This includes, doctors, nurses, and grocery store employees.</p>
                    <p>If you aren't in any of these roles but feel you qualify, or if you'd like more information on the offer, please reach out to succeed@nebulaacademyny.com.</p>
                    {/* <h5>Everyone is affected in one way or another</h5>
                    <ol>
                        <li>Offer 1</li>
                        <li>Offer 2</li>
                        <li>Offer 3</li>
                    </ol> */}
                </Modal.Body>
            </Modal>
        </React.Fragment>)
    }   
}
