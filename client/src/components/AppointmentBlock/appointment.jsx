
import React from 'react';
import { ButtonGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import './appointment.scss';
const Appointment = ({name, type, cubby, arrival, departure, checkedIn, ...rest }) => {
    arrival = new Date(arrival); 
    departure = new Date(departure); 
    
    return (
        <Card style={{ width: '50%'}}>
            <Card.Body>
                <Badge pill variant="info">
                    {cubby}
                </Badge>
                <Row>
                    <Col>
                        <Button className={type}> {type.charAt(0).toUpperCase()}</Button>
                        <Card.Text style = {{paddingLeft: '2rem'}}> {name} </Card.Text>
                    </Col>                    
                </Row>       
                <Row>
                    <Col>
                        <Card.Text style = {{fontWeight: 'bold'}}> Dropoff: </Card.Text>
                        <Card.Text> {arrival.toDateString()} <br /> {arrival.toLocaleTimeString()} </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text style = {{fontWeight: 'bold'}}> Pickup: </Card.Text>
                        <Card.Text> {departure.toDateString()} <br /> {departure.toLocaleTimeString()} </Card.Text>
                    </Col>
                    <Col> 
                        <Button style = {{whiteSpace: 'nowrap'}}> {checkedIn ? 'Check In' : 'Check Out'} </Button> 
                    </Col>
                    <Col> 
                        <Button> More </Button> 
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Appointment;