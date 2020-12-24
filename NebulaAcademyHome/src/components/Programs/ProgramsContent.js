import React, { Component } from 'react'

import './ProgramsContent.css'

class Programs extends Component {
    constructor(props){
        super(props);
        this.state = {
            programs: [
                {id: 1, title: 'title1', image: 'image1', text:'text1'},
                {id: 2, title: 'title2', image: 'image2', text:'text2'},
                {id: 3, title: 'title3', image: 'image3', text:'text3'},
                {id: 4, title: 'title4', image: 'image4', text:'text4'}
            ]
        }
    }
    render(){
        return (
            <div>
                <h1>Programs</h1>
            </div>
        )
    }
}

export default Programs;