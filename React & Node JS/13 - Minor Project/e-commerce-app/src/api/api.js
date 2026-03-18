const backendURL = "http://localhost:3000";

export async function fetchProducts() {
    const response = await fetch(backendURL + "/products");
    return response.json();
}