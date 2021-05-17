import React from 'react'
import '../assets/custom.css'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom';
import Header from './Header'
import App from '../App'
import Messages from "./Messages";
import News from "./News";
import Notification from "./Notifications";
import Blog from "./Blog";
import {
    MessageTwoTone,
    NotificationTwoTone,
    InfoCircleTwoTone,
    SwitcherTwoTone,
  } from "@ant-design/icons";


const Home = () => {
    return (
  
        <div className= 'Home' >
             this is my home page
             
     </div>
    )
}

export default Home
