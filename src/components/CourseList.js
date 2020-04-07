import React from 'react';
import PropTypes from 'prop-types'; // import the prop types

function CourseList(props) {
    return (
        < table className="table" >
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td>{course.title}</td>
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