import React, { useState, useEffect } from "react";
import courseStore from '../stores/courseStore';
import CoursesList from './CourseList';
import { Link } from 'react-router-dom';

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(courseStore.getCourses());
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CoursesList courses={courses} />
        </>
    );
}

export default CoursesPage;
