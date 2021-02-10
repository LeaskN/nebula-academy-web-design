import React from 'react';
import RegistrationJumbotron from '../components/Registration/RegistrationJumbotron';
import RegistrationContent from '../components/Registration/RegistrationContent';
import  { RegistrationFooter } from '../components/Registration/RegistrationFooter';

import image1 from '../assets/DiscoveryDay_1_13.jpg'
import image2 from '../assets/DiscoveryDay2.jpg'
import image3 from '../assets/Codathon2.jpg'
import image4 from '../assets/12b_Slidelabel.jpg'

let programs = [
    { 
        id: 1, 
        image: image1,
        date: 'March 4th',
        time: '4:00PM',
        workshopTitle: 'Jobs In Tech',
        registrationUrl: 'https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=20344935',
        aboutTheEvent: `
            This workshop focuses on some pathways into tech careers. 
            It primarily looks at jobs in Tech Sales, Tech Support, and Software Engineering. 
            In this workshop we will also discuss the need for general tech-skills within the workforce. 
            This is a high-level workshop and if you'd like more information on any one career path we recommend taking this workshop, followed by that specific workshop.
        `,
        learningObjectives: [
            'Understanding of current opportunities in technology',
            'Understand potential salaries',
            'Understand skills necessary to compete for these jobs',
            'Understand the day-to-day degree of difficulty for each role',
            'Gain an understanding of the potential within a tech career with a statistical focus',
            'Understand a broad picture of who is hiring',
            'Learn about currently available programs'
        ],
        workshopOverview: `In this one-hour workshop participants will gain an understanding of the level of difficulty a tech role can be. The workshop highlights the growth someone can expect from each tech role, the daily interactions that a specific role may have, what their product/service lifecycle may look like, & how to penetrate the career path. Although this is provided by Nebula Academy and there will be conversations regarding the programs Nebula provides, we will also discuss a self-taught path that someone could create for themselves to begin their tech career.`,
        salaries: [
            {title: 'Entry Level Software Engineer', salary: '$74,532', source: 'https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm' },
            {title: 'Software Engineer', salary: '$92,046', source: 'https://www.glassdoor.com/Salaries/software-engineer-salary-SRCH_KO0,17.htm' },
            {title: 'Entry Level Tech Sales', salary: '$41,490', source: 'https://www.glassdoor.com/Salaries/entry-level-tech-sales-salary-SRCH_KO0,11_KE12,22.htm?clickSource=searchBtn' },
            {title: 'Tech Sales', salary: '$80,000', source: 'https://www.rainmakers.co/blog/the-20-tech-companies-paying-the-highest-salaries-for-salespeople/#:~:text=According%20to%20Glassdoor%2C%20tech%20companies,nature%20of%20commissions%20and%20bonuses' },
            {title: 'Entry Level Tech Help Desk', salary: '$34,176', source: 'https://www.ziprecruiter.com/Salaries/Entry-Level-Help-Desk-Technician-Salary#:~:text=As%20of%20Jan%2029%2C%202021,%2Fweek%20or%20%242%2C848%2Fmonth' },
            {title: 'Tech Help Desk', salary: '$41,842', source: 'https://www.glassdoor.com/Salaries/tech-help-desk-salary-SRCH_KO0,14.htm?clickSource=searchBtn' },
        ],
    },
    { 
        id: 2, 
        date: 'March 11th',
        time: '4:00PM',
        workshopTitle: 'Tech Sales Careers',
        image: image2,
        aboutTheEvent: `
            This workshop focuses on what a Tech Sales career looks like and how to begin one. 
            We will primarily focus on the day-to-day of this role, the potenital growth, team structure, required techincal skills, and required soft skills for the role. 
            In this workshop we will also discuss a generic sales cycle and explore participants interest in a tech sales position. 
            Ultimately this is an informational for anyone, with or without tech or sales experience.
        `,
        learningObjectives: [
            'Understanding what the tech sales course entails',
            'Learning what a tech sales employee does',
            'Understanding potential salaries',
            'Understand skills necessary to compete for these jobs',
            'Understanding the potential for growth',
            'Understanding the cost of the course',
        ],
        workshopOverview: `In this one-hour workshop participants will gain an understanding of the level of difficulty a tech role can be. The workshop highlights the growth someone can expect from each tech role, the daily interactions that a specific role may have, what their product/service lifecycle may look like, & how to penetrate the career path. Although this is provided by Nebula Academy and there will be conversations regarding the programs Nebula provides, we will also discuss a self-taught path that someone could create for themselves to begin their tech career.`,
        salaries: [
            {title: 'Entry Level Tech Sales', salary: '$41,490', source: 'https://www.glassdoor.com/Salaries/entry-level-tech-sales-salary-SRCH_KO0,11_KE12,22.htm?clickSource=searchBtn' },
            {title: 'Tech Sales', salary: '$80,000', source: 'https://www.rainmakers.co/blog/the-20-tech-companies-paying-the-highest-salaries-for-salespeople/#:~:text=According%20to%20Glassdoor%2C%20tech%20companies,nature%20of%20commissions%20and%20bonuses' },
        ],
    },
    { 
        id: 3, 
        date: 'March 18th',
        time: '4:00PM',
        workshopTitle: 'Tech Support Careers',
        image: image3,
        aboutTheEvent: `
            This workshop focuses on Tech Support Careers.
            In this session participants will gain an understanding of what a tech support role is and what career potential there is leading from this position.
            This workshop will elaborate on the soft skills and 
            This is a high-level workshop and if you'd like more information on any one career path we recommend taking this workshop, followed by that specific workshop.
        `,
        learningObjectives: [
            'Understand the duties of a tech support',
            'Learn about the skills need to be a tech support',
            'Understand potential salaries',
            'Learn about the potential for growth',
            'Understand what a tech supports day looks like',
            'Understand the cost of the program',
        ],
        workshopOverview: `In this one-hour workshop participants will gain an understanding of the level of difficulty a tech role can be. The workshop highlights the growth someone can expect from each tech role, the daily interactions that a specific role may have, what their product/service lifecycle may look like, & how to penetrate the career path. Although this is provided by Nebula Academy and there will be conversations regarding the programs Nebula provides, we will also discuss a self-taught path that someone could create for themselves to begin their tech career.`,
        salaries: [
            {title: 'Entry Level Tech Help Desk', salary: '$34,176', source: 'https://www.ziprecruiter.com/Salaries/Entry-Level-Help-Desk-Technician-Salary#:~:text=As%20of%20Jan%2029%2C%202021,%2Fweek%20or%20%242%2C848%2Fmonth' },
            {title: 'Tech Help Desk', salary: '$41,842', source: 'https://www.glassdoor.com/Salaries/tech-help-desk-salary-SRCH_KO0,14.htm?clickSource=searchBtn' },
        ],
    },
    { 
        id: 4, 
        date: 'March 25th',
        time: '4:00PM',
        workshopTitle: 'How to Become A Software Engineer',
        image: image4,
        aboutTheEvent: `
            This workshop focuses on some pathways into tech careers. 
            It primarily looks at jobs in Tech Sales, Tech Support, and Software Engineering. 
            In this workshop we will also discuss the need for general tech-skills within the workforce. 
            This is a high-level workshop and if you'd like more information on any one career path we recommend taking this workshop, followed by that specific workshop.
        `,
        learningObjectives: [
            'Learn what software engineers do',
            'Understand how many different technologies exist',
            'Understand how to become a software engineer',
            'Understand the dedication it takes to become a programmer',
            'Understand the potential salaries',
            'Understand the potential growth',
            'Understand the potential for entrepreneurship',
            'Understand how difficult software engineering is',
        ],
        workshopOverview: `In this one-hour workshop participants will gain an understanding of the level of difficulty a tech role can be. The workshop highlights the growth someone can expect from each tech role, the daily interactions that a specific role may have, what their product/service lifecycle may look like, & how to penetrate the career path. Although this is provided by Nebula Academy and there will be conversations regarding the programs Nebula provides, we will also discuss a self-taught path that someone could create for themselves to begin their tech career.`,
        salaries: [
            {title: 'Entry Level Software Engineer', salary: '$74,532', source: 'https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm' },
            {title: 'Software Engineer', salary: '$92,046', source: 'https://www.glassdoor.com/Salaries/software-engineer-salary-SRCH_KO0,17.htm' },
        ],
    }
]

export const Registration = (props) => {
    let id = props.match.params.id - 1;
    return(
        <React.Fragment>
            <RegistrationJumbotron data={programs[id]}/>
            <RegistrationContent data={programs[id]}/>
            <RegistrationFooter data={programs[id]}/>
       </React.Fragment>
    )
}