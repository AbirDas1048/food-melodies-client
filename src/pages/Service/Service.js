import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';


const Service = () => {
    const service = useLoaderData();
    //console.log(service);
    return (
        <Container className='my-3'>
            {
                service ?
                    <>
                        <Row>
                            <Col>
                                <img src={service.image} alt="" className='img-fluid w-100' />
                                <h2>Name: {service.name}</h2>
                                <h5>Served with {service.subTitle}</h5>
                                <p>Details: {service.description}</p>
                                <p className='fw-bolder'>Price {service.price}TK</p>
                            </Col>
                            <Col>
                                <div className='text-center'>
                                    <NavLink to={`/addReview/${service._id}`}>
                                        <Button variant='success opacity-75'>Add Review</Button>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                    </>
                    :
                    <h3>Please go to <NavLink to='/services'>Services page</NavLink>, and select a specific service</h3>
            }

        </Container>
    );
};

export default Service;