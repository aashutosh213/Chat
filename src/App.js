import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Component/ChatFeed";
// require('dotenv').config()

const App = () => {
  const x = process.env.REACT_APP_PROJECT_ID;
  const y = process.env.REACT_APP_SECRET;
  const z = process.env.REACT_APP_USERNAME;
  return (
    <ChatEngine
      height="100vh"
      projectID={`${x}`}
      userName={`${z}`}
      userSecret={`${y}`}
      renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
    /> 
  );
};

export default App;
