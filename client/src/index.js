// General Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
//Redux Imports 
import createStore from './reducers';
import { Provider } from 'react-redux';  

// Styles and Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Appointment, ProtectedRoute} from './components/components';
import { Login, AddAppointment, AppointmentsPage, Dashboard, AddDog} from './pages/pages'
import './index.scss'

const App = () => {
    // authenticate users and grab object.
    const { store } = createStore();  
    return (
        <Provider store = {store}> 
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" component={Login} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/appointments" component={AppointmentsPage} />
                <ProtectedRoute path="/addappointment" component={AddAppointment} />
                <ProtectedRoute path="/add" component={AddDog} />
            </Switch>
        </Router>
        </Provider> 
    )
}
ReactDOM.render(<App />, document.getElementById('root'));