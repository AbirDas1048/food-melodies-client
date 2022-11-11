import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from '../../chef_pic.png';

const About = () => {
    return (
        <Row className='align-items-center my-3'>
            <h4 className='text-center'>About Us</h4>

            <Col md={8}>
                <p className='p-5 bg-light fw-bold rounded'>
                    Food Melodies is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!
                </p>
            </Col>
            <Col md={4} className="text-center">
                <img alt="" src={pic} className="rounded me-2 img-fluid w-75" />
            </Col>
        </Row>
    );
};

export default About;