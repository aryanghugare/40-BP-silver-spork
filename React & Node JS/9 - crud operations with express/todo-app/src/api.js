
const baseURL = "http://localhost:3000/todos"

export async function fetchTodos() {
    const response = await fetch(baseURL)
    return response.json()

}

export async function addTodo(title) {
    const response = await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({ title })
    })

    return response.json();

}