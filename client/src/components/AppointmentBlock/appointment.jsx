
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { ButtonGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import './appointment.scss';
import  AppointmentModal from './appointmentModal'; 
import Actions from '../../reducers/reducers'; 

// const Appointment = ({dog_name, service, owner_last_name, cubby, arrival_date, depart_date, checked_in, ...prop}) => {
const Appointment = props => {
    const {dog_name, service, owner_last_name, cubby, arrival_date, depart_date, checked_in} = props;    
    const [showMore, setShowMore] = useState(false);
    const [checkIn, setCheckIn] = useState(!checked_in);  
    const dispatch = useDispatch();
    let arrival = new Date(arrival_date); 
    let departure = new Date(depart_date); 

    const handleShowMoreModal = () => {
        setShowMore(!showMore);   
    }

    const checkInHandler = () => {
        setCheckIn(!checkIn);
        handleShowMoreModal();  
    } 

    const checkOutHandler = () => {
        console.log('checking out'); 
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
                        <Button style = {{whiteSpace: 'nowrap'}} onClick = {checked_in ? checkOutHandler : checkInHandler}> 
                            {checked_in ? 'Check Out' : 'Check In'} </Button> 
                    </Col>
                    <Col> 
                        <Button onClick = {handleShowMoreModal}> More </Button> 
                        <AppointmentModal {...props} show = {showMore} handleShowModal = {handleShowMoreModal} isCheckIn = {checkIn} 
                            update = {true} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Appointment;