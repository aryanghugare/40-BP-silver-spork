export async function getMotivationalQuote() {
    const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
    return response.json();
}