import { Router } from "express";
import { getDB } from "./db.mjs";
import { ObjectId } from "mongodb";
const cartRouter = Router();

const getCollection = () => {
    return getDB().collection("cartItem");
}

cartRouter.get("/", async (req, res) => {
    const collection = getCollection();
    try {
        const cartItems = await collection.find().toArray();
        res.json(cartItems);
    } catch (err) {
        console.error("Error fetching cart items:", err);
        res.status(500).send("Error fetching cart items");
    }
});

cartRouter.post("/", async (req, res) => {
    const collection = getCollection();
    const cartItem = req.body;
    const result = await collection.insertOne(cartItem);
    res.status(201).json(result);
});

cartRouter.delete("/:id", async (req, res) => {
    const collection = getCollection();
    const id = req.params.id;
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
});

export default cartRouter;