import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import Appointment  from '../../components/AppointmentBlock/appointment';
import DogInfoCard from '../../components/Dogs/dogInfoCard';  
import './appointments.scss'; 
import Actions from '../../reducers/reducers'; 

const AppointmentHistory = () => {
    const dispatch = useDispatch(); 
    const session = useSelector(state => state.session); 
    const [search, setSearch] = useState(''); 
    const [dogList, setDogList] = useState([]); 
    const [apptHistory, setApptHistory] = useState([]); 
    const [searchDogs, setSearchDogs] = useState(false); 
    const [searchAppts, setSearchAppts] = useState(false); 

    const searchHandler = e => setSearch(e.target.value); 

    const executeDogSearch = e => {
        e.preventDefault(); 
        dispatch(Actions.actionSearchDogsRequest(search))
        setSearchAppts(false); 
        setSearchDogs(true); 
    }

    const showDogList = () => ( <div> {dogList.map(dog => <DogInfoCard {...dog} clickAction = {() => onDogClick(dog)} /> ) } </div> ); 

    const onDogClick = dog => {
        dispatch(Actions.actionAppointmentHistoryRequest(dog));
        setSearchDogs(false); 
        setSearchAppts(true); 
    } 
    
    const showApptHistory = () => {
        if (apptHistory.length < 1) return ('No appointments for this dog'); 
        else return ( <div> {apptHistory.map(appt => <Appointment disableCheckInOut = {true} 
            {...appt} /> ) } </div> );
    } 



    useEffect(() => {
        setDogList(session.searchDogsList); 
    },[session.searchDogsList])

    useEffect(() => {
        setApptHistory(session.appointmentHistory); 
    },[session.appointmentHistory])

    return (
        <section className="main mt-3 mb-4">
            <Container>
                <h2 className = 'display-4'> Appointment History </h2> 
                <Row> 
                    <Col> 
                        <Card bg = 'transparent'  > 
                            <Card.Header as = 'h4'> Dog Search </Card.Header>
                            <Card.Body> 
                                <Form onSubmit = {executeDogSearch}> 
                                    <Card.Title as = 'h5'> Enter a dog's name to retrieve their appointment history </Card.Title>
                                    <Form.Group> 
                                        <Form.Control name = 'search' placeholder = "Enter dog's name" defaultValue = ''
                                            onChange = {searchHandler} /> 
                                    </Form.Group>
                                    <Button variant = 'primary' type = 'submit' onClick = {executeDogSearch}> Search </Button> 
                                </Form>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col> 
                        { searchDogs ? showDogList() : ''}
                        { searchAppts ? showApptHistory() : ''}
                    </Col> 
                </Row> 
            </Container>
        </section>
    )
}
export default AppointmentHistory;
