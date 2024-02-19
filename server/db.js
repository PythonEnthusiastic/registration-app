require('dotenv').config()
const mongoose = require("mongoose");
const dbUrl = process.env.URI;

mongoose.connect(dbUrl).then(() => 'connected');

const udb = mongoose.connection;
udb.on('error', console.error.bind(console, 'connection error: '));

const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
    telephone: String,
    address: String,
    isAdmin: { type: Boolean, default: false },
    createDate: { type: Date, default: Date.now }
});

const student = mongoose.model("student", studentSchema, 'test.students')

exports.createUser = async (data) => {
    const newUser = new student(data);

    await newUser.save()
}

exports.findUser = async (name) => {
    const user = await student.find({ username: name })

    return user
}