import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


//aos animation
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';



const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);

  return (

    // Header field
    <div>

  
      {/* video link */}

      <video
        className="position-absolute top-0 start-0 w-100 h-100"
        src="https://jfaluckypalace.com/1000007175.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: "cover", zIndex: "-10" }}
      >
      </video>



      {/* header logo  field */}
      <div className='header-logo'>
        <h1 data-aos='fade-right'  style={{color:'#ffd700'}}>Arjun Lucky Palace</h1>
  
            <div className='d-flex flex-column gap-1'>

              <div className='dot'>

              </div>
              <div className='dot'>

              </div>
              <div className='dot'>

              </div>

            </div>

      </div>





      {/* header title field */}

      <div className="header">
        <div className='header-title'>
          <h1 data-aos='fade-up'>Your Perfect Wedding Destination</h1>
          <h6 data-aos='fade-up' >15,000 sq.ft of luxury and elegance in the heart of Madurai</h6>
          {/* <Button variant="warning" className='w-80 h-80 m-3 button' data-aos='fade-up'>Warning</Button> */}
          <a href="https://wa.me/919443138918" style={{ textDecoration: "none", color: "transparent" }}> <button data-aos='fade-up' className='header-button'>Book Your Dream Wedding</button></a>
        </div>
      </div>


    </div>



  )
}

export default Header