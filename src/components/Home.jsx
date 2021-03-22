import { ChatEngine } from 'react-chat-engine';

import '../App.css';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';


const Home=()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    const handleLogout= async (e)=>{
        e.preventDefault();
        
        try {
            localStorage.clear();
            window.location.reload();
        } catch (error) {
            console.log('Something is wrong')
        }
    }
    return(
        <div>
        <container>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#846CA8',color:'white'}}>
        <a class="navbar-brand" href="#" style={{color:'white'}}>We connect</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" style={{color:'white'}}href="#">Feed<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style={{color:'white'}} href="#">Chat</a>
            </li>
            <li class="nav-item">
                <form onSubmit={handleLogout}>
                    <button type="submit" class="nav-link" style={{backgroundColor:'#846CA8',color:'white'}}>Logout</button>
                </form>
                
            </li>
            </ul>
            
        </div>
</nav>
        </container>
        
        
        <ChatEngine
            height="92vh"
            projectID="4d907f3f-8bee-4ea6-9598-3e9475d7ecdb"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        /> 
        </div>
       
        
    )
}

export default Home;