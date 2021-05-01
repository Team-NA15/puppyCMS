import React, {useState, useEffect } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';   
import Actions from '../../reducers/reducers'; 

const TheForm = props => {
    const apptData = {
        dog_name: props.dog_name || "", 
        owner_first_name: props.owner_first_name || "", 
        owner_last_name: props.owner_last_name || "", 
        breed: props.breed || "", 
        service: props.service || "", 
        arrival_date: props.arrival_date || "", 
        depart_date: props.depart_date || "", 
        special_instructions: props.special_instructions || '', 
    }
     
    const [appt, setAppt] = useState(apptData);    
    const [arrivalDate, setArrivalDate] = useState(appt.arrival_date.split('T')[0]); 
    const [arrivalTime, setArrivalTime] = useState(appt.arrival_date.split('T')[1]);  
    const [departDate, setDepartDate] = useState(appt.depart_date.split('T')[0]); 
    const [departTime, setDepartTime] = useState(appt.depart_date.split('T')[1]); 
    const dispatch = useDispatch();
    
    const handleSetApptProp = e => {
        const { name, value } = e.target; 
        setAppt(prevAppt => ({...prevAppt, [name]: value})); 
    }

    const submitAppointmentCheckIn = () => {
        appt.arrival_date = new Date(arrivalDate + " " + arrivalTime).toISOString(); 
        appt.depart_date = new Date(departDate + " " + departTime).toISOString(); 
        dispatch(Actions.actionCheckInWithAppointmentRequest(appt)); 
    }

 


    return (
        <div>
            <Container> 
                <Form> 
                    <Form.Row> 
                        <Form.Group as = {Col} controlId="formDogsName"> 
                            <Form.Label> Dog's Name </Form.Label>
                            <Form.Control name = 'dog_name' type = "text" placeholder = "Dro"  value = {appt.dog_name} 
                                onChange = {e => handleSetApptProp(e)} readOnly = {appt.dog_name ? true : false} required/>  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formOwnerFirstName"> 
                            <Form.Label> Owner First Name </Form.Label>
                            <Form.Control name = 'owner_first_name' type = "text" placeholder = "John" value = {appt.owner_first_name} 
                                onChange = {e => handleSetApptProp(e)} readOnly= {appt.owner_first_name ? true : false} required/>  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formOwnerLastName"> 
                            <Form.Label> Owner Last Name </Form.Label>
                            <Form.Control name = 'owner_last_name' type = "text" placeholder = "Doe" value = {appt.owner_last_name} 
                                onChange = {e => handleSetApptProp(e)} readOnly = {appt.owner_last_name ? true : false} required/>  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formBreed"> 
                            <Form.Label> Breed </Form.Label>
                            <Form.Control name = 'breed' type = "text" placeholder = "German Shephard" value = {appt.breed} 
                                onChange = {e => handleSetApptProp(e)} readOnly = {appt.breed ? true : false} required/>  
                        </Form.Group> 
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as = {Col} controlId="formService"> 
                            <Form.Label> Service </Form.Label>
                            <Form.Control as = 'select' name = 'service' type = "text" placeholder = "Service"  defaultValue = {appt.service || '...'} 
                                onChange = {e => handleSetApptProp(e)}>  
                                <option>Boarding</option> 
                                <option>Daycare</option> 
                                <option>Grooming</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formArrivalDate"> 
                            <Form.Label> Arrival Date </Form.Label>
                            <Form.Control name = 'arrival_date' type = "date" value = {arrivalDate} 
                                onChange = {e =>  setArrivalDate(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formDepartDate"> 
                            <Form.Label> Arrival Time </Form.Label>
                            <Form.Control name = 'arrival_time' type = "time"  value = {arrivalTime} 
                                onChange = {e => setArrivalTime(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formDepartDate"> 
                            <Form.Label> Depart Date </Form.Label>
                            <Form.Control name = 'depart_date' type = "date"  value = {departDate} 
                                onChange = {e => setDepartDate(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formDepartDate"> 
                            <Form.Label> Depart Time </Form.Label>
                            <Form.Control name = 'depart_time' type = "time"  value = {departTime} 
                                onChange = {e => setDepartTime(e.target.value)} />  
                        </Form.Group> 
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as = {Col}> 
                            <Form.Label> Special Instructions </Form.Label>
                            <Form.Control name = 'special_instructions' type = 'text' as = 'textarea' rows = {4} value = {appt.special_instructions}
                                onChange = {e => handleSetApptProp(e)} /> 
                        </Form.Group>
                    </Form.Row>
                    <Button> Submit </Button>                
                    </Form> 
            </Container>   
        </div> 
    )
}


export default TheForm; 