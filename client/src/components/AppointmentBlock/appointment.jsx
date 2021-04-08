
import React from 'react';
import { ButtonGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import './appointment.scss';
const Appointment = ({name, type, cubby, dropoff, pickup, checkin, ...rest }) => {
    
    return (
        <Card style={{ width: '50%'}}>
            <Card.Body>
                <Badge pill variant="info">
                    {cubby}
                </Badge>
                <Row>
                    <Col>
                        <Button className={type}>{type.charAt(0).toUpperCase()}</Button>
                    </Col>
                </Row>       
                <Row id="name">
                    <Card.Text>{name}</Card.Text>
                </Row>    
                <Row>
                    <Col>
                        <Card.Text>Dropoff: <br /> {dropoff}</Card.Text>
                        
                    </Col>
                    <Col>
                        <Card.Text>Pickup: <br /> {pickup}</Card.Text>
                        <Card.Text></Card.Text>
                    </Col>
                </Row>
                <Button>More</Button>
            </Card.Body>
        </Card>
    )
}

export default Appointment;