import React, { Component }from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionNav.css';

class SectionNav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
                        <Col className={this.state.selectedSection !== "" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/" onClick={(e)=> this.focused(e)} >Methodology</a></Col>
                        <Col className={this.state.selectedSection !== "Program" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/programs" onClick={(e)=> this.focused(e)}>Programs</a></Col>
                        <Col className={this.state.selectedSection !== "Curriculum" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Curriculum" onClick={(e)=> this.focused(e)}>Curriculum</a></Col>
                        <Col className={this.state.selectedSection !== "Certifications" ? "section" : "section selectedSectionNav "}><a className="customLink" href="/Certifications" onClick={(e)=> this.focused(e)}>Certifications</a></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default SectionNav;