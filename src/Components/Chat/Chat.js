import React from "react";
import "./index.css";
import { FaLock } from "react-icons/fa";
import { Typography } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useSelector } from "react-redux";

function Chat() {
  const {user} =useSelector(state=>state.user)
  return (
    <div className="chat-container">
      {user ? (
        <div>
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </div>
      ) : (
        <div className="newpage-container">
          <img src={require("../../images/new.png")} width="50%" alt="new" />
          <div className="encryption">
            <FaLock color="#54646f" size={10} />
            <Typography color="#8696a0">End-to-end encrypted</Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
