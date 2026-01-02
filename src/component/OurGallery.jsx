import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


// import gallery1 from './../assets/image/gallery1.avif';
// import gallery2 from './../assets/image/gallery2.jpg';
// import gallery3 from './../assets/image/gallery3.jpg';


import gallery_left from './../assets/image/gallery_left.svg';
import gallery_right from './../assets/image/gallery_right.svg';


const OurGallery = () => {
  return (



    // all content content in the div
    <div className='all-content'>
      {/*  header content */}
      <div className='container-fluid bg-dark py-4'>
        <div className="row align-items-center">
          <div className="col-2 col-md-1"> <Link to="/" style={{ textDecoration: "none" }}>< FaArrowLeft className='img-fluid img-fixed' style={{ color: "white", fontSize: "40px" }} /></Link></div>
          <div className="col-10 col-md-11 text-center">
            <h1 className='fs-1 fs-md-4' style={{ color: "#ffd700" }}>Arjun Lucky Palace</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* left side big image */}
          <div className="col-12 col-md-6">
            <img src='https://jfaluckypalace.com/image/18.jpg' className="img-fixed img-zoom rounded" style={{ maxWidth: "100%", height: "100%" }} />
          </div>
          {/* right side 4 image */}
          <div className="col-12 col-md-6">
            <div className="row g-3 mt-4 mt-md-0 ">

              <div className="col-6 ">
                <img src='https://jfaluckypalace.com/image/2.jpg' className='img-fluid img-fixed img-zoom rounded' />
              </div>

              <div className="col-6 rounded">
                <img src='https://jfaluckypalace.com/image/16.jpg' className='img-fluid img-fixed img-zoom rounded' />
              </div>

              <div className="col-6">
                <img src='https://jfaluckypalace.com/image/4.jpg' className='img-fluid img-fixed img-zoom rounded' />
              </div>

              <div className="col-6">
                <img src='https://jfaluckypalace.com/image/5.jpg' className='img-fluid img-fixed rounded' />
              </div>


            </div>
          </div>

        </div>

        {/* second row  */}
        <div className="row mt-5  g-3">
          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/6.jpg' className='img-fluid img-fixed  rounded img-zoom' />
          </div>

          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/7.jpg' className='img-fluid img-fixed rounded img-zoom' />
          </div>

          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/13.jpg' className='img-fluid img-fixed rounded img-zoom' />
          </div>

          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/12.jpg' className='img-fluid img-fixed rounded img-zoom' />
          </div>

          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/15.jpg' className='img-fluid img-fixed rounded img-zoom' />
          </div>

          <div className="col-6 col-md-4">
            <img src='https://jfaluckypalace.com/image/9.jpg' className='img-fluid img-fixed rounded img-zoom' />
          </div>

        </div>


        {/* image running slide */}

        <div className="gallery-container">
          <button className='gallery-nav prev'><img src={gallery_left}></img>
          </button>
          <button className='gallery-nav next'><img src={gallery_right}></img></button>
          <div className="gallery-wrapper">
            <div className="gallery-track">
              <div className="maingallery-item"><img src='https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img></div>
              <div className="maingallery-item"><img src='https://i.postimg.cc/cChZn0G6/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-6.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img></div>
              <div className="maingallery-item"><img src='https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img></div>
              <div className="maingallery-item"><img src='https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img></div>
              <div className="maingallery-item"><img src='https://i.postimg.cc/DzQ3MvBS/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img></div>

            </div>
          </div>



        </div>

      </div>


    </div>

  )
}

export default OurGallery