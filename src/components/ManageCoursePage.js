import React, { useState, useEffect } from 'react';
// import { Prompt } from "react-router-dom";
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
// import { Redirect } from 'react-router-dom';  //not needed for props.history.push
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

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
            //setCourse will check the courseStore, and get the course by the slug
            setCourse(courseStore.getCoursesBySlug(slug));
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
        courseActions.saveCourse(course).then(() => {
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