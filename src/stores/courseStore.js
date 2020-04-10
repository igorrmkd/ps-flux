import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";
let _courses = [];
//courseStore extends(gets acces to) all of the EventEmitter capabilities
class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses() {
        return _courses;
    }

    getCoursesBySlug(slug) {
        return _courses.find(course => course.slug === slug);
    }
}

const store = new CourseStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            // check the course by mapping _courses, and if the course.id is same with the action course.id update/use the action.course, else return the course as is. 
            _courses = _courses.map(course => course.id === action.course.id ? action.course : course);
            store.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            _courses = action.courses;
            store.emitChange();
            break;
        default:
        // nothing to do here
    }
});

export default store;