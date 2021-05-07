import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { Nav, Navbar } from 'react-bootstrap'
import './navigation.scss'
import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCalendarCheck, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import Actions from '../../reducers/reducers'; 

const Navigation = () => {
    const dispatch = useDispatch(); 
    const session = useSelector(state => state.session); 
    const logout = () => { 
        dispatch(Actions.actionSignOutRequest());  
    }
    

    return (
        <Navbar className="navigation flex-column sticky-top" variant="dark" expand="lg">
            <Navbar.Brand>Playful Pups CMS</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav defaultActiveKey="/" className="flex-column" expand>
                <Nav.Link as={Link} to="/" eventKey="/">
                    <FontAwesomeIcon icon={faHome} size='3x' />
                    <p>Home</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/new-dog-form" eventKey="/newDogForm">
                    <FontAwesomeIcon icon={faPaw} size='3x' />
                    <p>New Dog</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/new-appointment" eventKey="/newAppointment">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    <p>New Appointment</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/appointment-history" eventKey="/appointmentHistory">
                    <FontAwesomeIcon icon={faCalendarCheck} size="3x"/>
                    <p>Appointment History</p>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>

            <div className="user">
                Hello, User! <Link onClick = {logout} to="/login">Logout?</Link>
            </div>
        </Navbar>
    )
}

export default Navigation;