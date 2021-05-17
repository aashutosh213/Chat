import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Component/ChatFeed";
import LoginForm from "./Component/LoginForm";
// require('dotenv').config()

const App = () => {
  const x = process.env.REACT_APP_PROJECT_ID;
  

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
