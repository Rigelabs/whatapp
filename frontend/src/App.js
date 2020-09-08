import axios from 'axios';
import Pusher from 'pusher-js';
import React, { useEffect, useState } from 'react';
import "./App.css";
import Chat from './components/Chat';
import SideBar from './components/SideBar';
function App() {
  //set state
  const [messages, setMessages] =  useState([]);
  //fetching messages
  useEffect(() =>{
      axios.get('http://localhost:5000/messages/sync')
      .then((response) =>{
        
        setMessages(response.data)
      })
  },[]);
  //listening to push messages
  useEffect(() => {
    const pusher = new Pusher('54660d7f9fe97640f2e6', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));    //alerts when something is pushed
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  console.log(messages)
  return (
    
    <div className="app">
      <div className="app__body">
          <SideBar />
          <Chat messages={messages}/>
      </div>
      
      
    </div>
  );
}

export default App;
