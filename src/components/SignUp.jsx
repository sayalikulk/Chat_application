import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import {useState} from 'react';
import axios from 'axios';
import { WindowsFilled } from "@ant-design/icons";

const SignUp = ()=>{
    const history=useHistory("")
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [error, seterror] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        try {
            await axios.post(
                'https://api.chatengine.io/projects/people/',
                { 'username': username, 'secret': password, 'first_name': first_name, 'last_name': last_name },
                { headers: { "Private-Key": '9da0b3c2-5f1a-4f31-b881-46dc468c46f6 ' }}
            );
            history.push('/')
            
        } catch (error) {
            seterror('Enter all fields')
        }
    }
    return (
        <>
        <div>
            <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application SignUp
                </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e)=>setusername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required

                    />
                    <input 
                        type="text"
                        value={first_name}
                        onChange={(e)=>setfirst_name(e.target.value)}
                        className="input"
                        placeholder="First Name"
                        required

                    />
                    <input 
                        type="text"
                        value={last_name}
                        onChange={(e)=>setlast_name(e.target.value)}
                        className="input"
                        placeholder="Last Name"
                        required

                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Sign Up</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    
                   
                </form>
                
            </div>
            
        </div>
        </div>
        
        </>
    )
}

export default SignUp;