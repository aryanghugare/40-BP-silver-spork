import { useState } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import "./todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  function todoAdded(newTodo) {
    // todos.push(newTodo) // ❌ mutation
    setTodos((prevTodos) => [...prevTodos, { completed: false, title: newTodo, id: crypto.randomUUID() }]); //✅ immutable: create a new array and spread existing values
  }
  function todoUpdated(todoId, completed) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const index = updatedTodos.findIndex((todo) => todo.id === todoId);
      updatedTodos[index].completed = completed;
      return updatedTodos;
    });
  }
  return (
    <>
      <AddTodo onTodoAdd={todoAdded} />
      <h1> Todos</h1>
      {todos.filter((todo) => !todo.completed).length ? (
        <TodoList todos={todos.filter((todo) => !todo.completed)} onTodoChange={todoUpdated} />
      ) : (
        "All Tasks done"
      )}
      <h1>Completed Todos</h1>
      <TodoList todos={todos.filter((todo) => todo.completed)} onTodoChange={todoUpdated} />
    </>
  );
}
