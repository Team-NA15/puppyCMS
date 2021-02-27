// General Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

// Styles and Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Dashboard from './pages/Dashboard/dashboard';
import Appointment from './pages/Appointments/appointments';
import AddDog from './pages/AddDog/addDog';
import AddAppointment from './pages/AddAppointment/addAppointment'
import './index.scss'

const App = () => {
    return (
        <Router>
            <Navigation />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/appointments" component={Appointment} />
                    <Route path="/addappointment" component={AddAppointment} />
                    <Route path="/add" component={AddDog} />
                </Switch>

        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));