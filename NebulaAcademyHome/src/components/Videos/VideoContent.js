import React, { Component } from "react";
import "./VideoContent.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seBootcamp: [
        {
          url: "https://player.vimeo.com/video/503213697",
          title: "About the Program",
        },
        {
          url: "https://player.vimeo.com/video/500894129",
          title: "Bootcamp Expectations",
        },
        // {
        //   v2Video: null,
        //   title: null,
        // },
      ],

      seV2Videos: [
        {
          url: "https://player.vimeo.com/video/500893655",
          title: "Patrick's Outcome",
        },
        {
          url: "https://player.vimeo.com/video/503214334",
          title: "Providing Opportunity to All",
        },
      ],
      seV1Videos: [
        {
          url: "https://player.vimeo.com/video/500893897",
          title: "Learning Soft Skills",
        },
        {
          url: "https://player.vimeo.com/video/500893793",
          title: "Deboraht on Bootcamp Highlights",
        },
        {
          url: "https://player.vimeo.com/video/500893790",
          title: "Deboraht's Change in Mindset",
        },
        {
          url: "https://player.vimeo.com/video/503213470",
          title: "Learning Workforce Skills",
        },
        {
          url: "https://player.vimeo.com/video/503213564",
          title: "What Sets Us Apart",
        },
      ],
    };
  }

  render() {
    return (
      <div id="videoList">
        <div className="videoGroup">
          <h4>Software Engineering Bootcamp</h4>
          <Carousel className="carousel" responsive={responsive}>
            {this.state.seBootcamp.map((video) => (
              <div className="singleVideo" key={video.title}>
                <iframe
                  title={video.title}
                  src={video.url}
                  width="400"
                  height="auto"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="videoGroup">
          <h4>Software Engineering Bootcamp V2 Cohort Videos</h4>
          <Carousel className="carousel" responsive={responsive}>
            {this.state.seV2Videos.map((video) => (
              <div className="singleVideo" key={video.title}>
                <iframe
                  title={video.title}
                  src={video.url}
                  width="400"
                  height="auto"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="videoGroup">
          <h4>Software Engineering Bootcamp V1 Cohort Videos</h4>
          <Carousel className="carousel" responsive={responsive}>
            {this.state.seV1Videos.map((video) => (
              <div className="singleVideo" key={video.title}>
                <iframe
                  title={video.title}
                  src={video.url}
                  width="400"
                  height="auto"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default VideoContent;
