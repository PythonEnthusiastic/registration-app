require('dotenv').config()
const mongoose = require("mongoose");
const dbUrl = process.env.URI;

mongoose.connect(dbUrl);

const udb = mongoose.connection;
udb.on('error', console.error.bind(console, 'connection error: '));

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

const student = mongoose.model("student", studentSchema, 'test.students')

exports.createUser = (data) => {
    const newUser = new student();

    newUser.email = data.email;
    newUser.username = data.username;

    newUser.save()
}