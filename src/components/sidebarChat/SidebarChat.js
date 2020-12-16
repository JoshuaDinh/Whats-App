import React, { useEffect, useState } from "react";
import "./sidebarchat.css";
import { Avatar } from "@material-ui/core";
import db from "../../firebase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  // Prompts to create a new chat
  const createChat = () => {
    const roomName = prompt("please enter name for chat");

    // pushs info to firebase db
    if (roomName) {
      db.collection("Rooms").add({
        name: roomName,
      });
    }
  };
  // conditionally rendering same component to show add new chat
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>last message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2> Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
