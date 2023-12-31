import React from "react";
import axios from "axios";

import useInput from "../../hooks/useInput.js"

import Navbar from "../../components/Navbar/index.jsx"

const Login = () => {
    const [input, setInput] = useInput();

    const loginSender = () => {
        axios.post("/api/v1/login", {
            data: JSON.stringify(input)
        })
    }

    return (
        <>
            <Navbar />
            <h1>Login Page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={setInput} />
                <label htmlFor="passeword">Password:</label>
                <input type="password" id="password" name="password" onChange={setInput} />
                <button type="button" onClick={loginSender}>Login</button>
            </form>
        </>
    )
}

export default Login;