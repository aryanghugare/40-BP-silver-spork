import express from "express";
import { connect, disconnect } from "./db.mjs";
const app = express();

/** @type {import("mongodb").Db} */
let db;
const server = app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    db = await connect(process.env.CONNECTION_STRING);
})

process.on("SIGINT", async () => {
    console.log("Received SIGINT. Shutting down gracefully...");
    await disconnect();
    await server.close();
    process.exit(0);
})

process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception:", err);
    await disconnect();
    process.exit(1);
})

process.on("unhandledRejection", async (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    await disconnect();
    process.exit(1);
})
