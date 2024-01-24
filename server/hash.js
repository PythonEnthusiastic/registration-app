const bcrypt = require("bcryptjs");

exports.encrypt = (password) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            return hash
        });
    });
}

exports.decrypt()