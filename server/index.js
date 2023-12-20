const express = require("express");
const app = express();
const PORT = 4000;

app.get("/api/v1", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})