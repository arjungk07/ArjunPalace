import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import { useState, useEffect } from 'react';

import { IoIosArrowUp } from "react-icons/io";


const Footer = () => {

  const [Top, SetTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        SetTop(true);
      }
      else {
        SetTop(false);
      }

    });

  }, []);

  function handleTop() {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth",
      }
    )
  };


  return (
    <footer>
      {/* footer container */}
      <div className="container">
        <h2 style={{color:"#ffd700"}}>Arjun Lucky Palace</h2>
        <p style={{ fontSize: "18px", fontWeight: "400", paddingBottom: "10px", lineHeight: "23px" }}>Where dreams become beautiful reality</p>

        {/* social links */}
        <div className="social-links">
          <div className='social-icon'><a href='https://www.facebook.com/profile.php?id=100088934403785'><FaFacebookF /></a></div>
          <div className='social-icon'><a href='https://www.instagram.com/jfa_lucky_palace'><FaInstagram /></a></div>
          <div className='social-icon'><a href='https://wa.me/919443138918'><FaWhatsapp /></a></div>
        </div>
        <p style={{ fontSize: "18px", fontWeight: "400", paddingBottom: "10px", lineHeight: "23px" }}>© 2025 JFA Lucky Palace. All Rights Reserved.</p>
      </div>
      <p style={{ fontSize: "15px", fontWeight: "400", paddingBottom: "10px" }}>Designed By Arjun tech</p>

      {/* set top button */}
      {
        Top &&
        (
          <div className="top" onClick={handleTop}>
            <div className="top-icon"><IoIosArrowUp /></div>
          </div>
        )
      }
    </footer>
  )
}

export default Footer