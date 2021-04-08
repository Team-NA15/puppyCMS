import React, {useEffect, useState} from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import Actions from '../../reducers/reducers'; 


const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 

    const emailHandler = e => {
        setEmail(e.target.value); 
    }
    const passwordHandler = e => {
        setPassword(e.target.value); 
    }

    const handleSubmit = e => {
        e.preventDefault();  
        dispatch(
            Actions.actionSignInRequest({
                email, 
                password
            })
        );
 
    }


    return (
        <section className="main w-50 m-auto">
            <Container>
                <h2 className="display-4">Login</h2>

                <Form onSubmit = {handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="usernameGrid">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control required name = 'email' type="email" onChange = {emailHandler} />
                            <Form.Text>If you don't have an account, please get with your Manager/IT Support.</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="passwordGrid">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control required name = 'password' type="password" onChange = {passwordHandler} />
                            <Link to="/forgot-password">Forget Your Password?</Link>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type= 'Submit' >Login</Button>
                </Form>

            </Container>
        </section>
    )
}

export default Login;