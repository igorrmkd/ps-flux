import React from 'react';
import PropTypes from 'prop-types'; // import the prop types
import { Link } from 'react-router-dom';

function CourseList(props) {
    return (
        < table className="table" >
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td>
                                <button className="btn btn-outline-danger"
                                    onClick={() => { props.deleteCourse(course.id) }}>Delete</button>
                            </td>
                            <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table >
    )
}

// ****************  
// Document and validate props 
// Defining the PropTypes is only good for dev process, they dont run in production builds
CourseList.propTypes = {
    deleteCourse: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequiered,
            title: PropTypes.string.isRequiered,
            authorId: PropTypes.number.isRequiered,
            category: PropTypes.string.isRequiered
        })
    ).isRequired
};
// ****************  

export default CourseList;