import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3">Todo List</h3>
            {props.todolist.length === 0 ? "Empty toods" :
                props.todolist.map((todo)=> {
                       return (<TodoItem todo= {todo} key={todo.id} onDelete={props.onDelete} />)
                })
            }
        </div>
    );
};

export default Todos;