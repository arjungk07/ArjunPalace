import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import gallery1 from './../assets/image/gallery1.avif';
import gallery2 from './../assets/image/gallery2.jpg';
import gallery3 from './../assets/image/gallery3.jpg';
import gallery_left from './../assets/image/gallery_left.svg';
import gallery_right from './../assets/image/gallery_right.svg';


import { useState } from 'react';
import { Link } from "react-router-dom";


const Gallery = () => {


    const [open, setOpen] = useState(false);





    return (


        // Gallery section
        <section className="gallery-section " >
            {/* container */}
            <div className="container">
                <h2 className='section-title' data-aos="fade-right" style={{ color: "#ffd700" }}>Our Beautiful Gallery</h2>
                <div className="gallery-container">
                    <button className='gallery-nav prev'><img src={gallery_left}></img>
                    </button>
                    <button className='gallery-nav next'><img src={gallery_right}></img></button>
                    <div className="gallery-wrapper">
                        <div className={`gallery-track ${open ? "pause" : " "}`}>

                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Elegant Hall Sections</h2>
                                        <p>Spacious and beautifully designed hall sections for your special celebrations</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Exquisite Floral Mandap</h2>
                                        <p>Traditional mandap with stunning floral arrangements for your sacred ceremonies</p>
                                    </div>

                                </Link>
                            </div>


                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/d0TY9gyQ/Start-your-love-from-here-BOOKINGS-OPEN-JFA-LUCKY-PALACE-MADURAI-1.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/d0TY9gyQ/Start-your-love-from-here-BOOKINGS-OPEN-JFA-LUCKY-PALACE-MADURAI-1.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Premium Golden Furniture</h2>
                                        <p>Luxurious golden furniture sets creating a royal atmosphere</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Grand Entrance with Lift</h2>
                                        <p>Impressive entrance featuring modern lift access for your convenience</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/3Nc2ZbXw/chair.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/3Nc2ZbXw/chair.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Elegant Seating Arrangement</h2>
                                        <p>Comfortable and stylish seating for your guests</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/NfRTFWXv/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-5.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/NfRTFWXv/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-5.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Grand Wedding Hall</h2>
                                        <p>Our magnificent main hall featuring luxury amenities and elegant décor</p>
                                    </div>
                                </Link>
                            </div>

                            {/* duplicate items for looping */}
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Elegant Hall Sections</h2>
                                        <p>Spacious and beautifully designed hall sections for your special celebrations</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Exquisite Floral Mandap</h2>
                                        <p>Traditional mandap with stunning floral arrangements for your sacred ceremonies</p>
                                    </div>

                                </Link>
                            </div>


                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/d0TY9gyQ/Start-your-love-from-here-BOOKINGS-OPEN-JFA-LUCKY-PALACE-MADURAI-1.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/d0TY9gyQ/Start-your-love-from-here-BOOKINGS-OPEN-JFA-LUCKY-PALACE-MADURAI-1.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Premium Golden Furniture</h2>
                                        <p>Luxurious golden furniture sets creating a royal atmosphere</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Grand Entrance with Lift</h2>
                                        <p>Impressive entrance featuring modern lift access for your convenience</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/3Nc2ZbXw/chair.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/3Nc2ZbXw/chair.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Elegant Seating Arrangement</h2>
                                        <p>Comfortable and stylish seating for your guests</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`maingallery-item ${open ? "active" : ""}`} onClick={() => setOpen(true)}  >
                                <Link to="/view" state={{
                                    image: "https://i.postimg.cc/NfRTFWXv/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-5.jpg"
                                }}>
                                    <img src='https://i.postimg.cc/NfRTFWXv/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-5.jpg' className='img-fixed' style={{ maxWidth: "100%", height: "100%" }}></img>
                                    <div class="overlay">
                                        <h2>Grand Wedding Hall</h2>
                                        <p>Our magnificent main hall featuring luxury amenities and elegant décor</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="gallery-indicators">
                            <span className='gallery-indicator'></span>
                            <span className='gallery-indicator'></span>
                            <span className='gallery-indicator'></span>
                            <span className='gallery-indicator'></span>
                            <span className='gallery-indicator'></span>

                        </div>
                    </div>


                </div>
            </div>


        </section>



    )
}

export default Gallery