import React, { useEffect, useState } from 'react'; 
import { Modal, Row, Col } from 'react-bootstrap'; 

const AppointmentModal = props => {
    //TODO fix modal shifting background to the left due to scroll bar
    
    return (
        <Modal size = 'lg' show = {props.show} onHide = {props.handleShowModal}> 
            <Modal.Header> 
                {props.dog_name}
            </Modal.Header>
        </Modal> 
    )
}

export default AppointmentModal; 