const express = require("express");
const cookieParser = require("cookie-parser");
const tokenizer = require("./token.js")
const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cookieParser())

app.get("/api/v1", (req, res) => {
    res.send("hello")
})

app.post("/api/v1/register", (req, res) => {
    try {
        const credentials = JSON.parse(req.body.data);
        const tokened = tokenizer.generate(credentials);

        res.cookie('userInfo', JSON.stringify(tokened), { httpOnly: true })
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

app.post("/api/v1/login", (req, res) => {
    try {
        const credentials = JSON.parse(req.body.data);
        const tokened = tokenizer.generate(credentials);

        res.cookie('userInfo', JSON.stringify(tokened), { httpOnly: true })
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})