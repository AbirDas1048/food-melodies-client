import React, { useContext } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UpdateReview = () => {

    const { user } = useContext(AuthContext);

    const data = useLoaderData();
    //console.log(data);

    return (
        <Container className='my-3 text-center'>
            <h2>Update Review of {data?.serviceName}</h2>
            <Row sm={8} className="justify-content-md-center">
                <Col>
                    {/* <Form onSubmit={handleAddReview}> */}
                    <Form>

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

                        <Button type='submit' variant='success'>Update</Button>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default UpdateReview;