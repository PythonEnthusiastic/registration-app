const bcrypt = require("bcryptjs");

exports.encrypt = async (password) => (
    await bcrypt.hash(
        password, 
        12
    )
)

exports.decrypt = async (password, hash) => (
    await bcrypt.compare(
        password, 
        hash
    )
)