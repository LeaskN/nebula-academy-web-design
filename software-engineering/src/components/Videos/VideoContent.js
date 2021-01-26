import React, { Component } from 'react'

import './VideoContent.css'

class VideoContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            seV1Videos: [
                "https://player.vimeo.com/video/503214334",
                "https://www.youtube.com/embed/W6NZfCO5SIk",
                "https://www.youtube.com/embed/W6NZfCO5SIk"
            ],
            seV2Videos: [

            ]
        }
    }
    render(){
        return (
            <div>
                <h1></h1>
                    <div id='videoList'>
                        <div class ='videoGroup'>
                            <h3>Software Engineering Bootcamp V1 Videos</h3>
                            {this.state.seV1Videos.map(video => (
                                <iframe src={video} width="300" height='auto' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                             ))}
                        </div>
                    
                    </div>
            </div>
        )
    }
}

export default VideoContent;