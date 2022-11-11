import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from '../Reviews/Review';
import './Service.css';


const Service = () => {

    useTitle('Food Details & Review');
    const data = useLoaderData();
    const service = data.details;
    const reviews = data.reviews;
    //console.log(reviews);
    const { user } = useContext(AuthContext);
    //console.log(user);
    return (
        <Container className='my-3'>
            {
                service ?
                    <>
                        <Row>
                            <Col md={6} xs={12}>
                                <h2>{service.name}</h2>
                                <img src={service.image} alt="" className='img-fluid w-100' />
                                <p>Details: {service.description}</p>
                                <p className='fw-bolder'>Price {service.price}TK</p>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='text-center mb-3'>
                                    {
                                        user?.uid ?
                                            <NavLink to={`/addReview/${service._id}`}>
                                                <Button variant='success opacity-75'>Add Review</Button>
                                            </NavLink>
                                            :
                                            <p>Please <NavLink to="/login">Login</NavLink> in to add Review</p>
                                    }

                                </div>
                                {
                                    reviews.length > 0 ?
                                        <div className='overflow-scroll review-card'>
                                            {
                                                reviews.map(review => <Review key={review._id} review={review}></Review>)
                                            }
                                        </div>
                                        :
                                        <h5 className='text-center'>No Review</h5>
                                }
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