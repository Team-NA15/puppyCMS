import React, { useState, useEffect } from 'react'; 
import { Modal, Container, Button } from 'react-bootstrap'; 


const BasicModal = ({show, handleShowModal, title, body, handleFailure, failureText, handleSuccess, successText, ...props}) => {

    const preventShift = () => {
        document.body.style.paddingRight = '0'; 
        document.body.style.overflow = 'scroll'; 
    }

    return (
        <Container> 
            <Modal onEntering = {preventShift} className = 'pr-0 overflow-auto' size = 'md' show = {show} onHide = {handleShowModal} centered = {true}> 
                <Modal.Header closeButton = {true}> 
                    <Modal.Title> {title} </Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                    {body}
                </Modal.Body>
                <Modal.Footer> 
                    {handleFailure !== undefined ? <Button onClick = {handleFailure}> {failureText} </Button> : ''}
                    {handleSuccess !== undefined ? <Button onClick = {handleSuccess}> {successText} </Button> : ''}
                </Modal.Footer>
            </Modal> 
        </Container> 
    )
}

export default BasicModal; 