import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import image1 from '../../images/imageSlider1.jpg';
import image2 from '../../images/imageSlider2.jpg';
import image3 from '../../images/imageSlider3.jpg';

const Slider = () => {
    return (
        <Container>
            <Carousel className='my-3'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>

    );
};

export default Slider;