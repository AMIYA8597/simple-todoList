import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]); // Create a new array to prevent mutation
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index)); // Filter based on index
  };

  return (
    <div className="App">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="create a new todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="listing-add" onClick={addTodo}>
        Add Your List
      </button>
      <ul>
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <li>{todo}</li>
            <button className="Delete-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
