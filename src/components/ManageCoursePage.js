import React, { useState } from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';

// functional component with arrow function
const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange({ target }) {
        // debugger;
        const updatedCourse = { ...course, [target.name]: target.value };
        setCourse(updatedCourse);
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent refreshing the input after submit
        courseApi.saveCourse(course);
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>

    )
}

export default ManageCoursePage;