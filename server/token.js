require('dotenv').config()
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET

exports.generate = (data) => (
    jwt.sign(
        data, 
        secret
    )
    .then(res => res)
)

exports.decode = (token) => (
    jwt.verify(
        token, 
        secret
    )
    .then(res => res)
)