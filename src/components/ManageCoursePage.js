import React, { useState, useEffect } from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
// import { Redirect } from 'react-router-dom';  //not needed for props.history.push
import { toast } from 'react-toastify';

// functional component with arrow function
const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(() => {
        const slug = props.match.params.slug; // from the path '/courses/:slug'
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
        }
    }, [props.match.params.slug])

    function handleChange({ target }) {
        // debugger;
        const updatedCourse = { ...course, [target.name]: target.value };
        setCourse(updatedCourse);
    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) _errors.title = "Title is requiered";
        if (!course.authorId) _errors.authorId = "Author Id is requiered";
        if (!course.category) _errors.category = "Category is requiered";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent refreshing the input after submit
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success('Course Saved.');
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>

    )
}

export default ManageCoursePage;