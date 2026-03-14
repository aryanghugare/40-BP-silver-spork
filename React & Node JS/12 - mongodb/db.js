const express = require("express");

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// npm install dotenv in case of older node versions
const uri = process.env.CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;
const app = express();
app.use(express.json());

async function connect() {

    await client.connect();
    return client.db();

}

app.post("/posts", async (req, res) => {
    const { author, ...rest } = req.body;
    db = await connect();
    const existingPost = await db.collection("posts").find({ author });
    if (existingPost) {
        result = await db.collection("posts").updateOne({
            author
        }, {
            $push: { posts: rest.posts[0] }
        })
    } else {
        result = await db.collection("posts").insertOne({ author, ...rest });
    }
    client.close();
    res.json(result)
})



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        db = await client.db();
        await db.command({ ping: 1 });

        // const result = await db.collection("test").insertOne({
        //     name: "test1",
        //     age: 20
        // })

        // await db.collection("test").insertMany([{
        //     name: "test3",
        //     age: 21
        // }, {
        //     name: "test2",
        //     age: 22
        // }])
        // console.log(result);

        // console.log(await db.collection("test").find({ name: "test2" }).toArray());

        // console.log(await client.db("sample_mflix").collection("students").insertOne({
        //     name: "gaurav",
        //     age: 29, role: "admin", course: "MERN"
        // }))

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

app.listen(3000, () => {
    console.log("server started successfully");
    run().catch(console.dir);
})
