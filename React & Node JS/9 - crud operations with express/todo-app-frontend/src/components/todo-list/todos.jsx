import { useState, useEffect } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import { addTodo, fetchTodos, updateCompletionStatus } from "../../api";
import "./todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetchTodos().then(setTodos).catch(console.error);
  }, [updated]);

  function todoAdded(newTodo) {
    if (newTodo) {
      addTodo(newTodo).then(() => setUpdated(!updated));
    }
  }
  function todoUpdated(todoId, completed) {
    updateCompletionStatus(todoId, completed).then(() => setUpdated(!updated));
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
