const jwt = require("jsonwebtoken");

exports.generate = (data) => {
    try {
        let token = jwt.sign(data, 'tobeadded');

        return token
    } catch (err) {
        console.log(err)
    }
}

exports.decode = (token) => {
    try {
        let decoded = jwt.verify(token, 'tobeadded');

        return decoded
    } catch (err) {
        console.log(err)
    }
}