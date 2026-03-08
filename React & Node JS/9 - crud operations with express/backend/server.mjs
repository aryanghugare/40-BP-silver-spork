import express from "express";
import todosRouter from "./todos.router.mjs"
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());


const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is up!")
})

app.use("/todos", todosRouter)

app.listen(port, () => {
    console.log(`server started on port:${port}`);
})

// CRUD - Create Read Update Delete