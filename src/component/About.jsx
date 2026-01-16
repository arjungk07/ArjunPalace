import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <div >
            <Container>
                <Row className='d-flex flex-column flex-lg-row ' >

                    <h1 className='text-center section-title' data-aos="fade-right">About Our Palace</h1>

                    <Col className='about my-4'>
                        <h2 >Premium Wedding Venue in Othakadai</h2>
                        <p>JFA Lucky Palace is a magnificent wedding venue that combines traditional elegance with modern luxury. Our 15,000 square feet of beautifully designed space provides the perfect backdrop for your special day.</p>

                        <p> With 13 AC rooms, ample parking, and state-of-the-art facilities, we ensure your guests enjoy every moment of your celebration in complete comfort.</p>

                        <p> Our dedicated team of professionals works tirelessly to transform your wedding dreams into reality, creating magical moments that will be cherished forever.</p>

                    </Col>

                    <Col className='align-self-center about-img'>
                        <img src='https://i.postimg.cc/DzQ3MvBS/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000.jpg' className='w-100 rounded overflow-hidden' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About