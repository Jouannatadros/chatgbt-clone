//import { useState } from "react";
import { sendMessageToOpenAI } from "./axios";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Register from "./components/Register";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/** Route for the Home component */}
          <Route path="/" element={<Home />} />

          {/** Route for the Register component */}
          <Route path="/register" element={<Register />} />

          {/** Route for the Login component */}
          <Route path="/login" element={<Login />} />

          {/** Route for the Chat component */}
          <Route
            path="/chat"
            element={
              <Chat
                messages={messages}
                handleMessageSubmit={handleMessageSubmit}
                input={input}
                setInput={setInput}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
