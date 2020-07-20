import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'

const Button = props => props.link ? 
    (
        <NavLink
            className="button"
            activeClassName="active"
            to={props.link}
            { ...props }
        >
            {props.children}
        </NavLink>
    ) :
    (
        <button
            className="button"
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
        >
             {props.children}
        </button>
    )
export default Button