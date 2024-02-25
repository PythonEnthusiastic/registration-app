const express = require("express");
const cookieParser = require("cookie-parser");
const tokenizer = require("./token.js")
const hash = require("./hash.js")
const db = require("./db.js");

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cookieParser())

async function authentication(req, res, next) {
    const authCookie = req.cookies['userID'];
    const isValidToken = tokenizer.decode(authCookie);

    if (isValidToken) {
        next()
    }

    res.sendStatus(400)
}

app.post("/api/v1/register", async (req, res) => {
    const credentials = JSON.parse(req.body.data);
    const encryptedPass = await hash.encrypt(credentials.password)
    credentials.password = encryptedPass

    db.createUser(credentials)

    const token = getToken({ username: credentials.username });
    
    res.cookie('userID', JSON.stringify(token), { httpOnly: true })
    res.sendStatus(200)
})

app.post("/api/v1/login", async (req, res) => {
    try {
        const credentials = JSON.parse(req.body.data);
        const user = await db.findUser(credentials.email);
        const isPassword = await hash.decrypt(credentials.password, user.password)

        if (!isPassword) {
            throw new Error('Incorrect Password');
        }

        const token = tokenizer.generate({ username: credentials.username });
        
        res.cookie('userID', JSON.stringify(token), { httpOnly: true })
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})