import React from 'react'
import PropTypes from 'prop-types';

function Error({mensaje}) {
    return (
        <div>
            <p className="alert alert-danger error">{mensaje}</p>
        </div>
    )
}

Error.prototype = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
