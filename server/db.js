const mongoose = require("mongoose");

main().catch((err) => console.log(err))

const main = async () => {
    await mongoose.connect('test')
}