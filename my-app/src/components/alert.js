// components/Alert.js
import React from 'react';

const Alert = ({ message, type }) => {
    if (!message) return null;
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

    return (
        <div className="d-flex justify-content-end " >
            <div className={`alert ${alertClass}  position-fixed m-2 m-sm-1`} role="alert">
                {message}
            </div>

        </div>

    );
};

export default Alert;
