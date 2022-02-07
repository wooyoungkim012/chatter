import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic'
import NamePicker from "./NamePicker";

// this is a Component

function App() {
  // useState creates a magic variable
  // here its called "messages"
  // the initial value is an empty array
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)
  // const [editName, setEditName] = useState(false);
  function sendMessage(text) {
    // create new message object
    if (!text) return;
    const newMessage = {
      text,
      time: Date.now(),
      user: "Woo Young",
    };
    setMessages([newMessage, ...messages]);
  }

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
        <div id='namepicker'><NamePicker /></div>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      
      <TextInput sendMessage={text=> sendMessage(text)}  showCamera={()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
  );
}

export default App;