import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './StaffContent.css';
import LaurieImage from "../../assets/LaurieNebulaAcademy.jpg"
import NicImage from "../../assets/NicLeaskPHOTO.jpg"
import MichaelImage from "../../assets/MCNebulaAcademy.jpg"
import FrancineImage from "../../assets/FTMNebulaAcademy.jpg"
import JuleneImage from "../../assets/DrJuleneReedNebulaAcademy.jpg"

export const StaffContent = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col>
                    <div className="imageContainer">
                        <Image src={LaurieImage} fluid />
                    </div>
                    <br/>
                    <h2 className="centralText">Laurie Carey</h2>
                    <h4 className="greyText centralText">CEO & Education Management Consultant</h4>
                    <a className="link centralText" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20">
                    Book Laurie's Time
                    </a>
                    <hr/>
                </Col>
                <Col>
                    <div className="imageContainer">
                        <Image src={NicImage} fluid />
                    </div>
                    <br/>
                    <h2 className="centralText">Nic Leask</h2>
                    <h4 className="greyText centralText">STEAM Coach & Software Engineer</h4>
                    <a className="link centralText" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20">
                    Nic's LinkedIn
                    </a>
                    <hr/>
                </Col>
                <Col>
                    <div className="imageContainer">
                        <Image src={MichaelImage} fluid />
                    </div>
                    <br/>
                    <h2 className="centralText">Michael Carey</h2>
                    <h4 className="greyText centralText">STEAM Coach & AWS Software Architect</h4>
                    <a className="link centralText" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20">
                    Michael's LinkedIn
                    </a>
                    <hr/>
                </Col>
                <Col>
                    <div className="imageContainer">
                        <Image src={FrancineImage} fluid />
                    </div>
                    <br/>
                    <h2 className="centralText">Francine Maione</h2>
                    <h4 className="greyText centralText">Instructional Technology Consultant</h4>
                    <a className="link centralText" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20">
                    Francine's LinkedIn
                    </a>
                    <hr/>
                </Col>
                <Col>
                    <div className="imageContainer">
                        <Image src={JuleneImage} fluid />
                    </div>
                    <br/>
                    <h2 className="centralText">Dr. Julene Reed</h2>
                    <h4 className="greyText centralText">Professional Development Consultant </h4>
                    <a className="link centralText" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20">
                    Dr. Julene's LinkedIn
                    </a>
                    <hr/>
                </Col>
            </Row>
       </Container>      
    </React.Fragment>
)

