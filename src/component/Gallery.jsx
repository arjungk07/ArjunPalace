import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import gallery1 from './../assets/image/gallery1.avif';
import gallery2 from './../assets/image/gallery2.jpg';
import gallery3 from './../assets/image/gallery3.jpg';
import gallery_left from './../assets/image/gallery_left.svg';
import gallery_right from './../assets/image/gallery_right.svg';


var gallery = [
    {
        id: 1,
        image: gallery1,
        title: 'Adorn Yourself with Artistry',
        description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: gallery2,
        title: 'Eternal Glow Necklace',
        description: 'A timeless piece that radiates elegance, this necklace captures the essence of grace with every delicate curve. Perfect for day or night, it adds a luminous touch to any outfit.',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: gallery3,
        title: 'Premium Golden Furniture',
        description: 'Luxurious golden furniture sets creating a royal atmosphere',
        link: 'https://i.postimg.cc/d0TY9gyQ/Start-your-love-from-here-BOOKINGS-OPEN-JFA-LUCKY-PALACE-MADURAI-1.jpg'
    }
]

const Gallery = () => {
    return (
        // <div>
        //     <h1 className='text-warning text-center ' data-aos="fade-right">Our Beautiful Gallery</h1>
        //     <Carousel className='gallery-caurosel mt-5'>
        //         {
        //             gallery.map(gallery => {
        //                 return (
        //                     <Carousel.Item key={gallery.id}>
        //                         <img src={gallery.image}  alt={gallery.id} />
        //                         <Carousel.Caption>
        //                             <h3>First slide label</h3>
        //                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //                         </Carousel.Caption>
        //                     </Carousel.Item>
        //                 )
        //             }
        //             )
        //         }

        //     </Carousel>

        // </div>

        // Gallery section
        <section className="gallery-section " >
            {/* container */}
            <div className="container">
                <h2 className='section-title' data-aos="fade-right">Our Beautiful Gallery</h2>
                <div className="gallery-container">
                    <button className='gallery-nav prev'><img src={gallery_left}></img>
                    </button>
                    <button className='gallery-nav next'><img src={gallery_right}></img></button>
                    <div className="gallery-wrapper">
                        <div className="gallery-track">
                            <div className="gallery-item"><img src='https://i.postimg.cc/c13yKmLN/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-2.jpg'></img></div>
                            <div className="gallery-item"><img src='https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg'></img></div>
                            <div className="gallery-item"><img src='https://i.postimg.cc/BQZpWSyw/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-3.jpg'></img></div>
                            <div className="gallery-item"><img src='https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg'></img></div>
                            <div className="gallery-item"><img src='https://i.postimg.cc/ZKGKXRsr/Book-now-a-palace-for-your-wedding-JFA-LUCKY-PALACE-Uthangudi-Madurai-Book-now-91-90097-50000-4.jpg'></img></div>

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