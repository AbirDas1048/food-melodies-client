import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginError('');
                form.reset();
                navigate(from, {replace: true})

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
            .catch(error => setLoginError(error.message));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
            })
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

                        <Button type='submit' variant='success'>Login</Button>
                        <p className='mt-1'>Or</p>

                        <Button className='mx-3' variant="outline-primary" onClick={handleGoogleSignIn} > Login with Google</Button>
                        <Form.Text className="text-danger">
                            {loginError}
                        </Form.Text>

                        <p className='mt-3'>New to Food Melodies <Link to='/register'>Create a New Account</Link></p>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;