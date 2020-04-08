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

    function handleTitleChange(event) {
        // debugger;
        const updatedCourse = { ...course, title: event.target.value };
        setCourse(updatedCourse);
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onTitleChange={handleTitleChange} />
        </>

    )
}

export default ManageCoursePage;