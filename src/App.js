import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { useState } from 'react';
import todoItem from "./MyComponents/TodoItem";
import AddTodo from "./MyComponents/AddTodo";
import todos from "./MyComponents/Todos";



function App() {

    const onDelete = (todo) =>{
        console.log("i am deleted", {todo})
        setTodosList(todosList.filter((e)=>{
            return e!==todo
        }))
    }

    // const addTodo = (title,desc) => {
    //   let id = todos[todos.length-1].id + 1;
    //   const myTodo = {
    //
    //       title:title,
    //       desc:desc
    //   }
    //   setTodosList([...todos, myTodo]);
    // }
    const addTodo = (title, desc) => {
        let id = todosList.length > 0 ? todosList[todosList.length - 1].id + 1 : 1;
        const myTodo = {
            id: id,  // Include id in the new todo
            title: title,
            desc: desc
        };
        setTodosList([...todosList, myTodo]);
    };

    const [todosList, setTodosList] = useState([
        {
            id: 1,
            title: "go to schools 1",
            desc: "you must go to schools"
        },
        {
            id: 2,
            title: "go to office 2",
            desc: "you must go to office"
        },
        {
            id: 3,
            title: "go to home 3",
            desc: "you must go to home"
        }
    ])


  return (
      <>
      <Header   searchBar={true}/>
          <AddTodo addTodo={addTodo}/>
      <Todos todolist ={todosList} onDelete={onDelete}/>
      <Footer/>
      </>
  );
}

export default App;
