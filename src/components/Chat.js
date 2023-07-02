import React, { useState } from "react";
import Logout from "./Logout";
import "./Chat.css";

function Chat({ messages, handleMessageSubmit, input, setInput }) {
  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
        <Logout />
      </div>
    </div>
  );
}

export default Chat;
