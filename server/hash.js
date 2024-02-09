const bcrypt = require("bcryptjs");

exports.encrypt = (password) => {
    bcrypt.hash(
        password, 
        12
    )
    .then(res => {
        return res
    })
    .catch(err => {
        console.error(err)
    })
}

exports.decrypt = (password, hash) => {
    bcrypt.compare(
        password, 
        hash
    )
    .then(res => {
        return res
    })
    .catch(err => {
        console.error(err)
    })
}