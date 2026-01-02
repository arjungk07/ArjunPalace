import React from 'react'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";





import cake from '/src/assets/image/cake.png';
import baby from '/src/assets/image/baby.jpg';
import college from '/src/assets/image/college.jpg';


const Event = () => {


    const [Top, SetTop] = useState(false);
    const [Toggle, SetToggle] = useState(false);

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

        <div className="event-part" style={{ overflow: "hidden" }}>
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



            {/* navbar structure */}
            <div className="p-4 nav">
                <div className='event-header'>
                    <h3>Arjun Lucky Palace</h3>
                </div>

                <div className="link">
                    <Link to="/">Home</Link>
                    <a href='#weddings'>Weddings</a>
                    <a href="#Birthday">Birthdays</a>
                    <a href="#corporate">Corporate</a>
                    <a href="#college">College</a>
                </div>

                <div className="toggle" onClick={() => SetToggle(!Toggle)}><IoReorderThree /></div>

                {
                    Toggle &&
                    (
                        <div className="event-nav">
                            <div className="event-nav-container">
                                <div className="event-nav-grid">

                                    {/* if you navigate component in same pages use a href and give id for each section and one more not use Link and /route */}
                                    <a href="/" className="btn btn-primary event-nav-item">🏠 Home</a>
                                    <a href="#weddings" className="btn btn-primary event-nav-item">💍 Weddings</a>
                                    <a href="#birthday" className="btn btn-primary event-nav-item">🎉 Birthdays</a>
                                    <a href="#corporate" className="btn btn-primary event-nav-item">🏢 Corporate</a>
                                    <a href="#baby" className="btn btn-primary event-nav-item">🧒 Baby Showers</a>
                                    <a href="#college" className="btn btn-primary event-nav-item">🎓 College Functions</a>
                                    <a href="#religion" className="btn btn-primary event-nav-item">🕉 Religious Events</a>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>



            {/* hero content structure */}
            <div className='hero'>
                <div className="herocontent">
                    <h1>Premium Event Types</h1>
                    <p>Creating unforgettable moments for every celebration of life

                    </p>
                    <div className="hero-buttons">
                        <Link to="" className='btn btn-primary'>Explore Events</Link>
                        <Link to="" className='btn btn-secondary'> <FaWhatsapp style={{ fontSize: "1.2rem", transform: "translateY(-2px)" }} /> Book Now</Link>
                    </div>
                </div>






            </div>




            {/* event content structure */}

            <div className="event-nav">
                <div className="event-nav-container">
                    <div className="event-nav-grid">

                        {/* if you navigate component in same pages use a href and give id for each section and one more not use Link and /route */}
                        <a href="#weddings" className="btn btn-primary event-nav-item">💍 Weddings</a>
                        <a href="#birthday" className="btn btn-primary event-nav-item">🎉 Birthdays</a>
                        <a href="#corporate" className="btn btn-primary event-nav-item">🏢 Corporate</a>
                        <a href="#baby" className="btn btn-primary event-nav-item">🧒 Baby Showers</a>
                        <a href="#college" className="btn btn-primary event-nav-item">🎓 College Functions</a>
                        <a href="#religion" className="btn btn-primary event-nav-item">🕉 Religious Events</a>
                    </div>

                </div>
            </div>

            {/* event section content structure */}

            <section id="weddings" className='event-section pt-5'>
                <div className="event-container">
                    <div className="section-header">
                        <h2>💍 Weddings & Engagements</h2>
                        <p>Fairy-tale weddings with royal grandeur and timeless elegance</p>
                    </div>


                    <div className="event-content">
                        <div className="event-info">
                            <h3>Your Dream Wedding Awaits</h3>
                            <p>Transform your special day into a magical celebration at JFA Lucky Palace. Our 15,000 sq ft luxury venue provides the perfect backdrop for your wedding ceremony and reception.</p>

                            <ul className='event-features'>
                                <li>Grand mandap with traditional décor</li>
                                <li>Luxury bridal suite with vanity area</li>
                                <li>Professional wedding coordination</li>
                                <li>Multi-cuisine catering services</li>
                                <li>Photography & videography support</li>
                                <li>Guest accommodation (13 AC rooms)</li>
                                <li>Ample parking for 50+ vehicles</li>
                                <li>Sacred fire rituals permitted</li>
                            </ul>
                        </div>


                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>
                    </div>


                    {/* testimonials content structure */}


                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>Wedding Testimonials</h3>
                            <p>What our happy couples say about their dream weddings</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "JFA Lucky Palace made our wedding absolutely magical! The staff was incredible, the venue was stunning, and every detail was perfect. Our guests are still talking about it!"
                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">R&S</div>
                                    <div className="author-info">
                                        <h4>Raj & Sita</h4>
                                        <p>Wedding Couple</p>
                                    </div>

                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "JFA Lucky Palace made our wedding absolutely magical! The staff was incredible, the venue was stunning, and every detail was perfect. Our guests are still talking about it!"
                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">R&S</div>
                                    <div className="author-info">
                                        <h4>Arjun & Dharani</h4>
                                        <p>Wedding Couple</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* wedding content structure  */}


                    <div className="packages">
                        <div className="package-header">
                            <h3>Wedding Packages</h3>
                            <p>Choose the perfect package for your dream wedding</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Classic Wedding</h4>
                                    <div className='package-price'>₹2,50,000</div>
                                    <p className='package-period'>Per Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Hall rental for full day</li>
                                    <li>Basic decoration</li>
                                    <li>Standard catering (200 guests)</li>
                                    <li>5 AC rooms</li>
                                    <li>Parking facility</li>
                                    <li>Power backup</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>




                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Royal Wedding</h4>
                                    <div className='package-price'>₹4,50,000</div>
                                    <p className='package-period'>Per Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Luxury hall decoration</li>
                                    <li>Premium catering (300 guests)</li>
                                    <li>13 AC rooms included</li>
                                    <li>Professional coordination</li>
                                    <li>Photography support</li>
                                    <li>Bridal suite</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Destination Wedding</h4>
                                    <div className='package-price'>₹7,50,000</div>
                                    <p className='package-period'>2-3 Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Multi-day celebration</li>
                                    <li>All ceremonies included</li>
                                    <li>Luxury accommodation</li>
                                    <li>Complete event management</li>
                                    <li>Guest transportation</li>
                                    <li>Spa services</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >





            {/* Birthday party content structure */}
            <section id='birthday' className='event-section' style={{ background: "white" }}>
                <div className="event-container">
                    <div className="section-header">
                        <h2>🎉 Birthday Parties</h2>
                        <p>Celebrate life's special moments with joy and grandeur</p>
                    </div>
                    <div className="event-content">

                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src={cake} className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>


                        <div className="event-info">
                            <h3>Unforgettable Birthday Celebrations</h3>
                            <p>Make every birthday a memorable milestone with our spectacular celebration packages. From intimate family gatherings to grand milestone celebrations, we create the perfect atmosphere for your special day.</p>
                            <ul className='event-features'>
                                <li>Custom theme decorations</li>
                                <li>Professional entertainment & DJ</li>
                                <li>Multi-tier birthday cakes</li>
                                <li>Kids play area & activities</li>
                                <li>Cake Cutting</li>
                                <li>Photo booth with props</li>
                                <li>Balloon arrangements</li>
                                <li>Catering for all age groups</li>
                            </ul>
                        </div>



                    </div>


                    {/* birthday testmonials structure */}

                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>Birthday Testimonials</h3>
                            <p>Creating magical birthday memories for all ages</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "My daughter's 19th birthday was absolutely magical! The princess theme decoration was beyond our imagination. The kids had such a wonderful time!"
                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">A</div>
                                    <div className="author-info">
                                        <h4>Aanand</h4>
                                        <p>Father</p>
                                    </div>

                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Celebrated my 60th birthday here and it was perfect! The elegant setup, delicious food, and excellent service made it a day to remember forever."
                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">R</div>
                                    <div className="author-info">
                                        <h4>Ramesh</h4>
                                        <p>Birthday Celebrant</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* packages for birthday Parties */}


                    <div className="packages">
                        <div className="package-header">
                            <h3>Birthday Packages</h3>
                            <p>Perfect packages for every age and celebration style</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Kids Party</h4>
                                    <div className='package-price'>₹2,50,000</div>
                                    <p className='package-period'>4 hours</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Theme decoration</li>
                                    <li>Basic decoration</li>
                                    <li>Entertainment & games</li>
                                    <li>Kids menu catering</li>
                                    <li>Birthday cake</li>
                                    <li>Return gifts</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Grand Celebration</h4>
                                    <div className='package-price'>₹75,000</div>
                                    <p className='package-period'>Full Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Luxury decorations</li>
                                    <li>Live entertainment</li>
                                    <li>Premium catering</li>
                                    <li>Professional Photography</li>
                                    <li>DJ & sound system</li>
                                    <li>Special lighting</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Milestone Birthday</h4>
                                    <div className='package-price'>₹1,25,000</div>
                                    <p className='package-period'>Evening Event</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Elegant adult themes</li>
                                    <li>Premium bar service</li>
                                    <li>Gourmet catering</li>
                                    <li>Gourmet catering</li>
                                    <li>Live music</li>
                                    <li>Professional coordination</li>
                                    <li>Custom cake design</li>
                                    <li>Memory video creation</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >



            {/* corporate party content structure */}
            <section id='corporate' className='event-section' style={{ marginTop: "1rem", background: "#faf8f5" }}>
                <div className="event-container">
                    <div className="section-header">
                        <h2>🏢 Corporate Events</h2>
                        <p>Professional venues for conferences, seminars, and corporate celebrations</p>
                    </div>
                    <div className="event-content">




                        <div className="event-info">
                            <h3>Professional Corporate Solutions</h3>
                            <p>Host successful corporate events in our professional setting. From board meetings to annual celebrations, we provide the perfect environment for business success.</p>
                            <ul className='event-features'>
                                <li>Modern AV equipment & projection</li>
                                <li>High-speed Wi-Fi throughout</li>
                                <li>Professional lighting systems</li>
                                <li>Flexible seating arrangements</li>
                                <li>Business lunch & coffee service</li>
                                <li>Parking for corporate guests</li>
                                <li>Event coordination support</li>
                                <li>Climate-controlled environment</li>
                            </ul>
                        </div>

                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg" className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>


                    </div>


                    {/* birthday testmonials structure */}

                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>Corporate Testimonials</h3>
                            <p>Trusted by leading businesses for professional events</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Excellent venue for our annual conference. The professional setup and outstanding service impressed all our delegates. Will definitely book again!"
                                </div>
                                <div className="testimonials-author">
                                    <div className="author-avatar">S</div>
                                    <div className="author-info">
                                        <h4>Suresh</h4>
                                        <p>CEO, Tech Solutions</p>
                                    </div>

                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Perfect venue for our product launch. The technical support was exceptional and the catering was world-class. Highly professional service."
                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">P</div>
                                    <div className="author-info">
                                        <h4>Priya</h4>
                                        <p>Marketing Director</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* packages for birthday Parties */}


                    <div className="packages">
                        <div className="package-header">
                            <h3>Corporate Packages</h3>
                            <p>Professional packages tailored for business success</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Business Meeting</h4>
                                    <div className='package-price'>₹15,000</div>
                                    <p className='package-period'>Half Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Meeting room setup</li>
                                    <li>AV equipment</li>
                                    <li>Coffee & snacks</li>
                                    <li>Wi-Fi access</li>
                                    <li>Stationery provided</li>
                                    <li>Parking included</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Corporate Conference</h4>
                                    <div className='package-price'>₹85,000</div>
                                    <p className='package-period'>Full Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Main hall booking</li>
                                    <li>Professional AV setup</li>
                                    <li>Business lunch</li>
                                    <li>Tea/coffee breaks</li>
                                    <li>Event coordination</li>
                                    <li>Welcome reception</li>
                                    <li>Networking space</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Annual Celebration</h4>
                                    <div className='package-price'>₹2,25,000</div>
                                    <p className='package-period'>Evening Event</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Luxury event setup</li>
                                    <li>Gala dinner</li>
                                    <li>Entertainment program</li>
                                    <li>Award ceremony setup</li>
                                    <li>Professional photography</li>
                                    <li>Live streaming</li>
                                    <li>Guest accommodation</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >


            {/* 🧒 Baby Showers / Naming Ceremonies section */}

            <section id='baby' className='event-section' style={{ background: "white" }}>
                <div className="event-container">
                    <div className="section-header">
                        <h2>🧒 Baby Showers / Naming Ceremonies</h2>
                        <p>Celebrate new life with joy, tradition, and beautiful memories</p>
                    </div>
                    <div className="event-content">

                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src={baby} className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>


                        <div className="event-info">
                            <h3>Celebrating New Beginnings</h3>
                            <p>Welcome new life with our beautiful baby shower and naming ceremony packages. We create gentle, joyful celebrations that honor tradition while creating lasting memories for your growing family..</p>
                            <ul className='event-features'>
                                <li>Soft pastel theme decorations</li>
                                <li>Traditional cradle ceremony setup</li>
                                <li>Baby-friendly environment</li>
                                <li>Photography for precious moments</li>
                                <li>Family-style catering</li>
                                <li>Gift display arrangements</li>
                                <li>Blessing ceremony coordination</li>
                                <li>Memory book creation</li>
                            </ul>
                        </div>



                    </div>


                    {/*testimonials*/}

                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>New Parent Testimonials</h3>
                            <p>Creating beautiful memories for life's most precious moments</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Our baby shower was absolutely beautiful! The soft decorations and thoughtful arrangements made it perfect for our family celebration. Thank you for the memories!"                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">K</div>
                                    <div className="author-info">
                                        <h4>Kavitha</h4>
                                        <p>New Mother</p>
                                    </div>

                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "The naming ceremony was perfectly organized with beautiful traditional elements. Our elders were very happy with the arrangements. Excellent service!"                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">V</div>
                                    <div className="author-info">
                                        <h4>Vijay</h4>
                                        <p>Proud Father</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* packages*/}


                    <div className="packages">
                        <div className="package-header">
                            <h3>Baby Celebration Packages</h3>
                            <p>Gentle celebrations for life's most precious moments</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Baby Shower</h4>
                                    <div className='package-price'>₹35,000</div>
                                    <p className='package-period'>4 hours</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Pastel theme decoration</li>
                                    <li>Baby shower games</li>
                                    <li>Light refreshments</li>
                                    <li>Gift table setup</li>
                                    <li>Photography session</li>
                                    <li>Welcome drinks</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Naming Ceremony</h4>
                                    <div className='package-price'>₹65,000</div>
                                    <p className='package-period'>Half Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Traditional setup</li>
                                    <li>Priest coordination</li>
                                    <li>Family lunch</li>
                                    <li>Cradle decoration</li>
                                    <li>Live music arrangements</li>
                                    <li>Professional photography</li>
                                    <li>Memory book</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>First Birthday</h4>
                                    <div className='package-price'>₹45,000</div>
                                    <p className='package-period'>Half Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>First birthday themes</li>
                                    <li>Baby-safe decorations</li>
                                    <li>Family catering</li>
                                    <li>Milestone photography</li>
                                    <li>Birthday cake</li>
                                    <li>Entertainment for kids</li>
                                    <li>Return gifts</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >



            {/* college function section */}

            <section id='college' className='event-section' style={{ background: "#faf8f5" }}>
                <div className="event-container">
                    <div className="section-header">
                        <h2>🎓 College Functions</h2>
                        <p>Academic celebrations, graduations, and youth events</p>
                    </div>
                    <div className="event-content">




                        <div className="event-info">
                            <h3>Academic Milestone Celebrations</h3>
                            <p>Celebrate academic achievements and college milestones with our energetic and professional event solutions. From graduations to cultural programs, we create memorable experiences for students and faculty.</p>
                            <ul className='event-features'>
                                <li>Graduation ceremony staging</li>
                                <li>Modern sound & lighting systems</li>
                                <li>Youth-oriented catering</li>
                                <li>Cultural program arrangements</li>
                                <li>Award ceremony coordination</li>
                                <li>Student-friendly pricing</li>
                                <li>Interactive entertainment</li>
                                <li>Photography & videography</li>
                            </ul>
                        </div>


                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src={college} className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>





                    </div>


                    {/*testimonials*/}

                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>Student & Faculty Testimonials</h3>
                            <p>Creating memorable academic celebrations</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Our graduation ceremony was perfectly organized! The professional setup and attention to detail made our special day truly memorable. Excellent venue for academic events!"
                                    <div className="testimonials-author">
                                        <div className="author-avatar">A</div>
                                        <div className="author-info">
                                            <h4>Arjun</h4>
                                            <p>College Student</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "The annual college function was a great success! The sound system was excellent and the arrangements were perfect for our cultural programs. Highly recommended!"
                                    <div className="testimonials-author">
                                        <div className="author-avatar">D</div>
                                        <div className="author-info">
                                            <h4>Dharani</h4>
                                            <p>College Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* packages*/}


                    <div className="packages">
                        <div className="package-header">
                            <h3>College Event Packages</h3>
                            <p>Affordable packages designed for educational institutions</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Cultural Program</h4>
                                    <div className='package-price'>₹45,000</div>
                                    <p className='package-period'>Evening Event</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Photography</li>
                                    <li>Stage setup</li>
                                    <li>Sound & lighting</li>
                                    <li>Student catering</li>
                                    <li>Basic decoration</li>
                                    <li>MC coordination</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Graduation Ceremony</h4>
                                    <div className='package-price'>₹1,25,000</div>
                                    <p className='package-period'>Full Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Professional staging</li>
                                    <li>Academic procession setup</li>
                                    <li>Graduate lunch</li>
                                    <li>Photography & videography</li>
                                    <li>Diploma presentation area</li>
                                    <li>Guest seating arrangements</li>
                                    <li>Live streaming option</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Alumni Meet</h4>
                                    <div className='package-price'>₹85,000</div>
                                    <p className='package-period'>Evening</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Photo booth</li>
                                    <li>Networking areas</li>
                                    <li>Award presentations</li>
                                    <li>Memory lane displays</li>
                                    <li>Live entertainment</li>
                                    <li>Cocktail & dinner</li>
                                    <li>Reunion setup</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >



            {/* religious event section */}
            <section id='religion' className='event-section' style={{ background: "white" }}>
                <div className="event-container">
                    <div className="section-header">
                        <h2>🕉 Religious / Spiritual Events</h2>
                        <p>Sacred ceremonies and spiritual gatherings with reverence and tradition</p>
                    </div>
                    <div className="event-content">

                        <div className="event-gallery">
                            <div className="gallery-item">
                                <img src='https://i.postimg.cc/T165hNBR/cerm.png' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://i.postimg.cc/260WV7dM/gat.webp' className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src="https://i.postimg.cc/Vs20SvQ7/set.jpg" className='img-fluid img-fixed'></img>
                            </div>

                            <div className="gallery-item">
                                <img src='https://i.postimg.cc/k4jBsMpp/foo.jpg' className='img-fluid img-fixed'></img>
                            </div>
                        </div>


                        <div className="event-info">
                            <h3>Sacred Space for Divine Celebrations</h3>
                            <p>Honor your faith and traditions with our respectful and well-arranged religious ceremonies. We provide the perfect setting for spiritual gatherings, festivals, and sacred rituals with proper arrangements and reverent atmosphere.</p>
                            <ul className='event-features'>
                                <li>Sacred fire ritual arrangements</li>
                                <li>Multi-faith accommodation</li>
                                <li>Photography with respect</li>
                                <li>Seating for elderly & families</li>
                                <li>Prasadam distribution setup</li>
                                <li>Sound system for hymns & prayers</li>
                                <li>Priest coordination services</li>
                                <li>Traditional decoration setups</li>
                            </ul>
                        </div>



                    </div>


                    {/* birthday testmonials structure */}

                    <div className="testimonials">
                        <div className="testimonials-header ">
                            <h3>Community Testimonials</h3>
                            <p>Blessed celebrations that honor tradition and faith</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "The temple festival arrangements were perfect! Every detail was handled with respect and care. The spiritual atmosphere was maintained beautifully throughout.""                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">G</div>
                                    <div className="author-info">
                                        <h4>Gopal</h4>
                                        <p>Temple Committee</p>
                                    </div>

                                </div>
                            </div>

                            <div className="testimonials-card">
                                <div className="testimonials-rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>

                                <div className="testimonials-text">
                                    "Our family puja was conducted with utmost reverence. The arrangements were traditional and the staff was very respectful of our customs. Excellent service!"                                </div>

                                <div className="testimonials-author">
                                    <div className="author-avatar">L</div>
                                    <div className="author-info">
                                        <h4>Lakshmi</h4>
                                        <p>Temple Committee</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* packages for birthday Parties */}


                    <div className="packages">
                        <div className="package-header">
                            <h3>Religious Event Packages</h3>
                            <p>Reverent packages for sacred celebrations</p>
                        </div>

                        <div className="package-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Family Puja</h4>
                                    <div className='package-price'>₹25,000</div>
                                    <p className='package-period'>Half Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Family seating</li>
                                    <li>Prasadam service</li>
                                    <li>Sacred fire setup</li>
                                    <li>Puja materials arranged</li>
                                    <li>Priest coordination</li>
                                    <li>Traditional setup</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Temple Festival</h4>
                                    <div className='package-price'>₹1,75,000</div>
                                    <p className='package-period'>Full Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Crowd management</li>
                                    <li>Photography services</li>
                                    <li>Sound system</li>
                                    <li>Cultural programs</li>
                                    <li>Community feast</li>
                                    <li>Traditional decorations</li>
                                    <li>Multiple priest coordination</li>
                                    <li>Grand festival setup</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h4 className='package-name'>Spiritual Retreat</h4>
                                    <div className='package-price'>₹₹95,000</div>
                                    <p className='package-period'>Multi-Day</p>
                                </div>

                                <ul className='package-features'>
                                    <li>Meditation setup</li>
                                    <li>Spiritual talks arrangement</li>
                                    <li>Accommodation included</li>
                                    <li>Sattvic meals</li>
                                    <li>Yoga sessions</li>
                                    <li>Peaceful environment</li>
                                    <li>Guest speaker coordination</li>
                                </ul>

                                <div className='book-now'><Link to="">Book Now</Link></div>

                            </div>


                        </div>
                    </div>


                </div>
            </section >


            {/* set top button */}
            {
                Top &&
                (
                    <div className="top" onClick={handleTop}>
                        <div className="top-icon"><IoIosArrowUp /></div>
                    </div>
                )
            }

        </div >







    )
}

export default Event