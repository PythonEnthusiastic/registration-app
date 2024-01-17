const jwt = require("jsonwebtoken");

exports.generate = (data) => {
    try {
        let token = jwt.sign(data, 'tobeadded');
    } catch (err) {
        console.log(err)
    }
}