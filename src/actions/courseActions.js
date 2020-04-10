import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        // Hey dispatcher, go tell all the stores that a course was just created.
        dispatcher.dispatch({
            // if the course has an id, then its an exiting course, so use UPDATE_COURSE, else.. use CREATE_COURSE
            actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}
export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses: courses
        });
    });
}