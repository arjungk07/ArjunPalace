import React from 'react'
// react icons
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";


const Calendar = () => {

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

    function handletop() {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth",
            }
        )
    }

    return (
        <section className='calendar-section section'>
            <div className="container">
                <h2 data-aos="fade-up">Events Calendar</h2>
                {/* calendar container */}
                <div className="calendar-container">
                    <div className="calendar-main" data-aos="fade-right">
                        <div className="calendar-header">
                            <button><FaAngleLeft /></button>
                            <div className="calendar-month">December 2025</div>
                            <button><FaAngleRight /></button>
                        </div>

                        {/* calendar gird like day buttons */}
                        <div className="calendar-grid">
                            {/* 7 days name  */}
                            <div className="calendar-day-header">Sun</div>
                            <div className="calendar-day-header">Mon</div>
                            <div className="calendar-day-header">Tue</div>
                            <div className="calendar-day-header">Wed</div>
                            <div className="calendar-day-header">Thu</div>
                            <div className="calendar-day-header">Fri</div>
                            <div className="calendar-day-header">Sat</div>

                            {/* date division */}
                            <div className="calendar-day">30</div>
                            <div className="calendar-day">1</div>
                            <div className="calendar-day">2</div>
                            <div className="calendar-day">3</div>
                            <div className="calendar-day">4</div>
                            <div className="calendar-day">5</div>
                            <div className="calendar-day">6</div>
                            <div className="calendar-day">7</div>
                            <div className="calendar-day">8</div>
                            <div className="calendar-day">9</div>
                            <div className="calendar-day">10</div>
                            <div className="calendar-day">11</div>
                            <div className="calendar-day">12</div>
                            <div className="calendar-day">13</div>
                            <div className="calendar-day">14</div>
                            <div className="calendar-day">15</div>
                            <div className="calendar-day">16</div>
                            <div className="calendar-day">17</div>
                            <div className="calendar-day">18</div>
                            <div className="calendar-day">19</div>
                            <div className="calendar-day">20</div>
                            <div className="calendar-day">21</div>
                            <div className="calendar-day">22</div>
                            <div className="calendar-day">23</div>
                            <div className="calendar-day">24</div>
                            <div className="calendar-day">25</div>
                            <div className="calendar-day">26</div>
                            <div className="calendar-day">27</div>
                            <div className="calendar-day">28</div>
                            <div className="calendar-day">29</div>
                            <div className="calendar-day">30</div>
                            <div className="calendar-day">31</div>
                            {/* <div className="calendar-day">1</div>
                            <div className="calendar-day">2</div>
                            <div className="calendar-day"></div> */}




                        </div>

                        {/* status bar about the calendar */}
                        <div className="calendar-legend">
                            <div className="legend-item">
                                <span style={{ color: "#ffd700" }}><FaCircle /></span>
                                <span>Today</span>
                            </div>
                            <div className="legend-item">
                                <span style={{ color: "#27ae60" }}><FaCircle /></span>
                                <span>Available</span>
                            </div>
                            <div className="legend-item">
                                <span style={{ color: "#e74c3c" }}><FaCircle /></span>
                                <span>Booked</span>
                            </div>
                        </div>


                    </div>


                    {/* calendar sidebar */}

                    <div className="calendar-sidebar" data-aos="fade-left">
                        <div className="upcoming-events">
                            <h3>📅 Booked Dates</h3>
                            <div className="date-grid">
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                                <div className='date-column'>26-10-2025</div>
                            </div>
                        </div>

                        {/* booking status */}
                        <div className="booking-info">
                            <h3>Booking Information</h3>
                            <p>Check real-time availability and book your perfect date</p>
                            <div className="booking-status">
                                <div className="status-item">
                                    <span className='status-no'>85%</span>
                                    <span className="status-label">Occupancy Rate</span>
                                </div>
                                <div className="status-item">
                                    <span className='status-no'>12</span>
                                    <span className="status-label">Available Days</span>
                                </div>
                            </div>
                            <a href="https://wa.me/919443138918" style={{ textDecoration: "none", color: "transparent" }}>
                                <button data-aos='fade-up' className='header-button' style={{ margin: "20px 0px" }}>Check Availability</button>
                            </a>
                        </div>
                    </div>



                </div>





            </div>
            {/* go top button  */}

            {
                Top &&
                (
                    <div className="top" onClick={handletop}>
                        <div className="top-icon">
                            <IoIosArrowUp />
                        </div>
                    </div>
                )
            }





        </section>
    )
}

export default Calendar