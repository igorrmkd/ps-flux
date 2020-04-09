import React, { useState } from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
// import { Redirect } from 'react-router-dom';  //not needed for props.history.push
import { toast } from 'react-toastify';

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
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success('Course Saved.');
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>

    )
}

export default ManageCoursePage;