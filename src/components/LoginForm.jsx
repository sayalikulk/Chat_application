import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import SignUp from './SignUp';

const LoginForm = ()=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"4d907f3f-8bee-4ea6-9598-3e9475d7ecdb", "User-Name":username, "User-Secret":password}
        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        } catch (error) {
            seterror('Oops, incorrect credentials')
        }
    }
    return (
        <>
        <div>
            <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
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
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    <p align="center">
                    <h4 style={{color:'white'}} align="center">Don't have an account?</h4>
                    <Link to='/hi' style={{color:'white'}}>Sign up</Link>
                    </p>
                   
                </form>
                
            </div>
            
        </div>
        </div>
        
        </>
    )
}

export default LoginForm;