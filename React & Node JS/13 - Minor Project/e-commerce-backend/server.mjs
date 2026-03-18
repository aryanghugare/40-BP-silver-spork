import express from "express";
import { connect, disconnect } from "./db.mjs";
import productsRouter from "./products-router.mjs";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    await connect(process.env.CONNECTION_STRING);
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



