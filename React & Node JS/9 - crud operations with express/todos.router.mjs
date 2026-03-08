import { Router } from "express";
import { todos } from "./db.mjs";

const router = Router();
router.get("/", (req, res) => {
    res.json(todos);
}).post("/", (req, res) => {
    const { title } = req.body;
    const createdTodo = createNewTodo(title)
    res.status(201).send(createdTodo);
}).patch("/:id", (req, res) => {
    const updatedTodoId = updateTodo(req.params.id, req.body);
    res.send(updatedTodoId);
})
function updateTodo(todoId, updatedTodo) {
    let existingTodoIndex = todos.findIndex(todo => todo.id === todoId);
    todos[existingTodoIndex] = { ...todos[existingTodoIndex], ...updatedTodo };
    return todos[existingTodoIndex].id;
}

function createNewTodo(title) {
    const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createDate:
            new Date().toISOString()
    }
    todos.push(newTodo);
    return newTodo;
}

export default router;

