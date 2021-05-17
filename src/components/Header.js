import React from "react";
import "../assets/custom.css";
import { BrowserRouter as Router, Link, Route , Switch } from "react-router-dom";
import {
  MessageTwoTone,
  NotificationTwoTone,
  InfoCircleTwoTone,
  SwitcherTwoTone,
} from "@ant-design/icons";
import Messages from "./Messages";
import Notification from "./Notifications";
import News from "./News";
import Blog from "./Blog";

function Header() {
  return (
    <div className="Header">
      <h3>My Panel</h3>

     <div className="Navbar">
       
              <ul className="Links">
                <li>
                  <MessageTwoTone />
                 <Link to="/message">Messages</Link>
                </li>
                <li>
                  <NotificationTwoTone />
                  <Link to="/notifications">Notifications</Link>
                </li>
                <li>
                  <SwitcherTwoTone />
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <InfoCircleTwoTone />
                  <Link to="/news">News</Link>
                </li>
              </ul>
            
    
     
      </div>
      </div>
  
  );
}

export default Header;
