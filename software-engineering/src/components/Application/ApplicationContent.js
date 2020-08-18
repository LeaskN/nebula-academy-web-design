import React, { Component }from 'react';
// import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './ApplicationContent.css';

class applicationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: [],
        };        
    }
    
    render() {
        return (
            <div style={{margin: '0 20px 0px 20px'}}>
                <iframe 
                    title='SE Program Application'
                    width="640px" 
                    src= "https://forms.office.com/Pages/ResponsePage.aspx?id=DYC-61190U-xMgLVy3lNnmhMOgtjMC5JhCXq1Gwz5J5UQjlZMUZKSVFNRUxYVEpTRThOMlo2UEoxTyQlQCN0PWcu&embed=true" 
                    frameborder= "0" 
                    marginwidth= "0" 
                    marginheight= "0" 
                    style={{border: 'none', maxWidth:'100%', display:'flex', margin:'auto', height:'80vh'}} 
                    allowfullscreen 
                    webkitallowfullscreen 
                    mozallowfullscreen 
                    msallowfullscreen> 
                </iframe>
            </div>
        )
    }
};

export default applicationContent;