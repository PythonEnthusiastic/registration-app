const jwt = require("jsonwebtoken");

exports.generate = (data) => {
    try {
        let token = jwt.sign(data, 'tobeadded');
    } catch (err) {
        console.log(err)
    }
}

exports.decode = (token) => {
    try {
        let decoded = jwt.verify(token, 'tobeadded');
    } catch (err) {
        console.log(err)
    }
}