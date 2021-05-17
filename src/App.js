import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Component/ChatFeed";
import LoginForm from "./Component/LoginForm";
// require('dotenv').config()

const App = () => {
  const x = "5d3ae719-cb5f-4cf7-9839-1ccbea748754";
  

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID={`${x}`}
      userName= {localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
    /> 
  );
};

export default App;
