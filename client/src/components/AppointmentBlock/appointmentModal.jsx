import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';  
import { Modal, Row, Col, Button } from 'react-bootstrap'; 
import AppointmentTable from './appointmentTable'; 
import AppointmentForm from './appointmentForm'; 
import Actions from '../../reducers/reducers'; 

const AppointmentModal = props => {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch(); 

    const handleUpdate = () => setUpdate(!update); 
    //TODO fix modal shifting background to the left due to scroll bar
    
    const updateAppointment = () => {
        dispatch(Actions.actionUpdateAppointment({
            prevAppt: props, 
            updates: {
                belongings: 'chevy with da buttafly doors', 
            }
        }))
    }

    return (
        <Modal size = 'xl' show = {props.show} onHide = {props.handleShowModal} centered = {true}> 
            <Modal.Header closeButton>
                <Modal.Title> {props.dog_name} </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                {!update ? <AppointmentTable {...props} /> : <AppointmentForm {...props} /> }  
            </Modal.Body>
            <Modal.Footer> 
                <Button onClick = {props.handleShowModal}> Close </Button> 
                <Button onClick = {handleUpdate}> Update </Button>
            </Modal.Footer>
        </Modal> 
    )
}

export default AppointmentModal; 