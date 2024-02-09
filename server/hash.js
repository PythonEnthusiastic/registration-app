const bcrypt = require("bcryptjs");

exports.encrypt = (password) => {
    bcrypt.hash(password, 12, function(err, hashed) {
        return hashed
    });
}

exports.decrypt = (password, hash) => {
    bcrypt.compare(
        password, 
        hash
    )
    .then((res) => {
        return res
    })
}