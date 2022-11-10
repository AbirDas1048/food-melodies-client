import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const ServiceCard = ({service}) => {

    const desLength = service.description.length;
    let description = "";
    if(desLength > 100){
        description = service.description.substring(0, 100) + ' ...';
    }
    else{
        description = service.description;
    }

    return (
        <Col>
                    <Card className='h-100'>
                        <Card.Img variant="top" src={service.image}/>
                        <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div>
                            <span>Price: </span>
                            <span>{service.price}TK</span>
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