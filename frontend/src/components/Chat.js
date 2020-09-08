import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from 'axios';
import React, { useState } from 'react';
import '../components_css/chat.css';

function Chat({messages}) {
    const [input, setinput] = useState("")
    const sendMessage= async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5000/messages/new',{
            message:input,
            name: "Demo",
            timestamp:"now",
            received: false
        });
        setinput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) =>(
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                        {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                </p>
                ))}
                
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Emma</span>
                    i got it
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div>
                <div className="chat__footer">
                    <InsertEmoticonIcon />
                    <form>
                        <input 
                            value={input}
                            onChange={e =>setinput(e.target.value)}
                            placeholder="Type a message"
                            type="text"
                        />
                        <button onClick={sendMessage} type="submit">
                            Send a Message
                        </button>
                    </form>
                    <MicIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Chat
