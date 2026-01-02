import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// import react icons


import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdHome } from "react-icons/md";


import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        // <div className='mt-4'>
        //     <div className='text-center'>
        //         <h2>Contact Us</h2>
        //         <h5>conect with us</h5>
        //     </div>

        //     <Form className='contact-form'>
        //         <Row className='d-flex flex-column gap-3 mx-3 flex-md-row'>
        //             <Col >
        //                 <Form.Control type='text' placeholder="Enter your Full Name" required />
        //             </Col>
        //             <Col>
        //                 <Form.Control type='email' placeholder="Enter your Email address" required />
        //             </Col>
        //             <Col>
        //                 <Form.Control type='tel' placeholder="Enter your Contact Number" required />
        //             </Col>
        //         </Row>
        //         <Row>
        //             <Col className='mt-4 col-8  mx-auto'>
        //                 <Form.Control as="textarea" placeholder="Enter your Message" />
        //             </Col>
        //         </Row>

        //         <div className='btn-holder mt-4 text-center'>
        //             <Button type='submit'>Submit</Button>
        //         </div>
        //     </Form>

        //      <div className='google-map my-5'>
        //         <iframe title='map' className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577316011!2d78.04042150095354!3d9.917826796702249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756992588122!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        //     </div>


        // </div>

        <section className='contact-section' id='contact'>
            <div className="container">
                <div className="d-flex justify-content-evenly my-2 my-md-4">
                    <div ><Link to="/"><MdHome style={{ fontSize: "35px", color:"#ffd700" }} /></Link></div>
                    <div >
                        <h2 style={{color:"#ffd700"}} className='fs-1 fs-md-10 text-center'>Connect With Us</h2>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        {/* first contact item */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaLocationDot />
                            </div>
                            <div className='contact-caption'>
                                <h2>Our Location</h2>
                                <p>X52C+JHB, Melur Main Rd, Muthia Nagar, Uthangudi, Tamil Nadu 625107</p>
                            </div>

                        </div>
                        {/* second contact item */}
                        <div className="contact-item">
                            <div className="contact-icon"><MdOutlineCall /></div>
                            <div className='contact-caption'>
                                <h2>Call Us</h2>
                                <p>+91 9443138918</p>
                                <p>+91 9443138918</p>
                                <p>+91 9443138918</p>
                            </div>

                        </div>
                        {/* third contact item */}
                        <div className="contact-item">
                            <div className="contact-icon"><FaWhatsapp /></div>
                            <div className='contact-caption'>
                                <h2>WhatsApp</h2>
                                <p>+91 9443138918</p>
                                <p>+91 9047038918</p>
                                <p>+91 9790502424</p>
                            </div>

                        </div>
                    </div>

                    <div className="map">
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577316011!2d78.04042150095354!3d9.917826796702249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756992588122!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>


            </div>
        </section>
    )
}

export default Contact