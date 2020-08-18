import React, { Component }from 'react';
import './ApplicationContent.css'

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
            <div style={{display:'flex', justifyContent:'center', height:'7300px', margin:'20px', backgroundColor: 'white'}}>
                <iframe 
                    title='SE Program Application'
                    width="640px" 
                    src= "https://forms.office.com/Pages/ResponsePage.aspx?id=DYC-61190U-xMgLVy3lNnmhMOgtjMC5JhCXq1Gwz5J5UQjlZMUZKSVFNRUxYVEpTRThOMlo2UEoxTyQlQCN0PWcu&embed=true" 
                    frameborder= "0" 
                    marginwidth= "0" 
                    marginheight= "0" 
                    style={{border: 'none', maxWidth:'100%', height:'7290px'}} 
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