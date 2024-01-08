import React, { useEffect } from "react";
import axios from "axios";

import useInput from "../../hooks/useInput.js";

import Navbar from "../../components/Navbar/index.jsx"

const Register = () => {
    const [input, setInput] = useInput();

    const sendRegistration = () => {
        axios.post("/api/v1/register", {
            data: JSON.stringify(input)
        })
    }

    return (
        <>
            <Navbar />
            <h1>Register Page</h1>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" onChange={setInput}/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" onChange={setInput}/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={setInput}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={setInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={setInput}/>
                <label htmlFor="telephone">Phone Number</label>
                <input type="text" id="telephone" name="telephone" onChange={setInput}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={setInput}/>
                <button type="button" onClick={sendRegistration}>Register</button>
            </form>
        </>
    )
}

export default Register;