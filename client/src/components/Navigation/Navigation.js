import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './navigation.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCalendarCheck, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <Navbar className="navigation flex-column" variant="dark">
            <Navbar.Brand>puppyCMS</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link as={Link} to="/dashboard" eventKey="/dashboard">
                    <FontAwesomeIcon icon={faHome} size='3x' />
                    <p>Home</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/add" eventKey="/add">
                    <FontAwesomeIcon icon={faPaw} size='3x' />
                    <p>Add Dog</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/addappointment" eventKey="/addappointment">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    <p>Add Appointment</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/appointments" eventKey="/appointments">
                    <FontAwesomeIcon icon={faCalendarCheck} size="3x"/>
                    <p>All Appointments</p>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>

            <div className="user">
                Hello, User! <a href='#'>Logout?</a>
            </div>
        </Navbar>
    )
}

export default Navigation;