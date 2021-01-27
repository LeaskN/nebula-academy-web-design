import React, { Component } from 'react'
import './VideoContent.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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
            seV2Videos: [
                {
                    v2Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV2 Video1'
                },
                {
                    v2Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV2 Video2'
                },
                {
                    v2Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV2 Video3'
                },
                {
                    v2Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV2 Video4'
                },
                {
                    v2Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV2 Video5'
                },

                
                
            ],
            seV1Videos: [
                {
                    v1Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV1 Video1'
                },
                {
                    v1Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV1 Video2'
                },
                {
                    v1Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV1 Video3'
                },
                {
                    v1Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV1 Video4'
                },
                {
                    v1Video: "https://player.vimeo.com/video/503214334",
                    title: 'SEV1 Video5'
                },
            ]
        }
    }

    
    render(){
        return (
            <div id='videoList'>
                <div className ='videoGroup'>
                    <h4>Software Engineering Bootcamp V2 Videos</h4>
                        <Carousel className='carousel' responsive={responsive}>
                        {this.state.seV2Videos.map(video => (
                            <div className='singleVideo'>
                            <iframe src={video.v2Video} width="400" height='auto' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            <p>{video.title}</p>
                            </div>
                        ))}
                        </Carousel>
                </div>
                <div className ='videoGroup'>
                    <h4>Software Engineering Bootcamp V1 Videos</h4>
                        <Carousel className='carousel' responsive={responsive}>
                        {this.state.seV1Videos.map(video => (
                            <div className='singleVideo'>
                            <iframe src={video.v1Video} width="400" height='auto' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            <p>{video.title}</p>
                            </div>
                        ))}
                        </Carousel>
                </div>
            </div>
        )
    }
}

export default VideoContent;