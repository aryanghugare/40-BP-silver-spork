import { Router } from "express";
import { getDB } from "./db.mjs";
import { ObjectId } from "mongodb";
const studentsRouter = Router();
function getCollection() {
    return getDB().collection("students");
}
studentsRouter.get("/", async (req, res) => {
    const collection = getCollection();
    const students = await collection.find({}).toArray();
    res.json(students);
});

studentsRouter.post("/", async (req, res) => {
    const { name, age, course, marks } = req.body;
    const collection = getCollection();
    const result = await collection.insertOne({ name, age, course, marks });

    res.status(201).json(result);
});

studentsRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const collection = getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
});

export default studentsRouter;