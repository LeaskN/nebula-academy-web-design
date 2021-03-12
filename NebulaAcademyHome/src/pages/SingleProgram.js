import React from "react";
import SingleProgramContent from "../components/SingleProgram/SingleProgramContent";
import SingleProgramJumbotron from "../components/SingleProgram/SingleProgramJumbotron";

let programs = [
  {
    id: 1,
    title: "AWS",
    // image: AWSSlide1,
    about: "about",
    highlight: "highlight",
    expectations: "expectations",
    timeline: "timeline",
    cost: "cost",
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    // image: AWSSlide2,
    description1: "description1",
    description2: "description2",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 3,
    title: "Advanced SE Bootcamp",
    // image: AWSSlide3,
    description1: "description1",
    description2: "description2",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 4,
    title: "Tech Skills Bootcamp",
    // image: AWSSlide4,
    description1: "description14",
    description2: "description4",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 5,
    title: "Tech Sales Bootcamp",
    image: "image5",
    description1: "description15",
    description2: "description5",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 6,
    title: "title6",
    image: "image6",
    description1: "description16",
    description2: "description6",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 7,
    title: "title7",
    image: "image7",
    description1: "description17",
    description2: "description7",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 8,
    title: "title8",
    image: "image8",
    description1: "description18",
    description2: "description8",
    CTA: "Learn More",
    hover: false,
  },
  {
    id: 9,
    title: "title9",
    image: "image9",
    description1: "description19",
    description2: "description9",
    CTA: "Learn More",
    hover: false,
  },
];

export const SingleProgram = (props) => {
  let id = props.match.params.id - 1;
  return (
    <React.Fragment>
      <SingleProgramJumbotron data={programs[id]} />
      <SingleProgramContent data={programs[id]} />
    </React.Fragment>
  );
};
