import React from 'react'
import Todoitem from './TodoItem'

export default function Todos( { todos }) {
  // This component will display the list of todos
  return (
    <div className="container" >
      <h3  className="text-center my-3" >Todos List</h3> 
      {/* Using map to iterate over todos and render Todoitem for each todo */}
      { todos.map((todo) => {
        return <Todoitem todo = {todo} />;
      })}
    </div>
  )
}
