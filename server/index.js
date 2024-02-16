const express = require("express");
const cookieParser = require("cookie-parser");
const tokenizer = require("./token.js")
const hash = require("./hash.js")
const db = require("./db.js");

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cookieParser())

app.post("/api/v1/register", async (req, res) => {
    const credentials = JSON.parse(req.body.data);
    
    hash.encrypt(
        credentials.password
    )
    .then(res => {
        credentials.password = res
        db.createUser(credentials)
    })
    .catch(err => {
        res.sendStatus(400)
    })

    res.sendStatus(200)
})

app.post("/api/v1/login", (req, res) => {
    console.log("hi")
    try {
        const credentials = JSON.parse(req.body.data);
        const token = getToken(credentials);
        // const hashed = hash.encrypt(credentials.password);

        res.cookie('userID', JSON.stringify(token), { httpOnly: true })
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

function getToken(data) {
    const tokened = tokenizer.generate(data);

    return tokened
}

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})