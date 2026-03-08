import { Router } from "express";
import { todos } from "./db.mjs";

const router = Router();
router.get("/", (req, res) => {
    res.json(todos);
}).post("/", (req, res) => {
    try {
        if (!req.body.title) {
            res.status(400).send({ message: "Title is required" })
        } else {
            const { title } = req.body;
            const createdTodo = createNewTodo(title)
            res.status(201).send(createdTodo);
        }
    } catch (ex) {
        res.status(500).send({ message: "Error while saving todo", error: ex })
    }
}).patch("/:id", (req, res) => {

    try {
        const updatedTodoId = updateTodo(req.params.id, req.body);
        if (!updatedTodoId) {
            res.status(404)
                .send({ message: "todo not found" })
        }
        res.send(updatedTodoId);
    } catch (ex) {
        res.status(500).send({ message: ex })
    }
}).delete("/:id", (req, res) => {
    // HW: deleting a todo
    deleteTodo();
})

function deleteTodo(todoId) {

}

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

