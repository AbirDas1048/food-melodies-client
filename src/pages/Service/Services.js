import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    //console.log(services);
    return (
        <Container className='my-3'>
            <h2 className='text-center my-3'>All Services</h2>
            <Row xs={1} md={3} sm={2} className="g-4">
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default Services;