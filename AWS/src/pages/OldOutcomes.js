import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { OutcomesJumbotron } from '../components/OldOutcomes/OldOutcomesJumbotron';
import OutcomesContent from '../components/OldOutcomes/OldOutcomesContent';
import { OutcomesFooter } from '../components/OldOutcomes/OldOutcomesFooter';
export const OldOutcomes = () => (
    <React.Fragment>
        <OutcomesJumbotron/>
        <SectionNav/>
        <OutcomesContent/>
        <OutcomesFooter/>
    </React.Fragment>
)