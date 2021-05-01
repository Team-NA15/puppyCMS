import React, { useState } from 'react';
import { Container, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faBone} from '@fortawesome/free-solid-svg-icons'
import TheForm from '../../components/AppointmentBlock/theForm'
import BasicModal from '../../components/Generics/basicModal'
import Appointment from '../../components/AppointmentBlock/appointment'
import './appointmentPage.scss'


const FormBody = () => {
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleChange = (evt) => {
        setSearchText(evt.target.value)
    }

    return (
        <>
            <InputGroup>  
                <FormControl type="text" placeholder="Search for Dogs" value={searchText} onChange={handleChange} aria-label="Dog Search Box" />
                <InputGroup.Append>
                    <Button>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <section id="results" className="m-3">
                {
                    results ? results.map(dog => {
                        return <Appointment {...dog} />  
                    }) : ''
                }
            </section>
        </>
    )
}
const AddAppointment = () => {

    const [isExistingDog, setIsExistingDog] = useState(false);
    const [isNewDog, setIsNewDog] = useState(false);

    const handleNewDog = () => {
        setIsNewDog(!isNewDog)
    }

    const handleExistingDog = () => {
        setIsExistingDog(!isExistingDog);
    }
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
                                    <Link className="option-apt" onClick={handleExistingDog} to="/existing">
                                        <FontAwesomeIcon icon={faDog} size="7x" />
                                        <p className="mt-2">Existing Dog</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link className="option-apt" onClick={handleNewDog} to="/scratchdog">
                                        <FontAwesomeIcon icon={faBone} size="7x" />
                                        <p className="mt-2" >New Dog</p>
                                    </Link>
                                </Col>
                            </Row>
                        </section>
                    
                        
                            
                            

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/existing">
                                <BasicModal show={isExistingDog} handleShowModal={handleExistingDog} size="lg" title="Existing Dog" body={<FormBody/>} />
                            </Route>
                            <Route path="/scratchdog">
                                <BasicModal show={isNewDog} handleShowModal={handleNewDog} size="lg" title="New Dog" body={<TheForm />} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </section>
     );
}
 
export default AddAppointment;