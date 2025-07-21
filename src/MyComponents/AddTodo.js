import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else{
            addTodo(title, desc);
            setDesc("");
            setTitle("");
        }
    };
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>

                {/* Title field */}
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>

                {/* Description field */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Todo Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                    />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-sm btn-success">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
