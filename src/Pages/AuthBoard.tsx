import React from "react";
import jwt from "jsonwebtoken"
import { redirect } from 'react-router-dom';


class AuthBoard extends React.Component <{}, {name: string}>{

    constructor(props:any) {
        super(props);
        this.state = {name: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event:React.FormEvent<HTMLInputElement>){
        this.setState({name: (event.target as HTMLInputElement).value });
    }

    handleSubmit(event:React.FormEvent){
        event.preventDefault()
        const token = jwt.sign({username: this.state.name}, 'secret');
        localStorage.setItem('token', token);
        return redirect("/chat");
    }

    render() {
        return (
        <div className="Alert-box">
            <form onSubmit={this.handleSubmit} >
                <label>Enter your nickname and get a token for 5 minutes</label>
                <input type="text" name={this.state.name} onChange={this.handleChange} autoFocus/>
                <input type="submit" value="GET TOKEN"/>
            </form>
        </div>
        )
    }
}

export default AuthBoard