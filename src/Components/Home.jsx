import React from 'react'
import Task from './Task';
import { useState } from 'react';

export default function Home() {
    let [task, newTask] = useState([]);
    let [title, newTitle] = useState("");
    let [discription, newDiscription] = useState("");
    const dataHandler = (e)=>{
        e.preventDefault();
        newTask([...task, {title,discription}])
    };
    let deletetask = (index)=>{
        let afterdelete = task.filter((val,i)=>{
            return i!==index;
        })
        newTask(afterdelete);
    }
    
    return (
        <>
            <div className="todolist">
                <form action="" onSubmit={dataHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' placeholder='Title'  onChange={(e)=>{
                        newTitle(e.target.value);
                    }}/>
                    <label htmlFor="disc">Discription</label>
                    <textarea name="disc" id="disc" cols="30" rows="10" placeholder='Discription'  onChange={(e)=>{
                        newDiscription(e.target.value);
                    }}></textarea>
                    <button>ADD</button>
                </form>
            </div>
            {task.map((Element,index)=> (
                <Task title={Element.title} disc={Element.discription} deletetask={deletetask} index={index}/>
    ))}
            
        </>
    )
}
