const http = require("node:http");// built in http module which is available when nodejs is installed.
const host = "localhost"; //you can also write - 127.0.0.1
const port = 3000;
const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === "/" && method === "GET") {
        // res.write("Hello, welcome to nodejs");
        // res.write("this is another line")
        res.end("Hello, welcome to nodejs"); //indicates end of response 
        // - now the client(browser)
        // will get the response
    }
})
server.listen(port, host, () => {
    // callback fn is called server has started
    console.log(`Server is running on ${host}:${port}`)
})