const express = require("express");
const cookieParser = require("cookie-parser");
const tokenizer = require("./token.js")
const hash = require("./hash.js")
const db = require("./db.js");

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cookieParser())

app.post("/api/v1/register", (req, res) => {
    try {
        const credentials = JSON.parse(req.body.data);
        // const hashed = hash.encrypt(credentials.password)

        db.createUser(credentials)

        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

app.post("/api/v1/login", (req, res) => {
    console.log("hi")
    try {
        const credentials = JSON.parse(req.body.data);
        // const tokened = tokenizer.generate(credentials);
        // const hashed = hash.encrypt(credentials.password);

        // res.cookie('userID', JSON.stringify(tokened), { httpOnly: true })
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})