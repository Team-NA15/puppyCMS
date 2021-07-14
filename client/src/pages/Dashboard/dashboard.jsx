import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { ButtonGroup, InputGroup, Button, Container, Form } from 'react-bootstrap';
import { Appointment } from '../../components/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss';
import Actions from '../../reducers/reducers'; 


function date() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format();
}

const Dashboard = (prop) => {
    const dispatch = useDispatch(); 
    // const session = useSelector(state => state.session); 
    const appointments = useSelector(state => state.appointments); 
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [filteredList, setFilteredList] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchFilter(); 
    } 
    const handleChange = (evt) => {
        setSearchText(evt.target.value)
    }

    const clearFilter = () => {
        setSearchText(''); 
        setFilterBy(''); 
        filterApts(filterBy); 
    } 

    useEffect(() => {
        filterApts(filterBy);
    }, [filterBy, setFilterBy]); 

    useEffect(() => {
        filterApts(filterBy); 
    },[appointments.todaysAppointments]); 


    const filterApts = (filterKey) => {
        let filteredList;
        if (filterBy == 'B') filteredList = appointments.todaysAppointments.filter(appt => appt.service == 'Boarding'); 
        else if (filterBy == 'D') filteredList = appointments.todaysAppointments.filter(appt => appt.service == 'Daycare'); 
        else if (filterBy == 'G') filteredList = appointments.todaysAppointments.filter(appt => appt.service == 'Grooming'); 
        else filteredList = appointments.todaysAppointments; 
        setFilteredList(filteredList); 
    }

    const searchFilter = () => {
        let filterNames = searchText.trim().split(' ').join('|') 
        let newList = []; 
        const list = appointments.todaysAppointments; 
        let regex = new RegExp(filterNames); 
        newList = newList.concat(list.filter(appt => regex.test(appt.dog_name.toLowerCase()) || regex.test(appt.owner_last_name.toLowerCase()))); 
        setFilteredList(newList); 
    }


    return (
        <section className="main mt-3 mb-4">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control value={searchText} size="lg" onChange={handleChange} type="text" placeholder="Find a Dog" id="searchbox" />
                        <InputGroup.Append> 
                            <Button variant = 'danger' type = 'button' onClick = {() => clearFilter()}> 
                                <FontAwesomeIcon icon ={faTimes} /> 
                            </Button>
                        </InputGroup.Append> 
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
                            return <Appointment {...appt} />  
                        }) : ''
                    }
               
            </Container>
        </section>
    )
}
export default Dashboard;