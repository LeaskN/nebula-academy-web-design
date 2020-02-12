import React, { Component }from 'react';
import { Container } from 'react-bootstrap';
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
        this.setState({});
    }
    render() {
        return (
            <Container>
                <h1>Acuity form for registration</h1>
                <h1>Scholarship form</h1>
            </Container>
        )
    }
};

export default ApplicationContent;