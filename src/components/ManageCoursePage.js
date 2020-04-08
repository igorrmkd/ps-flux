import React, { useState } from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';

// functional component with arrow function
const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange(event) {
        // debugger;
        const updatedCourse = { ...course, [event.target.name]: event.target.value };
        setCourse(updatedCourse);
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} />
        </>

    )
}

export default ManageCoursePage;