import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const ServiceCard = ({service}) => {



    
    return (
        <Col>
                    <Card className='h-100'>
                        <Card.Img variant="top" src={service.image}/>
                        <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <span>Ratings: </span>
                                <span>{service.ratings}</span>
                            </div>
                            <div>
                                <span>Price: </span>
                                <span>{service.price}TK</span>
                            </div>
                        </div>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                        <NavLink to={`/serviceDetails/${service._id}`}>
                            <Button variant='dark opacity-75'>Details</Button>
                        </NavLink>
                        </Card.Footer>
                    </Card>
                    </Col>
    );
};

export default ServiceCard;