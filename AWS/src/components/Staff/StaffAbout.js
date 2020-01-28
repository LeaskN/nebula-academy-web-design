import React from "react";
import { Button, Modal, } from 'react-bootstrap';

export default class StaffAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false,
            showText:'false',
        }
    }
    handleShow = () => {
        console.log(this.props.state)
        let changeShow = !this.state.show;
        this.setState({ show: changeShow });
    };
    render() {
        
        return(
        <React.Fragment >
            <Button className="contentCentered fullWidth" variant="secondary" onClick={(e)=>this.handleShow()}>
                About {this.props.name}
            </Button>

            <Modal show={this.state.show}  onHide={(e)=>this.handleShow()}>
                <Modal.Header closeButton>
                <Modal.Title>About {this.props.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{lineHeight: '2.2em'}}>
                    <p>{this.props.state.bio}</p>
                </Modal.Body>
            </Modal>
        </React.Fragment>)
    }
}
