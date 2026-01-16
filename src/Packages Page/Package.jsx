import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";






const Package = () => {

    const [Toggle, SetToggle] = useState(false);

    return (
        <div className="event-part" style={{ overflow: "hidden", background: "" }}>
            <div className='particles'>
                <div className="event-particle" style={{ left: "5.54%", top: "6.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "10.343%", height: "10.544%" }} /></div>
                <div className="event-particle" style={{ left: "20.767%", top: "7.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "25.343%", height: "10.544%" }} /></div>
                <div className="event-particle" style={{ left: "77.687%", top: "3.5434%", animationDelay: "0.54451", animationDuration: "5.4344s" }}><FaCircle style={{ width: "20.343%", height: "10.544%" }} /></div>
                <div className="event-particle" style={{ left: "69.4356%", top: "7.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "15.343%" }} /></div>
                <div className="event-particle" style={{ left: "70.4356%", top: "10.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "21.655%", height: "8.343%" }} /></div>
                <div className="event-particle" style={{ left: "95.4356%", top: "15.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "8.655%", height: "8.343%" }} /></div>
                <div className="event-particle" style={{ left: "50.4356%", top: "20.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "34.655%", height: "25.343%" }} /></div>
                <div className="event-particle" style={{ left: "99.4356%", top: "27.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "8.655%", height: "8.343%" }} /></div>
                <div className="event-particle" style={{ left: "66.4356%", top: "31.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "30.655%", height: "10.343%" }} /></div>
                <div className="event-particle" style={{ left: "55.4356%", top: "37.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "25.655%", height: "5.343%" }} /></div>
                <div className="event-particle" style={{ left: "89.4356%", top: "43.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "22.655%", height: "2.343%" }} /></div>
                <div className="event-particle" style={{ left: "3.4356%", top: "47.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "11.655%", height: "11.343%" }} /></div>
                <div className="event-particle" style={{ left: "69.4356%", top: "57.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "7.655%", height: "7.343%" }} /></div>
                <div className="event-particle" style={{ left: "89.4356%", top: "51.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "4.343%" }} /></div>
                <div className="event-particle" style={{ left: "49.4356%", top: "60.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "3.655%", height: "3.343%" }} /></div>
                <div className="event-particle" style={{ left: "56.4356%", top: "67.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "25.343%" }} /></div>
                <div className="event-particle" style={{ left: "23.4356%", top: "63.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "6.655%", height: "6.343%" }} /></div>
                <div className="event-particle" style={{ left: "17.4356%", top: "71.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "29.655%", height: "9.343%" }} /></div>
                <div className="event-particle" style={{ left: "98.4356%", top: "75.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "26.655%", height: "16.343%" }} /></div>
                <div className="event-particle" style={{ left: "91.4356%", top: "79.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "19.655%", height: "19.343%" }} /></div>
                <div className="event-particle" style={{ left: "88.4356%", top: "84.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "28.655%", height: "28.343%" }} /></div>
                <div className="event-particle" style={{ left: "25.4356%", top: "88.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "17.343%" }} /></div>
                <div className="event-particle" style={{ left: "50.4356%", top: "93.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "15.655%", height: "5.343%" }} /></div>
                <div className="event-particle" style={{ left: "56.4356%", top: "99.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "17.655%", height: "7.343%" }} /></div>
                <div className="event-particle" style={{ left: "81.4356%", top: "100.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "19.655%", height: "9.343%" }} /></div>
                <div className="event-particle" style={{ left: "2.4356%", top: "55.5434%", animationDelay: "1.54451s", animationDuration: "5.4344s" }}><FaCircle style={{ width: "18.655%", height: "8.343%" }} /></div>
            </div>


            {/* NAVBAR */}
            <nav className="pack-nav" style={{ background: "rgba(26, 35, 50, 0.95)" }}>
                <div className="logo">Arjun Lucky Palace</div>


                <div className={`nav-links ${Toggle ? "active" : " "}`}>
                    <Link to="/">Home</Link>
                    <a href='#calculator'>Package Calculator</a>
                    <a href="#blog">Blog & Tips</a>
                    <a href="#vendor">Vendor Partners</a>
                    <a href="#decor">Decor Themes</a>
                    <a href="#press">Press & Media</a>
                    <a href="#booknow">Book Now</a>
                </div>

                <div className="toggle" onClick={() => SetToggle(!Toggle)}><IoReorderThree /></div>

            </nav >

            {/* HERO SECTION */}
            < section className="package-section" >

                <div className="content">
                    <h1>Custom Packages & Services</h1>
                    <p>
                        Design your perfect event with our comprehensive planning tools
                    </p>
                    <button className='shine-btn' style={{ boxShadow: "0 15px 35px rgba(212, 175, 55, 0.4)", fontSize: "1.1rem", fontWeight: "600" }}>START PLANNING</button>
                </div>
            </section >


            {/* package calculator section */}

            <section className='calculator' id='calculator'>
                <div className="container">
                    <h2 className='section-title' style={{color:"#1a2332",fontSize:"2.5rem"}}>Custom Package Calculator</h2>
                    <div className="calculator-container">
                        <div className="calculator-form">

                            <h3 style={{marginBottom:"30px",color:"#1a2332",fontSize:"1.8rem",fontWidth:"500"}}>Plan Your Perfect Event</h3>
                            <div className="form-group">
                                <label htmlFor='eventType'>Event Type</label>
                                <select className='form-control'>
                                    <option value="eventType">Select Event Type</option>
                                    <option value="wedding">Wedding Ceremony</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="birthday">Birthday Party</option>
                                    <option value="corporate">Corporate Event</option>
                                    <option value="baby-shower">Baby shower</option>
                                    <option value="college">College Function</option>
                                    <option value="religious">Religious Event</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Number of Guests</label>
                                <input type='range' className='form-control'></input>
                                <div style={{textAlign:"center",marginTop:'10px',fontWeight:"600",color:"#ffd700"}}><span>200 Guests</span></div>
                            </div>

                            <div className="form-group">
                                <label>Food Options</label>
                                <div className="checkbox-group">
                                    <div className="checkbox-item">
                                        <input type='checkbox'></input>
                                        <label htmlFor="veg-menu">Vegetarian Menu (+₹15,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type='checkbox'></input>
                                        <label htmlFor="non-veg-menu">Non-Vegetarian Menu (+₹25,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type='checkbox'></input>
                                        <label htmlFor="food-counter">Live Food Counter (+₹20,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type='checkbox'></input>
                                        <label htmlFor="desert">Dessert Station (+₹12,000)</label>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label htmlFor="decor-themes">Decor Themes</label>
                                <div className="checkbox-group">
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="royal-theme">Royal Theme (+₹50,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="floral-theme">Floral Theme (+₹35,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="rustic-theme">Rustic Theme (+₹30,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="minimal-theme">Minimal Theme (+₹50,000)</label>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label htmlFor="audio">Audio/Visual Needs</label>
                                <div className="checkbox-group">
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="sound-system">Premium Sound System (+₹15,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="lighting">Profossional Lighting (+₹25,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="Photography">Photography Package (+₹40,000)</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" />
                                        <label htmlFor="videography">Videography Package (+₹35,000)</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="price-display">

                            <h3>Your Custom Package</h3>
                            <div className="price-breakdown">
                                <div className="price-item">
                                    <span>Base Package:</span>
                                    <span>₹0</span>
                                </div>
                                <div className="price-item">
                                    <span>Guest Count Adjustment:</span>
                                    <span>₹0</span>
                                </div>

                                 <div className="price-item">
                                    <span>Add-ons:</span>
                                    <span>₹0</span>
                                </div>

                                <div className="total-price">₹0</div>
                                <p style={{marginBottom:'30px',opacity:"0.9",lineHeight:"1.5"}}>*Prices are estimates and may vary based on specific requirements</p>
                                <a href='https://api.whatsapp.com/send/?phone=9095917892&text&type=phone_number&app_absent=0'><button className='shine-btn'>Get Detialed Quote</button></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Blog section */}

            <section class="blog-section" id='blog'>
                <h2 class="section-title">Event Planning Blog & Tips</h2>

                <div class="blog-container">
                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>


                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>


                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>


                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>


                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>


                    <div class="blog-card">

                        <div class="blog-img">
                            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Wedding" />
                        </div>

                        <div class="blog-content">
                            <div class="meta">
                                <span><FaCalendar /> Dec 15, 2024</span>
                                <span><FaUser /> Event Expert</span>
                            </div>

                            <h3>10 Essential Wedding Planning Tips for 2025</h3>

                            <p>
                                Discover the latest trends and timeless advice for planning your perfect wedding
                                celebration in the new year.
                            </p>

                            <a href="#" class="read-more">Read More →</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* vendor section */}
            <section className='vendor-part' id='vendor'>
                <h2 class="section-title" style={{color:"#ffd700"}}>Trusted Vendor Partners</h2>

                <div className="vendor-section">
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                    <div class="vendor-card">

                        {/* <!-- Card Header --> */}
                        <div class="card-header">
                            <h3>Premium Caterers</h3>
                        </div>

                        {/* <!-- Card Body --> */}
                        <div class="card-body">

                            <div class="vendor">
                                <h4>Royal Feast Catering</h4>
                                <p class="rating">★★★★★ (4.9/5)</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div class="vendor">
                                <h4>Madurai Delights</h4>
                                <p class="rating">★★★★★ (4.8/5)</p>
                                <p>+91 98765 43211</p>
                            </div>

                            <div class="vendor">
                                <h4>Traditional Tastes</h4>
                                <p class="rating">★★★★☆ (4.7/5)</p>
                                <p>+91 98765 43212</p>
                            </div>

                        </div>
                    </div>
                </div>



            </section>

            {/* themes section */}

            <section class="blog-section" id='decor'>
                <h2 class="section-title">Stunning Decor Themes</h2>

                <div class="blog-container">
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹50,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Royal Theme</h2>
                                <p>Majestic golden decor with premium fabrics and crystal chandeliers</p>
                            </div>
                        </div>

                    </div>
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹35,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Floral Paradise</h2>
                                <p>Fresh flowers and natural elements creating a garden-like atmosphere</p>
                            </div>
                        </div>

                    </div>
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹30,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Rustic Elegance</h2>
                                <p>Vintage charm with wooden elements and warm lighting</p>
                            </div>
                        </div>

                    </div>
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹20,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Minimal Chic</h2>
                                <p>Clean lines and sophisticated simplicity with modern touches</p>
                            </div>
                        </div>

                    </div>
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹40,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Traditional South Indian</h2>
                                <p>Rich cultural elements with banana leaves and temple-inspired decor</p>
                            </div>
                        </div>

                    </div>
                    <div class="theme-card">
                        <div className="theme-img"></div>
                        <div className="theme-price">From ₹45,000</div>
                        <div className="theme-overlay">
                            <div className="theme-info">
                                <h2>Modern Glamour</h2>
                                <p>Contemporary design with metallic accents and LED lighting</p>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            {/* press section */}

            <section class="blog-section" id='press'>
                <h2 class="section-title">Press & Media Coverage</h2>

                <div class="blog-container">

                    <div className="press-card">
                        <div className="press-source">The Hindu - Madurai Edition</div>
                        <h3 className='press-title'>"JFA Lucky Palace: Setting New Standards in Wedding Venues"</h3>
                        <p className='press-excerpt'>"The venue has revolutionized wedding celebrations in Madurai with its state-of-the-art facilities and exceptional service quality, making it the preferred choice for discerning families."</p>
                        <div className="press-date">Published: November 15, 2024</div>
                    </div>

                    <div className="press-card">
                        <div className="press-source">Dinamalar</div>
                        <h3 className='press-title'>"மதுரையின் சிறந்த திருமண மண்டபம்"</h3>
                        <p className='press-excerpt'>JFA Lucky Palace has become the talk of the town for its magnificent architecture and world-class amenities, hosting some of the most memorable celebrations in the region.</p>
                        <div className="press-date">Published: October 28, 2024</div>
                    </div>

                    <div className="press-card">
                        <div className="press-source">Wedding Sutra Magazine</div>
                        <h3 className='press-title'>"Top 10 Wedding Venues in Tamil Nadu"</h3>
                        <p className='press-excerpt'>Featured among the elite wedding destinations, JFA Lucky Palace stands out for its perfect blend of traditional charm and modern luxury, offering couples their dream wedding experience.</p>
                        <div className="press-date">Published: September 20, 2024</div>
                    </div>

                    <div className="press-card">
                        <div className="press-source">Event Management Today</div>
                        <h3 className='press-title'>"Innovation in Event Spaces: A Case Study"</h3>
                        <p className='press-excerpt'>The venue's innovative approach to space utilization and customer service has set new benchmarks in the industry, earning recognition from event management professionals.</p>
                        <div className="press-date">Published: August 12, 2024</div>
                    </div>

                    <div className="press-card">
                        <div className="press-source">Madurai Mirror</div>
                        <h3 className='press-title'>"Local Business Excellence Award Winner"</h3>
                        <p className='press-excerpt'>Recognized for outstanding contribution to the local economy and tourism sector, JFA Lucky Palace continues to attract visitors from across South India.</p>
                        <div className="press-date">Published: July 5, 2024</div>
                    </div>

                    <div className="press-card">
                        <div className="press-source">Venue Today</div>
                        <h3 className='press-title'>"Sustainable Event Practices in Modern Venues"</h3>
                        <p className='press-excerpt'>Highlighting the venue's commitment to environmental responsibility while maintaining luxury standards, setting an example for the industry.</p>
                        <div className="press-date">Published: June 18, 2024</div>
                    </div>




                </div>
            </section>


            {/* awards section  */}

            <div className="award-section" id='booknow'>

                <div className="award-container">
                    <h2 style={{ color: "#ffd700", marginBottom: "20px" }}>Awards & Recognition</h2>
                    <p style={{ opacity: "0.9", marginBottom: "40px" }}>Celebrating excellence in hospitality and event management</p>
                    <div className="awards-grid">


                        <div className="award-item">
                            <div className="award-icon">
                                <FaTrophy />
                            </div>
                            <div className="award-title">
                                Best Wedding Venue
                            </div>
                            <div className="award-year">
                                Tamil Nadu - 2024
                            </div>
                        </div>

                        <div className="award-item">
                            <div className="award-icon">
                                <FaStar />
                            </div>
                            <div className="award-title">
                                Excellence in Service
                            </div>
                            <div className="award-year">
                                Madurai Chamber - 2024
                            </div>
                        </div>

                        <div className="award-item">
                            <div className="award-icon">
                                <FaMedal />
                            </div>
                            <div className="award-title">
                                Customer Choice Award
                            </div>
                            <div className="award-year">
                                Event Industry - 2023
                            </div>
                        </div>

                        <div className="award-item">
                            <div className="award-icon">
                                <FaCrown />
                            </div>
                            <div className="award-title">
                                Premium Venue Status
                            </div>
                            <div className="award-year">
                                Hospitality Board - 2023
                            </div>
                        </div>
                    </div>



                </div>
            </div>





        </div >


    )
}

export default Package