import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Premium = () => {
    return (
       
        
        <section className='premium-section'>
            <div className="container">
                <h2 className="section-title" data-aos="fade-right" style={{color:"#ffd700"}}>Premium Amenities</h2>
                <div className="premium-container">

                    <div className="premium-card">
                        <h2 className="card-title">
                            Premium Facilities
                        </h2>
                        <ul>
                            <li>13 AC Rooms Available</li>
                            <li>15,000 Square Feet Capacity</li>
                            <li>50 Parking Spaces</li>
                            <li>Power Backup</li>
                            <li>240 Dining Capacity</li>
                            <li>Lift Access to Hall</li>
                            <li>Stage Available</li>
                        </ul>

                    </div>
                      
                     <div className="premium-card">
                        <h2 className="card-title">
                         Wedding Policies
                        </h2>
                        <ul>
                            <li>Flexible Cancellation Policy</li>
                            <li>50% Payment On Booking</li>
                            <li>50% Payment On Event Date</li>
                            <li>Decoration Services Available</li>
                            <li>Non-Veg Service Allowed</li>
                            <li>Sacred Fire Rituals Permitted</li>
                            <li>Professional Event Coordination</li>
                        </ul>

                    </div>

                     <div className="premium-card">
                        <h2 className="card-title">
                        Special Services
                        </h2>
                        <ul>
                            <li>Premium Wedding Venue</li>
                            <li>Time-Based Rental</li>
                            <li>Guest Accommodation</li>
                            <li>Multi-Cuisine Catering</li>
                            <li>Cooking Facilities Available</li>
                            <li>Climate Controlled Environment</li>
                            <li>Ground Level Access</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Premium