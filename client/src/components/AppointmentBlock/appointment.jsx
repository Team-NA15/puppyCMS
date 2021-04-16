
import bodyParser from 'body-parser';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import './appointment.scss';
import  AppointmentModal from './appointmentModal'; 

// const Appointment = ({dog_name, service, owner_last_name, cubby, arrival_date, depart_date, checked_in, ...prop}) => {
const Appointment = props => {
    const {dog_name, service, owner_last_name, cubby, arrival_date, depart_date, checked_in} = props; 
    let arrival = new Date(arrival_date); 
    let departure = new Date(depart_date);   
    const [showMore, setShowMore] = useState(false); 

    const handleShowMoreModal = () => {
        setShowMore(!showMore);   
    }

    return (
        <Card style={{ width: '50%'}}>
            <Card.Body>
                <Badge pill variant="info">
                    {cubby}
                </Badge>
                <Row>
                    <Col>
                        <Button className={service}> {service.charAt(0).toUpperCase()}</Button>
                        <Card.Text style = {{paddingLeft: '2rem'}}> {dog_name} </Card.Text>
                    </Col>                    
                </Row>       
                <Row>
                    <Col>
                        <Card.Text style = {{fontWeight: 'bold'}}> Dropoff: </Card.Text>
                        <Card.Text> {arrival.toDateString()} <br /> {arrival.toLocaleTimeString()} </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text style = {{fontWeight: 'bold'}}> Pickup: </Card.Text>
                        {
                            departure < arrival ? <Card.Text> No pickup date </Card.Text>: 
                            <Card.Text> {departure.toDateString()} <br /> {departure.toLocaleTimeString()} </Card.Text>
                        }
                    </Col>
                    <Col> 
                        <Button style = {{whiteSpace: 'nowrap'}}> {!checked_in ? 'Check In' : 'Check Out'} </Button> 
                    </Col>
                    <Col> 
                        <Button onClick = {handleShowMoreModal}> More </Button> 
                        <AppointmentModal {...props} show = {showMore} handleShowModal = {handleShowMoreModal}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Appointment;