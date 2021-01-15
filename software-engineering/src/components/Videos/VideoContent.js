import React, { Component } from 'react'

import './Videos.css'

class VideoContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            seV1Videos: [
                
            ],
            seV2Videos: [

            ]
        }
    }
    render(){
        return (
            <div>
                <h1>Videos</h1>
                <iframe src="https://www.youtube.com/embed/W6NZfCO5SIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default VideoContent;