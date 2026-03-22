const backendURL = import.meta.env.VITE_BACKEND_URL;

export async function fetchProducts() {
    const response = await fetch(backendURL + "/products");
    return response.json();
}

export async function addToCart(cartItem) {
    const result = await fetch(`${backendURL}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItem)
    });
    return result.json();
}

export async function fetchCartItems() {
    const response = await fetch(`${backendURL}/cart`);
    return response.json();
}

export async function removeFromCart(cartItemId) {
    const result = await fetch(`${backendURL}/cart/${cartItemId}`, {
        method: "DELETE"
    });
    return result.json();
}