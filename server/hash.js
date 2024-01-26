const bcrypt = require("bcryptjs");

exports.encrypt = (password) => {
    bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(password, salt, function(err, password) {
            return password
        });
    });
}

exports.decrypt()