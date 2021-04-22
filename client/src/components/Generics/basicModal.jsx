import React, { useState, useEffect } from 'react'; 
import { Modal, Container, Button } from 'react-bootstrap'; 

const BasicModal = props => {

    return (
        <Container> 
            <Modal size = 'md' show = {props.show} onHide = {props.handleShowModal} centered = {true}> 
                <Modal.Header closeButton = {true}> 
                    <Modal.Title> {props.title} </Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    {props.body}
                </Modal.Body>
                <Modal.Footer> 
                    <Button onClick = {props.handleFailure}> {props.failureText} </Button> 
                    <Button onClick = {props.handleSuccess}> {props.successText} </Button> 
                </Modal.Footer>
            </Modal> 
        </Container> 
    )
}

export default BasicModal; 