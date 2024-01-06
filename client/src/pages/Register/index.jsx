import React from "react";

import useInput from "../../hooks/useInput.js";

import Navbar from "../../components/Navbar/index.jsx"

const Register = () => {
    const [input, setInput] = useInput();

    return (
        <>
            <Navbar />
            <h1>Register Page</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={setInput} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={setInput} />
            </form>
        </>
    )
}

export default Register;