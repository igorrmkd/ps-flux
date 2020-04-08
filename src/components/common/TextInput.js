import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
    // handle dynamic classes using a wrapperClass  
    let wrapperClass = "form-group";
    if (props.error.lenght > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    onChange={props.onChange}
                    name={props.name}
                    className="form-control"
                    value={props.value}
                />
            </div>
            {/* display validation errors too, if there is an error.. render the div */}
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

TextInput.defaultProps = {
    error: ""
}


export default TextInput;