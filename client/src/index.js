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
import { Login, AddAppointment, AppointmentHistory, Dashboard, NewDog} from './pages/pages'
import './index.scss'
import { PersistGate } from 'redux-persist/integration/react'; 

const App = () => {
    // authenticate users and grab object.
    const { store, persister } = createStore();  
    return (
        <Provider store = {store}> 
        <PersistGate loading = {null} persistor = {persister}> 
        <Router>
            <Navigation />
            <Switch>
<<<<<<< HEAD
                <Route path="/" component={Login} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/appointments" component={AppointmentsPage} />
                <ProtectedRoute path="/addappointment" component={AddAppointment} />
                <ProtectedRoute path="/add" component={AddDog} />
=======
                <Route path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute path="/appointment-history" component={AppointmentHistory} />
                <ProtectedRoute path="/add-appointment" component={AddAppointment} />
                <ProtectedRoute path="/new-dog-form" component={NewDog} />
>>>>>>> 616d64701fc486fe8adcb014703aa86ead328878
            </Switch>
        </Router>
        </PersistGate> 
        </Provider> 
    )
}
ReactDOM.render(<App />, document.getElementById('root'));