import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useInput from "../../hooks/useInput.js"

import Navbar from "../../components/Navbar/index.jsx"

const Login = () => {
    const [input, setInput] = useInput();
    const navigate = useNavigate();

    const sendLogin = () => {
        axios.post("/api/v1/login", {
            data: JSON.stringify(input)
        })
        .then(_ => {
            navigate("/dashboard")
        })
        .catch(_ => {
            console.log("Error")
        })
    }

    return (
        <>
            <Navbar />
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={setInput} />

                <label htmlFor="passeword">Password:</label>
                <input type="password" id="password" name="password" onChange={setInput} />
                
                <button type="button" onClick={sendLogin}>Login</button>
            </form>
        </>
    )
}

export default Login;