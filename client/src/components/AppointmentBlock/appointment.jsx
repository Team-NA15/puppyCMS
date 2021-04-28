import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { ButtonGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import './appointment.scss';
import  AppointmentModal from './appointmentModal'; 
import Actions from '../../reducers/reducers'; 
import BasicModal from '../../components/Generics/basicModal';

const Appointment = props => {
    const {dog_name, service, owner_last_name, cubby, arrival_date, depart_date, checked_in, checked_out} = props;    
    const [showMore, setShowMore] = useState(false);
    const [checkIn, setCheckIn] = useState(!checked_in);
    const [checkOut, setCheckOut] = useState(false); 
    const [appt, setAppt] = useState(props); 
      
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

    const checkOutHandler = () => setCheckOut(!checkOut); 

    const handleSetAppt = (name, value) => setAppt(prevAppt => ({...prevAppt, [name]: value})); 

    const confirmCheckOutEarly = () => { 
        if (Date.now() < departure.valueOf()) return `Your pick up date is ${departure.toLocaleDateString()}. Are you sure you want to check out?`;
        else return 'Are you ready to check out?'; 
    }

    const updateDepartDateCheckOutEarly = () => {
        const newDepart = new Date(Date.now()).toISOString(); 
        if (Date.now() < departure.valueOf()) setAppt(prevAppt => ({...prevAppt, depart_date: newDepart}))
        return Promise.resolve(); 
    }

    const submitCheckOut = async () => {  
        await updateDepartDateCheckOutEarly(); 
        dispatch(Actions.actionCheckOutAppointmentRequest(appt)); 
        checkOutHandler();  
    }


    return (
        <Card style={{ width: '100%'}}>
            <Card.Body>
                <Badge pill variant="info">
                    {cubby}
                </Badge>
                <Row>
                    <Col>
                        <Button className = {service} > {service.charAt(0).toUpperCase()}</Button>
                        <Card.Text style = {{paddingLeft: '2rem', fontWeight: 'bold'}}> {dog_name} {owner_last_name} </Card.Text>
                    </Col>                    
                </Row>       
                <Row>
                    <Col style = {{paddingLeft: '4rem', paddingTop: '1rem'}}>
                        <Row> 
                            <Card.Text style = {{fontWeight: 'bold'}}> Dropoff: </Card.Text>
                        </Row> 
                        <Row> 
                            <Card.Text> {arrival.toDateString()} <br /> {arrival.toLocaleTimeString()} </Card.Text>
                        </Row> 
                    </Col>
                    <Col style = {{paddingTop: '1rem'}}>
                        <Row> 
                            <Card.Text style = {{fontWeight: 'bold'}}> Pickup: </Card.Text>
                        </Row> 
                        <Row> 
                            {
                                departure < arrival ? <Card.Text> No pickup date </Card.Text>: 
                                <Card.Text> {departure.toDateString()} <br /> {departure.toLocaleTimeString()} </Card.Text>
                            }
                        </Row> 
                    </Col>
                    <Col style = {{paddingTop: '1rem'}}> 
                        {checked_out ? '' : <Button style = {{whiteSpace: 'nowrap'}} onClick = {checked_in ? checkOutHandler : checkInHandler}> 
                            {checked_in ? 'Check Out' : 'Check In'} </Button> }
                    </Col>
                    <Col style = {{paddingTop: '1rem'}}> 
                        {checked_in ? <Button onClick = {handleShowMoreModal}> More </Button> : ''} 
                        <AppointmentModal {...props} show = {showMore} handleShowModal = {handleShowMoreModal} isCheckIn = {checkIn} 
                            update = {checkIn} />
                        <BasicModal show = {checkOut} handleShowModal = {checkOutHandler} title = {'Confirm Check Out'} 
                            body = {confirmCheckOutEarly()} handleFailure = {checkOutHandler} failureText = {'No'} 
                            handleSuccess = {submitCheckOut} successText = {'Yes'} /> 
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Appointment;