import React from 'react'

export default function TodoItem({ todo }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p> 
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}
