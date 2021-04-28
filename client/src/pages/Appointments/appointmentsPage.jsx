import React, {useEffect, useState} from 'react';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Appointment } from '../../components/components'
import './appointments.scss'

const AppointmentPage = () => {
    const [apptHistory, setApptHistory] = useState([]); 

    return (
        <section className="main mt-3 mb-4">
            <Container>
                <h2 className = 'display-4'> Appointment History </h2> 
                <Row> 
                    <Col> 
                        <Card bg = 'light' border = 'secondary' > 
                            <Card.Header as = 'h4'> Dog Search </Card.Header>
                            <Card.Body> 
                                <Form> 
                                    <Card.Title as = 'h5'> Enter a dog's name to retrieve their appointment history </Card.Title>
                                    <Form.Group> 
                                        {/* <Form.Label> Enter a dog's name to retrieve their appointment history </Form.Label>  */}
                                        <Form.Control name = 'search' placeholder = "Enter dog's name" defaultValue = ''/> 
                                    </Form.Group>
                                    <Button variant = 'primary' > Search </Button> 
                                </Form>
                            </Card.Body>
                        </Card> 
                        <Card bg = 'light' border = 'secondary'> 
                            <Card.Header as = 'h4'> Dogs </Card.Header>
                            <Card.Body> 
                                Dog's found
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col> 
                        {/* <h2> Appointments </h2>  */}
                    </Col> 
                </Row> 
            </Container>
        </section>
    )
}
export default AppointmentPage;
