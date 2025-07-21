import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';

function App() {
  const onDelete = (todo) =>{
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

    const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the bank",
      desc: "You need to go to the bank to deposit money"
    },
    {
      sno: 4,
      title: "Go to the gym",
      desc: "You need to go to the gym to exercise"
    },
    {
      sno: 5,
      title: "Go to the library",
      desc: "You need to go to the library to read books"
    }
  ]);

  return (
    <>
      <Header title='My Todo List' searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
