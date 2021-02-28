import React from 'react'
import { Container, InputGroup } from 'react-boostrap'
import { Form } from 'react-bootstrap'

const Login = () => {
    return (
        <div className="login">
           <Container>
                <InputGroup>
                    <Form.Control type="text" />

                </InputGroup>   
            </Container> 
        </div>
    )
}

export default Login;