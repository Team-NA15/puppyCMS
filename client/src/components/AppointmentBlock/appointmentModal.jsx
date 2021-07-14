import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
import { Modal, Row, Col, Button } from 'react-bootstrap'; 
import AppointmentTable from './appointmentTable'; 
import AppointmentForm from './appointmentForm'; 
import Actions from '../../reducers/reducers'; 

const AppointmentModal = props => {
    const [update, setUpdate] = useState(props.update);
    const [isCheckIn, setIsCheckIn] = useState(props.isCheckIn); 
    const dispatch = useDispatch();
    // const {updateAppointmentSuccess, checkInWithAppointmentSuccess} = useSelector(state => state.session);  
    const { updateAppointmentSuccess, checkInWithAppointmentSuccess } = useSelector(state => state.appointments); 
    const handleUpdate = () => setUpdate(!update); 
    
    const handleExit = () => {
        setIsCheckIn(false); 
        setUpdate(false); 
        handleShowModal(); 
    }

    const handleShowModal = () => props.handleShowModal(); 
    

    return (
        <Modal size = 'xl' show = {props.show} onHide = {props.handleShowModal} centered = {true}> 
            <Modal.Header closeButton>
                <Modal.Title> {props.dog_name} </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                {!update ? <AppointmentTable {...props} /> : <AppointmentForm {...props} update = {update} 
                    checkIn = {isCheckIn} onExit = {isCheckIn ? handleExit : handleUpdate}/> }  
            </Modal.Body>
            <Modal.Footer> 
                <Button onClick = {props.handleShowModal}> Close </Button> 
                {!update ? <Button onClick = {handleUpdate}> Update </Button> : <Button onClick = {handleUpdate}> Back </Button> }
            </Modal.Footer>
        </Modal> 
    )
}

export default AppointmentModal; 