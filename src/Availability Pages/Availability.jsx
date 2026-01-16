import React from 'react'

import { Link } from "react-router-dom";
import { useState } from "react";

import { FaCircle } from "react-icons/fa";



const Availability = () => {

  const [Dropdown, setDropdown] = useState(false);

  return (
    <section className='availability-section' >

      <div className="particles">
        <div className="particle" style={{ left: "5.54%", top: "6.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "10.343%", height: "10.544%" }} /></div>
        <div className="particle" style={{ left: "20.767%", top: "7.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "25.343%", height: "10.544%" }} /></div>
        <div className="particle" style={{ left: "77.687%", top: "3.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "20.343%", height: "10.544%" }} /></div>
        <div className="particle" style={{ left: "69.4356%", top: "7.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "15.343%" }} /></div>
        <div className="particle" style={{ left: "70.4356%", top: "10.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "25.655%", height: "25.343%" }} /></div>
        <div className="particle" style={{ left: "95.4356%", top: "15.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "8.655%", height: "8.343%" }} /></div>
        <div className="particle" style={{ left: "50.4356%", top: "20.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "34.655%", height: "25.343%" }} /></div>
        <div className="particle" style={{ left: "99.4356%", top: "27.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "8.655%", height: "8.343%" }} /></div>
        <div className="particle" style={{ left: "66.4356%", top: "31.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "30.655%", height: "10.343%" }} /></div>
        <div className="particle" style={{ left: "55.4356%", top: "37.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "25.655%", height: "5.343%" }} /></div>
        <div className="particle" style={{ left: "89.4356%", top: "43.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "22.655%", height: "2.343%" }} /></div>
        <div className="particle" style={{ left: "3.4356%", top: "47.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "11.655%", height: "11.343%" }} /></div>
        <div className="particle" style={{ left: "69.4356%", top: "57.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "7.655%", height: "7.343%" }} /></div>
        <div className="particle" style={{ left: "89.4356%", top: "51.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "4.343%" }} /></div>
        <div className="particle" style={{ left: "49.4356%", top: "60.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "3.655%", height: "3.343%" }} /></div>
        <div className="particle" style={{ left: "56.4356%", top: "67.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "25.343%" }} /></div>
        <div className="particle" style={{ left: "23.4356%", top: "63.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "6.655%", height: "6.343%" }} /></div>
        <div className="particle" style={{ left: "17.4356%", top: "71.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "29.655%", height: "9.343%" }} /></div>
        <div className="particle" style={{ left: "98.4356%", top: "75.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "26.655%", height: "16.343%" }} /></div>
        <div className="particle" style={{ left: "91.4356%", top: "79.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "19.655%", height: "19.343%" }} /></div>
        <div className="particle" style={{ left: "88.4356%", top: "84.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "28.655%", height: "28.343%" }} /></div>
        <div className="particle" style={{ left: "25.4356%", top: "88.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "17.343%" }} /></div>
        <div className="particle" style={{ left: "50.4356%", top: "93.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "5.343%" }} /></div>
        <div className="particle" style={{ left: "56.4356%", top: "99.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "7.343%" }} /></div>
        <div className="particle" style={{ left: "81.4356%", top: "100.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "19.655%", height: "9.343%" }} /></div>
        <div className="particle" style={{ left: "2.4356%", top: "55.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "18.655%", height: "8.343%" }} /></div>
      </div>

      {/* logo and navbar content */}
      <div className='avai-logo'>
        <h2 data-aos='fade-right'data-aos-duration="1500" style={{ color: '#ffd700' }}>Arjun Lucky Palace</h2>

        {/* three dot content */}
        <div className='d-flex flex-column gap-1 dots' onClick={() => setDropdown(!Dropdown)}>

          <div className='dot'>

          </div>
          <div className='dot'>

          </div>
          <div className='dot'>

          </div>

          {/* dropdown box */}

          {
            Dropdown &&
            (
              <div className='drop-down'>
                <Link to="/">Home</Link>
                <a href='#details'>Details</a>
                <Link to="/events">Events</Link>
                <Link to="/packages">Packages</Link>
              </div>
            )
          }




        </div>

      </div>




      {/* availability container */}
      <div className="availability-container" >

        {/* video content */}
        <div className="video-container">
          <video
            src="https://jfaluckypalace.com/1000007175.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover", zIndex: "-1" }}
          >
          </video>
        </div>

        {/* Availability Header title content */}
        <div className="avai-header">
          <h2 data-aos='fade-right' data-aos-duration="1500" >Event Calendar</h2>
          <a href="https://wa.me/9095917892" style={{ textDecoration: "none", color: "transparent" }} data-aos="zoom-in" data-aos-duration='1500'>
            <button data-aos='fade-up' className='shine-btn' style={{fontSize:"1.2rem",letterSpacing:"2px",fontWeight:"500"}}>Check Availability</button>
          </a>
        </div>





      </div>

    </section>
  )
}

export default Availability