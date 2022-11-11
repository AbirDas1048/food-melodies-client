import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {

    useTitle('Add Review');

    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const service = data.details;
    const navigate = useNavigate();
    const [ratingError, setRatingError] = useState('');
    //console.log(service);

    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;

        if (isNaN(form.ratings.value)) {
            setRatingError('Please enter only number in rating');
            return;
        }

        if (parseFloat(form.ratings.value) > 5) {
            setRatingError('Rating value not more than 5');
            return;
        }
        const serviceName = service?.name;
        const serviceId = service?._id;
        const userName = user?.displayName;
        const userPhotoURL = user?.photoURL;
        const userEmail = user?.email;
        const reviewDes = form.reviewDes.value;
        const ratings = parseFloat(form.ratings.value);

        const review = {
            serviceName,
            serviceId,
            userName,
            userPhotoURL,
            userEmail,
            reviewDes,
            ratings
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('foodToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Review added successfully');
                    navigate("/myReviews");

                }
            })
            .catch(er => console.error(er));
    }

    return (
        <Container className='my-3 text-center'>
            <h2>Add Review of {service?.name}</h2>
            <Row sm={8} className="justify-content-md-center">
                <Col>
                    <Form onSubmit={handleAddReview}>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='email' name='email' placeholder='Email' defaultValue={user?.email} required readOnly />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Ratings (out of 5)
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='ratings' placeholder='Enter Ratings (out of 5)' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} name='reviewDes' placeholder='Enter Description' required />
                            </Col>
                        </Form.Group>

                        <Form.Text className="text-danger">
                            {ratingError}
                        </Form.Text>
                        <br />

                        <Button type='submit' variant='success'>Submit</Button>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default AddReview;