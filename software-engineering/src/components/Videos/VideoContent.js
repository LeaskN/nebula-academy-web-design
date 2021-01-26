import React, { Component } from 'react'
import './VideoContent.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
class VideoContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            seV1Videos: [
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334"
            ],
            seV2Videos: [
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334",
                "https://player.vimeo.com/video/503214334"
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
                            <Carousel responsive={responsive}>
                            {this.state.seV1Videos.map(video => (
                                <iframe src={video} width="300" height='auto' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                             ))}
                            </Carousel>
                        </div>
                        <div class ='videoGroup'>
                            <h3>Software Engineering Bootcamp V2 Videos</h3>
                            {this.state.seV2Videos.map(video => (
                                <iframe src={video} width="300" height='auto' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                             ))}
                        </div>
                    
                    </div>
            </div>
        )
    }
}

export default VideoContent;