import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('');

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
                console.log(user);
                setRegistrationError('');
                form.reset();

                handleUpdateUserProfile(name, photoURL);
                //navigate(from, { replace: true });
            })
            .catch(e => {
                //console.error(e);
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
                console.log(user);
                //navigate(from, { replace: true });
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

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <p className='mt-1'>Or</p>
                            <Button className='mx-3' variant="outline-primary" onClick={handleGoogleSignIn} > Login with Google</Button>

                        <p className='mt-3'>Already Have an Account <Link to='/login'>Login</Link></p>

                        <Form.Text className="text-danger">
                            {registrationError}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;