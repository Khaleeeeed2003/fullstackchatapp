import React from 'react';
import { Router ,  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ChatApp from './chat-app/ChatApp';
import Login from './login/Login';
function App() {
  return (
  <>
      {/* <ChatApp></ChatApp> */}
      <Login/>
  </>
  );
}

export default App;
