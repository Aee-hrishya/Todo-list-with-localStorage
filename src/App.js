import { useEffect, useState } from 'react';
import ContextItem from './Components/Context/ContextItem';
import './App.css';
import TodoForm from './Components/TodoForm';


function App() {

  const [todos, setTodos] = useState([]); //Initial state of the application

  //We use the useEffect hook to get the items from the localstorage if any and we want run it once at the start of the application
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");

    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  }, [])

  //The function to add task to the list
  const addTodos = async (todo) => {

    setTodos([...todos, todo]);

  };

  //We use useEffect once again to set items to localstorage every time there is a change in todos
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  //function to remove the task from the list
  const removeTodo = (id) => {

    setTodos(todos.filter(todo => todo.id !== id));

  }


  return (

    <ContextItem.Provider value={{todos, addTodos, removeTodo}}> {/*Our provider is over here */}
      <TodoForm />
    </ContextItem.Provider>
  );
}

export default App;
