import React from 'react';

// functional component with arrow function
const ManageCoursePage = props => {
    return (
        <>
            <h2>Manage Course</h2>
            {props.match.params.slug}
        </>

    )
}

export default ManageCoursePage;