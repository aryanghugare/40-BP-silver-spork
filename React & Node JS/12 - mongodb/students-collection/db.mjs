import { MongoClient } from "mongodb";
let client;
export async function connect(connectionString) {
    console.log("Connecting to mongo server...");
    try {
        client = new MongoClient(connectionString);
        await client.connect();
        const db = await client.db();
        await db.command({ ping: 1 });
        console.log("%cConnected successfully to mongo server", "color: green;");
        return db;
    } catch (err) {
        console.log("%cError connecting to mongo server", "color: red;");
        console.log(err);
    }
}

export async function disconnect() {
    if (client) {
        await client.close();
        console.log("%cDisconnected successfully from mongo server", "color: blue;");
    }
}