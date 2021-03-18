import React from 'react';
// import { AllWorkshopsJumbotron } from '../components/AllWorkshops/AllWorkshopsJumbotron';
import AllWorkshopsContent from '../components/AllWorkshops/AllWorkshopsContent';
import  { AllWorkshopsFooter } from '../components/AllWorkshops/AllWorkshopsFooter';


export const AllWorkshops = () => (
  <React.Fragment>
      {/* <AllWorkshopsJumbotron/> */}
      <AllWorkshopsContent/>
      <AllWorkshopsFooter/>
  </React.Fragment>
)