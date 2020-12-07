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
            console.log(review.image)
                return(
                    i % 2 ?
                    <Col key={i} sm={12} md={5} className="singleReview">
                        <div className='singleReviewImg' style={{ backgroundImage:`url(${review.image})`, top: '-125px', right: '20px' }} src={review.image} ></div>
                        <h2 className="singleReviewHeader">"{review.header}"</h2>
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <div>{review.name}</div>
                        <div>{review.quote}</div>

                    </Col> :
                    <Col key={i} sm={12} md={5} className="singleReview" style={{ flexDirection: 'row-reverse'}}>
                        <div className='singleReviewImg' style={{ backgroundImage:`url(${review.image})`, top: '-125px', left: '20px' }} src={review.image} ></div>
                        <h2 className="singleReviewHeader" style={{ flexDirection: 'row-reverse' }}>"{review.header}"</h2>
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <div>{review.name}</div>
                        <div>{review.quote}</div>
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