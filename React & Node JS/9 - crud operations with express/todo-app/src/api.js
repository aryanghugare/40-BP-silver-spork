
const baseURL = "http://localhost:3000/todos"
export async function fetchTodos() {
    const response = await fetch(baseURL)
    return response.json()
}
export async function addTodo(title) {
    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    })
    return response.json();
}
export async function updateCompletionStatus(todoId, completed) {
    const response = await fetch(`${baseURL}/${todoId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed })
    })

    return response.text();
}