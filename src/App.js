import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {

  // Initialize todos from localStorage or set to an empty array
  let initTodos;
  if(localStorage.getItem('todos') === null) {
    initTodos = [];
  } else{
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  // Function to handle deletion of a todo item
  const onDelete = (todo) => {
    // /* Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1); */

    // Returns a new array with the todo item removed
    // and updates the state with the new array
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    alert("Task " + todo.sno + " has been deleted");
  }

  // Function to add a new todo item
  const addTodo = (title, desc) => {
    let sno = 0;
    todos.length === 0 ? sno = 0 : sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    alert("Task " + sno + " has been added");
  };

  // Initial state for todos
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Render the main application
  return (
    <>
      <Header title='My Todo List' searchBar={false} />

      <div className="container">
      <div className="row">
        <div className="col">
          <Todos todos={todos} onDelete={onDelete} />
        </div>

        <div className="col">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
}

export default App;
