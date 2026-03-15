import { Router } from "express";
import { getDB } from "./db.mjs";
import { ObjectId } from "mongodb";
const studentsRouter = Router();
function getCollection() {
    return getDB().collection("students");
}

// $gt = "greater than"
// $lt = "less than"
// $gte = "greater than or equal to"
// $lte = "less than or equal to"
// $in = "in array"
// $nin = "not in array"
// $regex = "regular expression"

function simpleAggregation() {
    const collection = getCollection();
    return collection.aggregate([
        {
            $group: {
                _id: "$course",
                totalStudents: { $sum: 1 },
            },
        }
    ]).toArray();
}

function groupByCourse() {
    const collection = getCollection();
    return collection.aggregate([
        {
            $sort: { "course": 1, "marks": -1 }
        },
        {
            $group: {
                _id: "$course",
                totalStudents: { $sum: 1 },
                topScorer: { $first: "$name" },
                topScore: { $first: "$marks" },
            },
        }, {
            $set: {
                course: "$_id",
                topPerformer: {
                    name: "$topScorer",
                    marks: "$topScore"
                }
            },
        }, {
            $unset: ["_id", "topScorer", "topScore"]
        }
    ]).toArray();
}

function sortByMarks(ascending = true) {
    const collection = getCollection();
    // 1 indicates ascending order, 
    // -1 indicates descending order
    return collection.find({}).sort({ marks: ascending ? 1 : -1 }).toArray();
}

function getTopScorer() {
    const collection = getCollection();
    return collection.find({}).sort({ marks: -1 }).limit(1).toArray();
}

function filterByAge() {
    const collection = getCollection();
    return collection.find({ age: { $gt: 20, $lt: 25 } }).toArray();
}
function findHighScorers() {
    const collection = getCollection();
    // return all documents where marks in any course is greater than 80
    return collection.find({ marks: { $gt: 80 } }).toArray();
}
function filterByName() {
    const collection = getCollection();
    // return all documents where name starts with "h" or "H"
    return collection.find({ name: { $regex: /h/i } }).toArray();
    // return collection.find({ name: 'manoj' }).toArray();
}
studentsRouter.get("/", async (req, res) => {
    const collection = getCollection();
    // const students = await collection.find({}).toArray();
    // const students = await filterByAge();
    // const students = await filterByName();
    // const students = await findHighScorers();
    // const students = await sortByMarks();
    // const students = await sortByMarks(false);
    // const students = await getTopScorer();
    const students = await groupByCourse();

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