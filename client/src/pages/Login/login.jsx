import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section className="main w-50 m-auto">
            <Container>
                <h2 className="display-4">Login</h2>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="usernameGrid">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" />
                            <Form.Text>If you don't have an account, please get with your Manager/IT Support.</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="passwordGrid">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" />
                            <Link to="/forgot-password">Forget Your Password?</Link>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary">Login</Button>
                </Form>

            </Container>
        </section>
    )
}

export default Login;