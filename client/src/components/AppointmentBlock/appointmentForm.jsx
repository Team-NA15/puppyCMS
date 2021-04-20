import React, {useState, useEffect } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';  

const AppointmentForm = props => {
    const appt = {
        dog_name: props.dog_name || "", 
        owner_first_name: props.owner_first_name || "", 
        owner_last_name: props.owner_last_name || "", 
        breed: props.breed || "", 
        service: props.service || "", 
        arrival_date: props.arrival_date || "", 
        depart_date: props.depart_date || "", 
        breakfast: props.breakfast || false, 
        breakfast_quant: props.breakfast_quant || "", 
        lunch: props.lunch || false,
        lunch_quant: props.lunch_quant || "", 
        dinner: props.dinner || false, 
        dinner_quant: props.dinner_quant || "", 
        morn_meds: props.morn_meds || false, 
        morn_meds_dir: props.morn_meds_dir || "", 
        noon_meds: props.noon_meds || false, 
        noon_meds_dir: props.noon_meds_dir || "", 
        dinner_meds: props.dinner_meds || false, 
        dinner_meds_dir: props.dinner_meds_dir || "", 
        belongings: props.belongings || "",  
    }
    const [dogName, setDogName] = useState(appt.dog_name);
    const [ownerFirstName, setOwnerFirstName] = useState(appt.owner_first_name); 
    const [ownerLastName, setOwnerLastName] = useState(appt.owner_last_name);  
    const [breed, setBreed] = useState(appt.breed);
    const [service, setService] = useState(appt.service);  
    const [arrivalDate, setArrivalDate] = useState(appt.arrival_date); 
    const [departDate, setDepartDate] = useState(appt.depart_date); 
    

    return (
        <div>
            <Container> 
                <Form> 
                    <Form.Row> 
                        <Form.Group as = {Col} controlId="formDogsName"> 
                            <Form.Label> Dog's Name </Form.Label>
                            <Form.Control type = "text" placeholder = "Dro"  value = {dogName} onChange = {e => setDogName(e.target.value)}/>  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formOwnerFirstName"> 
                            <Form.Label> Owner First Name </Form.Label>
                            <Form.Control type = "text" placeholder = "John" value = {ownerFirstName} onChange = {e => setOwnerFirstName(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formOwnerLastName"> 
                            <Form.Label> Owner Last Name </Form.Label>
                            <Form.Control type = "text" placeholder = "Doe" value = {ownerLastName} onChange = {e => setOwnerLastName(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formBreed"> 
                            <Form.Label> Breed </Form.Label>
                            <Form.Control type = "text" placeholder = "German Shephard" value = {breed} onChange = {e => setBreed(e.target.value)} />  
                        </Form.Group> 
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as = {Col} controlId="formService"> 
                            <Form.Label> Service </Form.Label>
                            <Form.Control type = "text" placeholder = "Service"  value = {service} onChange = {e => setService(e.target.value)}/>  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formArrivalDate"> 
                            <Form.Label> Arrival Date </Form.Label>
                            <Form.Control type = "date" placeholder = "04/19/2021" value = {new Date(arrivalDate)} onChange = {e => setArrivalDate(e.target.value)} />  
                        </Form.Group> 
                        <Form.Group as = {Col} controlId="formDepartDate"> 
                            <Form.Label> Depart Date </Form.Label>
                            <Form.Control type = "date" placeholder = "04/24/2021" value = {departDate} onChange = {e => setDepartDate(e.target.value)} />  
                        </Form.Group> 
                    </Form.Row>
                </Form> 
            </Container>   
        </div> 
    )
}


export default AppointmentForm; 