const bcrypt = require("bcryptjs");

exports.encrypt = (password) => {
    bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash("hasher", salt, function(err, password) {
            return password
        });
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