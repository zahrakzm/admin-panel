import React from "react";
import "../assets/custom.css";
import { SidebarOptions } from "./SidebarOptions";
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="Sidebar">
      {" "}
      <ul className="SidebarList">
        {SidebarOptions.map((value, key) => {
          return (
            <li className ="row"
            id= {window.location.pathname === value.link ? "active" : ""}
              key={key}
              onClick={() => (window.location.pathname = value.link)}
            >
              <Link to = {value.pathname}> </Link>
              <div id= 'icon'>{value.icon}</div>
              <div id='title'>{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
