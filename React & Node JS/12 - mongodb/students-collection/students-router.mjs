import { Router } from "express";

const studentsRouter = Router();

studentsRouter.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

export default studentsRouter;