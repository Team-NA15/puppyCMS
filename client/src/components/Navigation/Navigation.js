import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './navigation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCalendarCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <Navbar className="navigation flex-column" variant="dark">
            <Navbar.Brand>puppyCMS</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">
                    <FontAwesomeIcon icon={faPaw} size='5x' />
                    <p>Add Dog</p>
                    
                </Nav.Link>
                <Nav.Link eventKey="/add" >
                    <FontAwesomeIcon icon={faPlus} size="5x"/>
                    <p>Add Appointment</p>
                </Nav.Link>
                <Nav.Link eventKey="/close">
                    <FontAwesomeIcon icon={faCalendarCheck} size="5x"/>
                    <p>All Appointments</p>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;