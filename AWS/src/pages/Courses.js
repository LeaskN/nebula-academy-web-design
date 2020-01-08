import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import  { CourseJumbotron } from '../components/Courses/CourseJumbotron';
import  { CourseContent } from '../components/Courses/CourseContent';
import  { CourseFooter } from '../components/Courses/CourseFooter';



export const Courses = () => (
    <React.Fragment>
        <CourseJumbotron/>
        <SectionNav/>
        <CourseContent/>
        <CourseFooter/>
    </React.Fragment>
)