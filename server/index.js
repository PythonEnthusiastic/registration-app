const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json())

app.get("/api/v1", (req, res) => {
    res.send("hello")
})

app.post("/api/v1/register", (req, res) => {
    const credentials = JSON.parse(req.body.data)

    console.log(credentials)
})

app.post("/api/v1/login", (req, res) => {
    const credentials = JSON.parse(req.body.data)

    console.log(credentials)
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})