import React, { useState, useEffect } from "react";
import courseStore from '../stores/courseStore';
import CoursesList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses } from '../actions/courseActions';

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CoursesList courses={courses} />
        </>
    );
}

export default CoursesPage;
