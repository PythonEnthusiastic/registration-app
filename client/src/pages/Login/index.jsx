import React from "react";

import useInput from "../../hooks/useInput.js"

import Navbar from "../../components/Navbar/index.jsx"

const Login = () => {
    const [input, setInput] = useInput();

    return (
        <>
            <Navbar />
            <h1>Login Page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={setInput} />
                <label htmlFor="passeword">Password:</label>
                <input type="password" id="password" name="password" onChange={setInput} />
                <button type="button">Submit</button>
            </form>
        </>
    )
}

export default Login;