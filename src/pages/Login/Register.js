import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    useTitle('Register');

    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setRegistrationError('');
                form.reset();

                const currentUser = {
                    email: user.email
                }

                fetch('https://food-melodies-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('foodToken', data.token);
                        handleUpdateUserProfile(name, photoURL);
                        navigate(from, { replace: true })
                    })
            })
            .catch(e => {
                setRegistrationError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => setRegistrationError(error.message));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setRegistrationError('');
                const currentUser = {
                    email: user.email
                }
                fetch('https://food-melodies-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('foodToken', data.token);
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                setRegistrationError(error.message)
            })
    }


    return (
        <Container className='my-3 text-center'>
            <h2>Registration</h2>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Form onSubmit={handleSignUp}>
                        {/* <Form> */}

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Full Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='name' placeholder='Enter Full Name' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Photo URL
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='photoURL' placeholder='Photo URL' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='email' name='email' placeholder='Email' required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='password' name='password' placeholder='Password' required />
                            </Col>
                        </Form.Group>

                        <Form.Text className="text-danger">
                            {registrationError}
                        </Form.Text>
                        <br />

                        <Button variant="success" type="submit">
                            Register
                        </Button>
                        <p className='mt-1'>Or</p>
                        <Button className='mx-3' variant="outline-success" onClick={handleGoogleSignIn} > Login with Google</Button>

                        <p className='mt-3'>Already Have an Account <Link to='/login'>Login</Link></p>


                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;