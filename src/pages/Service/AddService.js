import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.service_name.value;
        const subTitle = form.short_title.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;

        const service = {
            name,
            subTitle,
            image,
            description,
            price
        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                // 'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Service added successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <Container className='my-3 text-center'>
            <h2>Add Service</h2>
            <Row sm={8} className="justify-content-md-center">
                <Col>
                    <Form onSubmit={handleAddService}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Service Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='service_name' placeholder='Enter Service Name' required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Short Title
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='short_title' placeholder='Short Title' required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Photo URL
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='image' placeholder='Photo URL' required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} name='description' placeholder='Enter Description' required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Price
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='price' placeholder='Enter Price' required/>
                            </Col>
                        </Form.Group>

                        <Button type='submit' variant='success'>Submit</Button>

                    </Form>
                </Col>
            </Row>
            
        </Container>
    );
};

export default AddService;