
import React from 'react';
import { ButtonGroup, Card, Button, Row, Col } from 'react-bootstrap';

const Appointment = ({name, type, dropoff, pickup, checkin, ...rest }) => {
    
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col className="filterIcon">
                        <Button className={type}>{type.charAt(0).toUpperCase()}</Button>
                    </Col>
                    <Col xs={6}>
                        <Card.Title>{name}</Card.Title> 
                    </Col>
                    <Col>
                        <Card.Subtitle>Dropoff:</Card.Subtitle>
                        <Card.Text>{dropoff}</Card.Text>
                    </Col>
                    <Col>
                        <Card.Subtitle>Pickup:</Card.Subtitle>
                        <Card.Text>{pickup}</Card.Text>
                    </Col>
                </Row>
                
                
                
            
            </Card.Body>
            <ButtonGroup>
                <Button variant="info">More Info</Button>
                <Button variant="success">Checkin</Button>
            </ButtonGroup>
        </Card>
    )
}

export default Appointment;