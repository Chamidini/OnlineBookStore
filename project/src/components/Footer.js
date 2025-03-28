import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";


export default function Footer() {
  return (  
    <footer className="footer">

      <img src="./pic/logo.jpg" alt="logo" className='logo' height={100} width={120}></img>
      
      <p>©2025 BookShop | All rights reserved</p>

      <div className='links'>
        <a href="#" className="social_media"><FaFacebookF />
        </a>
        <a href="#" className="social_media"><FaTwitter />
        </a>
        <a href="#" className="social_media"><FaInstagram />
        </a>
        <a href="#" className="social_media"><TiSocialLinkedin />
        </a>
      </div>

    </footer>  
    )
}
