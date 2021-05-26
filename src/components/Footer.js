import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import companyLogo from '../assets/imgs/companyLogo.png'

function Footer() {
  return (
    <div className="Footer">
      <div className= 'FooterRight'>
      <ul>
        <IconContext.Provider value ={{ style: {fontSize: '30px' , color : 'rgb(255,255,255)' , marginRight: '220px'}}}>
          <li>
            <FaTwitter />
          </li>
        </IconContext.Provider>


        <IconContext.Provider value ={{ style: {fontSize: '30px' , color : 'rgb(255,255,255)'}}}>
        <li>
          <FaInstagram />
        </li>
        </IconContext.Provider>

        <IconContext.Provider value ={{ style: {fontSize: '30px' , color : 'rgb(255,255,255)'}}}>
        <li>
          <FaTelegram />
        </li>
        </IconContext.Provider>
      </ul>
      </div>
      <div className= 'FooterLeft'>
   <img src = {companyLogo} alt= 'companyLogo'/>
   </div>
  </div>
 
  );
}

export default Footer;
