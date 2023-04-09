import React from 'react'

export default function Task({title, disc, deletetask,index}) {
    return (
        <div className="todo-content">
            <div className="content">
                <h3>{title}</h3>
                <p>{disc}</p>
            </div>
            <div className="delete" onClick={()=>deletetask(index)}>X</div>
        </div>
    )
}
