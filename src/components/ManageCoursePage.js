import React from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';

// functional component with arrow function
const ManageCoursePage = props => {
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm />
        </>

    )
}

export default ManageCoursePage;