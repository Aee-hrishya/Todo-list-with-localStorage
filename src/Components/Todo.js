import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import ContextItem from "./Context/ContextItem";
import "./Todo.css";

const Todo = () => {

    const {todos, removeTodo} = useContext(ContextItem);

    //Below we add the different tasks to our list 
    return (
        <div className="main">
            {todos.map((todo) => (
                <div className="list">
                    <li key={todo.id}>
                        {todo.todoString}
                    <span onClick={() => removeTodo(todo.id)}><FaCheck /></span> {/*removeTodo function to delete the element when we click the span */}
                    </li>
                </div>
            ))}
        </div>
    );

};

export default Todo;