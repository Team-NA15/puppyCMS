import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { ButtonGroup, InputGroup, Button, Container, Form, CardDeck } from 'react-bootstrap';
import { Appointment } from '../../components/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss';
import Actions from '../../reducers/reducers'; 


function date() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format();
}

const Dashboard = (prop) => {
    const dispatch = useDispatch(); 
    const session = useSelector(state => state.session); 
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [filteredList, setFilteredList] = useState([])

    //const card = <Appointment name={dog.name} type={dog.type} checkin={dog.checkin} dropoff={dog.dropoff} pickup={dog.pickup} />

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchText(evt.target.value)
    } 
    const handleChange = (evt) => {
        setSearchText(evt.target.value)
    }

    useEffect(() => {
        filterApts(filterBy);

    }, [filterBy, setFilterBy]); 

    useEffect(() => {
        console.log("Filtered List: " + filteredList)
    }, [filteredList, setFilteredList]); 

    useEffect(() => {
        filterApts(filterBy); 
    },[session.todaysAppointments]); 


    const filterApts = (filterKey) => {
        let filteredList;
        if (filterBy == 'B') filteredList = session.todaysAppointments.filter(appt => appt.service == 'Boarding'); 
        else if (filterBy == 'D') filteredList = session.todaysAppointments.filter(appt => appt.service == 'Daycare'); 
        else if (filterBy == 'G') filteredList = session.todaysAppointments.filter(appt => appt.service == 'Grooming'); 
        else filteredList = session.todaysAppointments; 
        setFilteredList(filteredList); 
    }


    return (
        <section className="main mt-3 mb-4">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control value={searchText} size="lg" onChange={handleChange} type="text" placeholder="Find a Dog" id="searchbox" />
                        <InputGroup.Append>
                            <Button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                

                <h2 className="display-4 mt-3">{date()}</h2>
 
                
                <ButtonGroup size="lg">
                    <Button className="boarding" onClick={() => setFilterBy('B')}>B</Button>
                    <Button className="daycare" onClick={() => setFilterBy('D')}>D</Button>
                    <Button className="grooming" onClick={() => setFilterBy('G')}>G</Button>
                    <Button className="clear" variant="secondary" onClick={() => setFilterBy('')}> Clear</Button>
                </ButtonGroup> 

                    {
                         filteredList ? filteredList.map(appt => {
                            return <Appointment name = {appt.dog_name} type = {appt.service} arrival = {appt.arrival_date} 
                            departure = {appt.depart_date} cubby = {appt.cubby} />  
                        }) : ''
                    }
               
            </Container>
        </section>
    )
}
export default Dashboard;