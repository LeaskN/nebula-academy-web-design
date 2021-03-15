import React from "react";
import SingleProgramContent from "../components/SingleProgram/SingleProgramContent";
import SingleProgramJumbotron from "../components/SingleProgram/SingleProgramJumbotron";
import { SingleProgramFooter } from "../components/SingleProgram/SingleProgramFooter";

let programs = [
  {
    id: 1,
    title: "AWS",
    about: "About AWS",
    highlights: "AWS Highlight",
    expectations: "AWS Expectations",
    timeline: "AWS Timeline",
    cost: "AWS Cost",
    highlights2: "More Highlights for AWS",
    technologies: "AWS Technologies",
    certifications: "AWS Certifications",
    outcomes: "AWS Student Outcomes",
    verifications: "AWS Industry Verifications",
    cta: "Apply Now",
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    about: "About Software Engineering Bootcamp",
    highlights: "Software Engineering Bootcamp Highlight",
    expectations: "Software Engineering Bootcamp Expectations",
    timeline: "Software Engineering Bootcamp Timeline",
    cost: "Software Engineering Bootcamp Cost",
    highlights2: "More Highlights for Software Engineering Bootcamp",
    technologies: "Software Engineering Bootcamp Technologies",
    certifications: "Software Engineering Bootcamp Certifications",
    outcomes: "Software Engineering Bootcamp Student Outcomes",
    verifications: "Software Engineering Bootcamp Industry Verifications",
    cta: "Apply Now",
  },
  {
    id: 3,
    title: "Software Engineering Bootcamp",
    about: "About Software Engineering Bootcamp",
    highlights: "Software Engineering Bootcamp Highlight",
    expectations: "Software Engineering Bootcamp Expectations",
    timeline: "Software Engineering Bootcamp Timeline",
    cost: "Software Engineering Bootcamp Cost",
    highlights2: "More Highlights for Software Engineering Bootcamp",
    technologies: "Software Engineering Bootcamp Technologies",
    certifications: "Software Engineering Bootcamp Certifications",
    outcomes: "Software Engineering Bootcamp Student Outcomes",
    verifications: "Software Engineering Bootcamp Industry Verifications",
    cta: "Apply Now",
  },
  {
    id: 4,
    title: "Tech Skills Bootcamp",
    about: "About Tech Skills Bootcamp",
    highlights: "Tech Skills Bootcamp Highlight",
    expectations: "Tech Skills Bootcamp Expectations",
    timeline: "Tech Skills Bootcamp Timeline",
    cost: "Tech Skills Bootcamp Cost",
    highlights2: "More Highlights for Tech Skills Bootcamp",
    technologies: "Tech Skills Bootcamp Technologies",
    certifications: "Tech Skills Bootcamp Certifications",
    outcomes: "Tech Skills Bootcamp Student Outcomes",
    verifications: "Tech Skills Bootcamp Industry Verifications",
    cta: "Apply Now",
  },
];

export const SingleProgram = (props) => {
  let id = props.match.params.id - 1;
  return (
    <React.Fragment>
      <SingleProgramJumbotron data={programs[id]} />
      <SingleProgramContent data={programs[id]} />
      <SingleProgramFooter />
    </React.Fragment>
  );
};
