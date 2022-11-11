import React from 'react';
import { Col, Row } from 'react-bootstrap';
import deliveryPic from '../../images/delivey_pic.png';

const ExtraService = () => {
    return (
        <Row className='align-items-center my-3 justify-content-center'>
            <h4 className='text-center my-3'>Extra Service</h4>

            <Col md={4} className="p-5 bg-light fw-bold rounded text-center">
                <img src={deliveryPic} alt="delivery pic" className='w-75 img-fluid' />
                <p>
                    Fastest home delivery service with cash on payment system.
                </p>
            </Col>
        </Row>
    );
};

export default ExtraService;