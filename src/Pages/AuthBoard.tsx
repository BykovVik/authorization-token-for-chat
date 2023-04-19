import React, { useState } from "react";
import jwt from "jsonwebtoken"

type Props = {
    changeState: Function
}

function AuthBoard(props:Props) {

    const [name, setName] = useState("");

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName((event.target as HTMLInputElement).value);
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        const token = jwt.sign({username: name}, 'secret');
        localStorage.setItem('token', token);
        localStorage.setItem('username', name);
        props.changeState(true)
    }
    return (
        <div className="Alert-box">
            <form onSubmit={handleSubmit} >
                <label>Enter your nickname and get a token for 5 minutes</label>
                <input type="text" name={name} onChange={handleChange} autoFocus/>
                <input type="submit" value="GET TOKEN"/>
            </form>
        </div>
    )
    
}

export default AuthBoard