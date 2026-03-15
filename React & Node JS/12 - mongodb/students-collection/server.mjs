import express from "express";
import { connect } from "./db.mjs";
const app = express();

/** @type {import("mongodb").Db} */
let db;
app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    db = await connect(process.env.CONNECTION_STRING);
})