import { useState, useContext } from "react";
import ContextItem from "./Context/ContextItem";
import { v4 } from "uuid";
import "./TodoForm.css";
import Todo from "./Todo";

//This component is the form which we want to create
const TodoForm = () => {

    const [todoString, setTodoString] = useState(''); //The initial state of this component
    const { addTodos } = useContext(ContextItem); //using the context here, we can access all the states and props from here

    //changeHandler function
    const changeHandler = (e) => {

        setTodoString(e.target.value);
    };

    //clickHandler function
    const clickHandler = (e) => {

        e.preventDefault();
        if (todoString === "") {
            return alert("Please Enter something!");
        }

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);

        setTodoString("");

    };

    return (
        <div className="container">
            <h1 className="heading">Todo List</h1>
            <form >
                <input className="write" type="text" name="todo" id="todo" value={todoString} placeholder="Add Task here..." onChange={changeHandler} />
                <button className="btn" onClick={clickHandler}>Add Task</button>
            </form>
            <Todo />
        </div>
    );

}

export default TodoForm;