import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import './CertificationsContent.css'
import slideHolder from "../../assets/1_AWS_home.jpg"


class CertificationsContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }
    };
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>The value of a blended education model:</h1>
                        <p>language for this needs to be developed</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                        height="300px"
                        className="d-block w-100"
                        src={slideHolder}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        height="300px"
                        className="d-block w-100"
                        src={slideHolder}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        height="300px"
                        className="d-block w-100"
                        src={slideHolder}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Relevant quote (Edu leader?)</h1>
                        <p>The primary focus of this program is to have participants land jobs in coding & technology oriented roles. There are different paths that one can take to achieve this goal but the most consistent is through internship opportunities. We are partnered with many local companies who are looking for Software Engineering interns. These roles frequently lead to job placement within that company or open up new avenues towards full time employment elsewhere.</p>
                        <h1>Description as to why the evolution of education is important</h1>
                        <p>The primary focus of this program is to have participants land jobs in coding & technology oriented roles. There are different paths that one can take to achieve this goal but the most consistent is through internship opportunities. We are partnered with many local companies who are looking for Software Engineering interns. These roles frequently lead to job placement within that company or open up new avenues towards full time employment elsewhere.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </React.Fragment>
        )
    }
};

export default CertificationsContent;
