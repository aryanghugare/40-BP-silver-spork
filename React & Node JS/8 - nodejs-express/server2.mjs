import { createServer } from "node:http";
const server = createServer((req, res) => {
    const { url, method } = req;
    if (url.includes("/user") && method.toLowerCase() === "get") {
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

        const urlReq = new URL(`http://${req.headers.host}/${url}`);
        const name = urlReq.searchParams.get("name");
        try {
            const userId = parseInt(urlReq.pathname.split("/")?.at(-1));
            let result = users;
            if (userId) {
                result = users.find(user => user.id == userId);
            }
            if (name) {
                result = users.find(user => user.name.includes(name));
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(result));
        } catch (ex) {
            res.statusCode = 500;
            console.log(ex)
            res.end(JSON.stringify({ error: "Error while processing request" }));
        }

    } else if (url === "/user" && method.toLowerCase() === "post") {
        console.log(url, req.body);
        const body = [];
        // Chunk1 → { "na
        //     Chunk2 → me": "
        //     Chunk3 → gaurav" }
        req.on("data", (chunk) => {
            body.push(chunk);
        })

        req.on("end", () => {
            console.log(body.toString());
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json")
            res.end(body.toString())
        })
        console.log("post called")

    } else if (url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html")
        res.end(`
            < !doctype html >
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Nodejs Intro</title>
            </head>
            <body>
                <h1>Welcome!</h1>
                <p>This is coming from server</p>

            </body>
        </html>

            `)
    }
})
server.listen(3001, "127.0.0.1", () => {
    console.log("Server is running on 127.0.0.1:3001")
})


