const express = require("express");
const app = express();
app.use(express.json()) // added json middleware which parses the contents of body
// and make it available on req.body

function logger(req, res, next) {
    console.log("logger called");
    console.log(req.url);
    next();
}
app.use(logger);

const users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
];
app.get("/", (req, res) => {
    res.send("Hello express!")
});

app.route("/user").get((req, res) => {
    // reading query params
    if (req.query.name) {
        res.json(users.find(user => user.name.includes(req.query.name)))
    }
    res.json(users)
}).post((req, res) => {
    const { user } = req.body;
    console.log(user);
    res.status(201);
    res.send("user created")
})

// app.get("/user", (req, res) => {
//     // reading query params
//     if (req.query.name) {
//         res.json(users.find(user => user.name.includes(req.query.name)))
//     }
//     res.json(users)
// })
app.get("/user/:id", (req, res) => {
    // reading route params
    const userId = req.params.id;
    console.log(req.params);
    res.status(200).send(users.find(user => user.id == userId));
})
// app.post("/user", (req, res) => {
//     const { user } = req.body;
//     console.log(user);
//     res.status(201);
//     res.send("user created")
// })
app.listen(3002, () => {
    console.log("Server started on port:3002")
})