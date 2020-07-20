import React from 'react'
import './Errors.css'

const Errors = props => {
    return (
        <div className="errors">
            {
                props.errors.map((error, index) => (
                <div className="error" key={index} onClick={() => props.onClick(index)}>{error}</div>
                ))
            }
        </div>
    )
}

export default Errors
