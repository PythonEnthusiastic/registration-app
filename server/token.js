const jwt = require("jsonwebtoken");

exports.generate = (data) => {
    jwt.sign(
        data, 
        'tobeadded'
    )
    .then(res => res)
}

exports.decode = (token) => {
    jwt.verify(
        token, 
        'tobeadded'
    )
    .then(res => res)
}