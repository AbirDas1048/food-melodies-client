import React, { useContext, useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {

    useTitle('Update Review');

    const { user } = useContext(AuthContext);
    const [ratingError, setRatingError] = useState('');

    const data = useLoaderData();

    const navigate = useNavigate();
    //console.log(data);


    const handleUpdate = event => {
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

        const id = data._id;
        const reviewDes = form.reviewDes.value;
        const ratings = parseFloat(form.ratings.value);

        const updatedReview = {
            reviewDes,
            ratings
        }

        fetch(`https://food-melodies-server.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('foodToken')}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    form.reset();
                    toast.info('Review updated successfully');
                    navigate("/myReviews");
                    //alert("Review Updated successfully");
                }
            })
    }

    return (
        <Container className='my-3 text-center'>
            <h2>Update Review of {data?.serviceName}</h2>
            <Row sm={8} className="justify-content-md-center">
                <Col>
                    <Form onSubmit={handleUpdate}>
                        {/* <Form> */}

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='email' name='email' placeholder='Email' defaultValue={user.email} required readOnly />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Ratings (out of 5)
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' defaultValue={data.ratings} name='ratings' placeholder='Enter Ratings (out of 5)' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} name='reviewDes' defaultValue={data.reviewDes} placeholder='Enter Description' required />
                            </Col>
                        </Form.Group>

                        <Form.Text className="text-danger">
                            {ratingError}
                        </Form.Text>
                        <br />

                        <Button type='submit' variant='success'>Update</Button>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default UpdateReview;