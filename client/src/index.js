// General Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

// Styles and Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './pages/Dashboard/dashboard';
import Appointment from './pages/Appointments/appointments';
import AddDog from './pages/AddDog/addDog';
import AddAppointment from './pages/AddAppointment/addAppointment'
import './index.scss'
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Container >
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/appointments" component={Appointment} />
                    <Route path="/addappointment" component={AddAppointment} />
                    <Route path="/add" component={AddDog} />
                </Switch>
            </Container>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));