import React from 'react'

export default function TodoItem({ todo, OnDelete }) {
  // This component will display a single todo item
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p> 
      
      <button className="btn btn-sm btn-danger" onClick={() => OnDelete(todo)}>Delete</button>
    </div>
  )
}
