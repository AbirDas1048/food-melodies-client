import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // const currentUser = {
                //     email: user.email
                // }

                //console.log(currentUser);

                // get jwt token
                // fetch('http://localhost:5000/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('geniusToken', data.token);
                //     })
                //navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }
    return (
        <Container className='my-3 text-center'>
            <h2>Login</h2>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='email' name='email' placeholder='Enter Email' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='password' name='password' placeholder='Enter Password' required />
                            </Col>
                        </Form.Group>



                        <Button type='submit' variant='success'>Submit</Button>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;