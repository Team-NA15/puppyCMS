import React, { useEffect, useState } from 'react'; 
import { Modal, Row, Col, Button } from 'react-bootstrap'; 
import AppointmentTable from './appointmentTable'; 

const AppointmentModal = props => {
    const [update, setUpdate] = useState(false); 

    const handleUpdate = () => setUpdate(!update); 
    //TODO fix modal shifting background to the left due to scroll bar
    
    return (
        <Modal size = 'xl' show = {props.show} onHide = {props.handleShowModal} centered = {true}> 
            <Modal.Header closeButton>
                <Modal.Title> {props.dog_name} </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <AppointmentTable {...props} />  
            </Modal.Body>
            <Modal.Footer> 
                <Button onClick = {props.handleShowModal}> Close </Button> 
                <Button > Update </Button>
            </Modal.Footer>
        </Modal> 
    )
}

export default AppointmentModal; 