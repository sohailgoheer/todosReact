import React, {useState} from 'react';
import {func} from "prop-types";


const AddTodo = (props) => {
    const [title    , setTitle] = useState("")
    const [desc    , setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if(!title || !desc){
            alert("title and descriptin is empty")
        }else {
            props.addTodo(title, desc)
        }

    }

    return (
        <div className="container">
            <h4 className="py-3">Add new Todo</h4>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"   />

                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}  className="form-control"  />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;