import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './InfoPanel.css';

class InfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.state.elements[0],
        };
    }
    componentDidMount(){
        let stateFromProps = this.props;
        // for(let item in stateFromProps.state){
        //     let currentItem = stateFromProps.state[item]
        //     this.setState({
        //         [item]: currentItem
        //     })
        // }
        // Create a key value signature for each element
        const elementsObj = stateFromProps.state.elements.reduce((acc, cur) => {
            const title = cur.header.split(" ").join("").toLowerCase();
            acc[title] = {...cur};
            return acc;
        }, {});

        for(let item in elementsObj){
            this.setState({
                [item]: elementsObj[item]
            })
        }
    }
    circleCategoryClick = (e) => {
        e.preventDefault()
        this.refs.infoPanel.scrollIntoView({ block: "center" });
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        for(let i = 0; i < e.target.parentElement.children.length; i++){
            e.target.parentElement.children[i].style.backgroundColor = 'transparent';
            e.target.parentElement.children[i].style.backgroundColor = 'transparent';
            e.target.parentElement.children[i].style.border = `3px solid #${this.props.state.elements[i].color}`;
            e.target.parentElement.children[i].style.color = 'black';
            e.target.style.boxShadow = `0px 0px 10px 3px transparent`;
        }
        this.setState({
            activeTitle: targetTitle,
            active: this.state[targetTitle],
            justClicked: true
        })
        // console.log(this.state.active)
        e.target.style.backgroundColor = this.state[targetTitle].color;
        e.target.style.border = `3px solid ${e.target.style.backgroundColor}`;
        e.target.style.color = 'white';
    }
    mouseOver = (e) => {
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        e.target.style.backgroundColor = this.state[targetTitle].color;
        e.target.style.border = '3px solid white';
        e.target.style.boxShadow = `0px 0px 10px 3px ${e.target.style.backgroundColor}`;
        e.target.style.color = 'white';
    }
    mouseAway = (e) => {
        let nextBorderColor = e.target.style.backgroundColor;
        if(this.state.active.header === e.target.innerHTML){
            e.target.style.border = `3px solid ${this.state.active.color}`;
        } else {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.border = `3px solid ${nextBorderColor}`;
            e.target.style.color = 'black';
        }
        e.target.style.boxShadow = `0px 0px 10px 3px transparent`;
        if(this.state.justClicked){
            this.setState({
                justClicked: false,
            })
        } 
    }
    createShape = () => {
        return (
            this.props.state.elements.map(element => (
                    <div 
                        className={`${this.props.state.shape}`} 
                        key={element.header} 
                        style={
                            {
                                border: `3px solid ${element.color}`, 
                                color:`${ this.state.active.header === `${element.header}` ? 'white' : 'black'}`, 
                                backgroundColor:`${ this.state.active.header === `${element.header}` ? `${element.color}` : 'transparent'}`
                            }
                        } 
                        onMouseEnter={ e => this.mouseOver(e)}
                        onMouseLeave={ e => this.mouseAway(e)}
                        onClick={e => this.circleCategoryClick(e)}
                    >
                        {element.header}
                    </div>
                )
            )
        )
    }
    createLine = () => {
        return(
            this.props.state.elements.map(element => (
                <div 
                    className="line" 
                    key={element.color} 
                    style={{backgroundColor:`${ this.state.active.header === `${element.header}` ? `${element.color}` : 'transparent'}`}} 
                >
                </div>
            ))
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="shapeContainer">
                    <Row className="circleContainer" >
                        {this.createShape()}
                    </Row>
                    <Row className="lineContainer">
                        {this.createLine()}
                    </Row>
                </div>
                <Row ref="infoPanel" style={{backgroundColor: `${this.state.active.color}`, border:`3px solid ${this.state.active.color}`}} className="dynamicContentInfo">
                    <Col xs={12}>
                        <h1>{this.state.active.header}</h1>
                        {/* {this.state.active.content.map(paragraph => <p>{paragraph}</p>)} */}
                        {typeof this.state.active.content === 'string' ? <p>{this.state.active.content}</p> : this.state.active.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
                        {this.state.active.buttonText && this.state.active.linkLeavesSite ? <Button target="_blank" href={this.state.active.buttonURL} variant="outline-light">{this.state.active.buttonText}</Button> : null}
                    </Col>
                    {this.state.active.buttonURL && !this.state.active.linkLeavesSite ? <Col><Button variant="dark" style={{textShadow:'0px 0px 0px black'}} target="blank" href={this.state.active.buttonURL}>{this.state.active.buttonText}</Button></Col>:<></>}
                </Row>
            </React.Fragment>
        )
    }
};


export default InfoPanel;