import React, { Component }from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionNav.css';

class SectionNav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    focused(e){
        let slashArr = window.location.href.split('/')
        let index = slashArr.length-1
        this.setState({
            selectedSection: slashArr[index],
        })
    }
render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="sections">
                        <Col className={this.state.selectedSection !== "" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/" onClick={(e)=> this.focused(e)} >Overview</a></Col>
                        <Col className={this.state.selectedSection !== "Program" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Program" onClick={(e)=> this.focused(e)}>Program</a></Col>
                        <Col className={this.state.selectedSection !== "Curriculum" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Curriculum" onClick={(e)=> this.focused(e)}>Curriculum</a></Col>
                        <Col className={this.state.selectedSection !== "Internships" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Internships" onClick={(e)=> this.focused(e)}>Internships</a></Col>
                        <Col className={this.state.selectedSection !== "Outcomes" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Outcomes" onClick={(e)=> this.focused(e)}>Outcomes</a></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default SectionNav;