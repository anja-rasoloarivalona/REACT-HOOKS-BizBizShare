import React from 'react'
import './List.css'

const List = props => {
    const list = props.list.length > 0 ?
       (<ul className="list">
            { props.list.map((name, index) => (
                <li className="list__item" key={index}>{name}</li>
            ))}
       </ul>) 
        : 
        (<div className="list--empty">The list is empty.</div>)
    
    return list
}

export default List
