import { Router } from "express";
import { getDB } from "./db.mjs";
const productsRouter = Router();

const getCollection = () => {
    return getDB().collection("products");
}

productsRouter.get("/", async (req, res) => {
    const collection = getCollection();
    try {
        const products = await collection.find().toArray();
        res.json(products);
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).send("Error fetching products");
    }
});

export default productsRouter;