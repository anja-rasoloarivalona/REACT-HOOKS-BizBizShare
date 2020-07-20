import React from 'react'
import './Input.css'

const Input = props => {
    return (
        <div className="input">
            <input
                className="input__field"
                type={props.type}
                id={props.id}
                required={props.required}
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onChange(props.id, event.target.value)}
            />
            {props.label && (
                <label htmlFor={props.id} className="input__label">{props.label}</label>
            )}
        </div>
    )
}

export default  Input