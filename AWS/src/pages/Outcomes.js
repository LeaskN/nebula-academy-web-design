import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { OutcomesJumbotron } from '../components/Outcomes/OutcomesJumbotron';
import OutcomesContent from '../components/Outcomes/OutcomesContent';
import { OutcomesFooter } from '../components/Outcomes/OutcomesFooter'
export const Outcomes = () => (
    <React.Fragment>
        <OutcomesJumbotron/>
        <SectionNav/>
        <OutcomesContent/>
        <OutcomesFooter/>
    </React.Fragment>
)