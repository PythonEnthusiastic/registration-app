import { useState } from "react";

const useInput = () => {
    const [data, setData] = useState({});

    const handleData = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    
    return [data, handleData]
};

export default useInput;