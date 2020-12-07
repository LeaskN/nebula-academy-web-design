import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './StudentReviews.css';

class StudentReviews extends Component {
    constructor(props) {
        super(props);
        let stateFromProps = props.reviews;
        this.state = {
            reviews: stateFromProps, 
        };
        
    }

    createStudentReview = () => {
        return this.state.reviews.map((review, i) => { 
            console.log(review)
                return(
                    i % 2 ?
                    <Col sm={12} md={5} className="singleReview">
                        <img style={{ top: '-125px', right: '20px' }} className="studentReviewImg" src={review.image} />
                        <div>{review.title}</div>
                        <div className="reviewName">{review.name}</div>
                        <div>{review.quote}</div>
                        <div>STARS</div>
                    </Col> :
                    <Col sm={12} md={5} className="singleReview" style={{ flexDirection: 'row-reverse'}}>
                        <div style={{ flexDirection: 'row-reverse' }}>{review.title}</div>
                        <div className="reviewName">{review.name}</div>
                        <div>{review.quote}</div>
                        <div>STARS</div>
                        <img style={{ top: '-125px', left: '20px' }} className="studentReviewImg" src={review.image} />
                    </Col>
                )
            }
        )
        
    }
    render() {
        return (
            <Row className="studentReviewRow">
                {this.createStudentReview()}
            </Row>
            )
        }
};

export default StudentReviews;