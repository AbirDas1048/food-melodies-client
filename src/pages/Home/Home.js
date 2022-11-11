import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';
import About from './About';
import ExtraService from './ExtraService';
import Slider from './Slider';

const Home = () => {
    const [services, setServices] = useState([]);
    const limit = 3;

    useEffect(() => {
        const uri = `http://localhost:5000/services?limit=${limit}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    //console.log(services);

    return (
        <Container>
            <Slider></Slider>

            <h2>New Services</h2>

            <Row xs={1} md={3} sm={2} className="g-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </Row>

            <div className='text-center my-3'>
                <NavLink to="/services">
                    <Button variant='dark'>All Services</Button>
                </NavLink>
            </div>

            <About></About>
            <ExtraService></ExtraService>
        </Container>
    );
};

export default Home;