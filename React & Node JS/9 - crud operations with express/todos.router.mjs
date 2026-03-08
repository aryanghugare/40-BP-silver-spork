import express from "express";
import { todos } from "./db.mjs";

const router = express.Router();
router.get("/", (req, res) => {
    res.json(todos);
})

export default router;

