// General Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
//Redux Imports 
import createStore from './reducers';
import { Provider } from 'react-redux';  

// Styles and Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, ProtectedRoute} from './components/components';
import { Login, NewAppointment, AppointmentHistory, Dashboard, NewDog} from './pages/pages'
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
                <Route path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute path="/appointment-history" component={AppointmentHistory} />
                <ProtectedRoute path="/new-appointment" component={NewAppointment} />
                <ProtectedRoute path="/new-dog-form" component={NewDog} />
            </Switch>
        </Router>
        </PersistGate> 
        </Provider> 
    )
}
ReactDOM.render(<App />, document.getElementById('root'));