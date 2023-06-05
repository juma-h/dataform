import React from "react";
import "./mainscreen.css";
import { Content, Navbar, Sidebar } from "../../Components";

function MainScreen() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar/>
      </div>

      <div>
        <div className="header"><Navbar/></div>
        <div className="content"><Content/></div>
      </div>
    </div>
  );
}

export default MainScreen;
