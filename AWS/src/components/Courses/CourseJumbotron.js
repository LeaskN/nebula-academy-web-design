import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CourseJumbotron.css'

export const CourseJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="courseJumbotron">
      <Container>
        <h1 className="jumboText">Courses</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

