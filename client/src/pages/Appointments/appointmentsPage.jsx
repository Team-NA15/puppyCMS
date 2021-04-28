import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import Appointment  from '../../components/AppointmentBlock/appointment'; 
import './appointments.scss'
import Actions from '../../reducers/reducers'; 

const AppointmentPage = () => {
    const dispatch = useDispatch(); 
    const searchDogList = useSelector(state => state.session.searchDogList); 
    const [search, setSearch] = useState(''); 
    const [dogList, setDogList] = useState(searchDogList); 
    const [apptHistory, setApptHistory] = useState([]); 
    const [searchDogs, setSearchDogs] = useState(false); 
    const [searchAppts, setSearchingAppts] = useState(false); 

    const searchHandler = e => setSearch(e.target.value); 

    const executeDogSearch = e => {
        e.preventDefault(); 
        dispatch(Actions.actionSearchDogsRequest(search))
    }

    const showDogList = () => (
        dogList.map(dog => {
            return (
                <Card> 
                    <Card.Title> {dog.dog_name} </Card.Title>
                    <Card.Body> 
                        <p> owner first name, owner last name </p> 
                        <p> Breed, color, gender </p> 
                    </Card.Body>
                </Card>  
            )
        })
    )

    const showApptHistory = () => (
        apptHistory.map(appt => {
            return (
                <Appointment {...appt} /> 
            )
        })
    )

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
                                        {/* <Form.Label> Enter a dog's name to retrieve their appointment history </Form.Label>  */}
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
export default AppointmentPage;
