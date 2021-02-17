import React from "react";
import ProgramsContent from "../components/Programs/ProgramsContent";
import { ProgramsJumbotron } from "../components/Programs/ProgramsJumbotron";
// import { ProgramsFooter } from "../components/Programs/ProgramsFooter";

export const Programs = () => (
  <React.Fragment>
    <ProgramsJumbotron />
    <ProgramsContent />
    {/* <ProgramsFooter /> */}
  </React.Fragment>
);
