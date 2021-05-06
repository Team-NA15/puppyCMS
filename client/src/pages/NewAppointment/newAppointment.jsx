import React, { useEffect, useState } from 'react';
import { Container, Row, Col, FormControl, Button, InputGroup, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'; 
import Actions from '../../reducers/reducers'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faBone} from '@fortawesome/free-solid-svg-icons'
import TheForm from '../../components/AppointmentBlock/newAppointmentForm'
import BasicModal from '../../components/Generics/basicModal'
import DogInfoCard from '../../components/Dogs/dogInfoCard'; 
import './appointmentPage.scss'
import NewAppointmentForm from '../../components/AppointmentBlock/newAppointmentForm';


const FormBody = props => {
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [found, setFound] = useState(false); 
    const [existingDog, setExistingDog] = useState({}); 
    const dispatch = useDispatch(); 
    const session = useSelector(state => state.session);  


    const handleSearchTextChange = e => setSearchText(e.target.value); 

    const handleFound = () => setFound(!found); 

    const searchForDogs = e => {
        e.preventDefault(); 
        if (found) handleFound();     
        dispatch(Actions.actionSearchDogsRequest(searchText)); 
    }

    const generateAppointmentForm = dog => {  
        setExistingDog(dog); 
        handleFound();  
        return (
            <BasicModal show = {found} handleShowModal = {handleFound} title = 'New Appointment' 
                body = {<NewAppointmentForm {...dog} /> }/> 
        )
    }

    useEffect(() => {
        setResults(session.searchDogsList); 
    },[session.searchDogsList])

    return (
        <div> 
        <Form onSubmit = {searchForDogs}>
            <InputGroup>  
                <FormControl type="text" placeholder="Search for Dogs" value={searchText} onChange={handleSearchTextChange} aria-label="Dog Search Box" />
                <InputGroup.Append>
                    <Button>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
        <section id="results" className="m-3">
        {
            results && !found ? results.map(dog => {
                return <DogInfoCard 
                clickAction = {() => generateAppointmentForm(dog)} key = {dog.dog_name + dog.breed} {...dog} />  
            }) : ''
        }
        </section>
        <section className = 'm-3'> 
            {
                found ? <NewAppointmentForm {...existingDog} /> : ''
            }
        </section>
    </div> 
    )
}
const NewAppointment = () => {

    const [isExistingDog, setIsExistingDog] = useState(false);
    const [isNewDog, setIsNewDog] = useState(false);
    const [appointmentSuccess, setAppointmentSuccess] = useState(null); 
    const session = useSelector(state => state.session); 

    const handleNewDog = () => {
        setAppointmentSuccess(null); 
        setIsNewDog(!isNewDog)
    }

    const handleExistingDog = () => {
        setAppointmentSuccess(null); 
        setIsExistingDog(!isExistingDog);
    }

    const newAppointmentMessage = () => {
        if (appointmentSuccess){
            return (
                <div> 
                    <h3> Appointment Created Successfully! </h3> 
                </div>
            )
        }
        else {
            return (
                <div> 
                    <h3> Error Creating Appointment </h3> 
                </div> 
            )
        }
    }

    useEffect(() => { 
        //is not updated when already set to True, find way to get around this to update appointment success
        setAppointmentSuccess(session.newAppointmentSuccess); 
    },[session.newAppointmentSuccess, session.newAppointmentFetching])

    return ( 
        <section className="main mt-3">
            <Container>
                <h2 className="display-4">New Appointment</h2>

                <Router>
                    <div>
                        <section id="head">
                            <h3 className="display-5">Is the Dog:</h3>
                            <Row id="appointmentParent">
                                <Col>
                                    <Link className="option-apt" onClick={handleExistingDog} to="/new-appointment/existing-dog">
                                        <FontAwesomeIcon icon={faDog} size="7x" />
                                        <p className="mt-2">Existing Dog</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link className="option-apt" onClick={handleNewDog} to="/new-appointment/new-dog">
                                        <FontAwesomeIcon icon={faBone} size="7x" />
                                        <p className="mt-2" >New Dog</p>
                                    </Link>
                                </Col>
                            </Row>
                        </section>
                    
                        
                            
                            

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/new-appointment/existing-dog">
                                <BasicModal show={isExistingDog} handleShowModal={handleExistingDog} size="lg" title="Existing Dog" 
                                    body ={appointmentSuccess == true || appointmentSuccess == false ? 
                                        newAppointmentMessage() : <FormBody />} />
                            </Route>
                            <Route path="/new-appointment/new-dog">
                                <BasicModal show={isNewDog} handleShowModal={handleNewDog} size="lg" title="New Dog" 
                                    body={appointmentSuccess == true || appointmentSuccess == false ? 
                                        newAppointmentMessage() : <NewAppointmentForm newDog = {true} /> } />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </section>
     );
}
 
export default NewAppointment;