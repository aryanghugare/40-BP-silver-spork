const backendURL = import.meta.env.VITE_BACKEND_URL;

export async function fetchProducts() {
    const response = await fetch(backendURL + "/products");
    return response.json();
}