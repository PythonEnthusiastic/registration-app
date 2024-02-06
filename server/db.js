const mongoose = require("mongoose");
const uri = process.env.URI;

main().catch((err) => console.log(err))

const main = async () => {
    await mongoose.connect(uri);

    const studentSchema = new mongoose.Schema({
        username: String,
        email: String,
        hash: String,
        isAdmin: Boolean,
        firstName: String,
        lastName: String,
        telephone: String,
        Address: String,
        createDate: { type: Date, default: Date.now }
    });
}