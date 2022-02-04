import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic'

// this is a Component

function App() {
  // useState creates a magic variable
  // here its called "messages"
  // the initial value is an empty array
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)
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

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
}
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <Camera {...showCamera && <Camera takePicture={takePicture} />} />
      <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;