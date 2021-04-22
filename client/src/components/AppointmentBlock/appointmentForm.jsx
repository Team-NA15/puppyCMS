import React, {useState, useEffect } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';   
import Actions from '../../reducers/reducers'; 

const AppointmentForm = props => {
    const apptData = {
        cubby: props.cubby || 0, 
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
        special_instructions: props.special_instructions || '', 
        belongings: props.belongings || "",  
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

    const handleUpdateMealMeds = e => {
        let {name, checked } = e.target; 
        handleSetApptProp({ target: { name, value: checked } }) 
    }


    const checkMealsMeds = {
        breakfast_quant: (value) => handleSetApptProp({ target: {name: 'breakfast', value } }), 
        lunch_quant: (value) => handleSetApptProp({ target: { name: 'lunch', value } }), 
        dinner_quant: (value) => handleSetApptProp({ target: { name: 'dinner', value } }), 
        morn_meds_dir: (value) => handleSetApptProp({ target: { name: 'morn_meds', value } }), 
        noon_meds_dir: (value) => handleSetApptProp({ target: { name: 'noon_meds', value } }), 
        dinner_meds_dir: (value) => handleSetApptProp({ target: { name: 'dinner_meds', value } })
    }

    const handleUpdateMealMedsInstructions = e => {
        handleSetApptProp(e); 
        const { name, value } = e.target; 
        let updateMealMedBoolean = checkMealsMeds[name]; 
        value.length > 0 ? updateMealMedBoolean(true) : updateMealMedBoolean(false) 
    }

    const submitAppointmentUpdate = () => {
        appt.arrival_date = new Date(arrivalDate + " " + arrivalTime).toISOString(); 
        appt.depart_date = new Date(departDate + " " + departTime).toISOString(); 
        dispatch(Actions.actionUpdateAppointment(
            {
                prevAppt: apptData, 
                updates: appt
            }
        ));  
    }

    const submitAppointmentCheckIn = () => {
        appt.arrival_date = new Date(arrivalDate + " " + arrivalTime).toISOString(); 
        appt.depart_date = new Date(departDate + " " + departTime).toISOString(); 
        dispatch(Actions.actionCheckInWithAppointmentRequest(appt)); 
    }

    const manageAppointmentSubmission = () => {
        if (props.checkIn) submitAppointmentCheckIn();  
        else submitAppointmentUpdate(); 
        props.onExit(); 
    }


    return (
        <div>
            <Container> 
                <Form> 
                    <Form.Row> 
                        <Form.Group as = {Col} controlId = 'formCubby'> 
                            <Form.Label> Cubby </Form.Label>
                            <Form.Control name = 'cubby' type = 'text' placeholder = '23' value = {appt.cubby} 
                                onChange = {e => handleSetApptProp(e)} required/> 
                        </Form.Group>
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
                            <Form.Control name = 'service' type = "text" placeholder = "Service"  value = {appt.service} 
                                onChange = {e => handleSetApptProp(e)}/>  
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
                        <Form.Group as = {Col} controlId = 'formBreakfastBoolean'> 
                            <Form.Check name = 'breakfast' defaultChecked = {appt.breakfast} checked = {appt.breakfast} label = 'Breakfast' 
                                onChange = {e => handleUpdateMealMeds(e)}/> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formBreakfastQuant'> 
                            <Form.Label> Breakfast Quantity </Form.Label>
                            <Form.Control name = 'breakfast_quant' type = 'text' value = {appt.breakfast_quant}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formLunchBoolean'> 
                            <Form.Check name = 'lunch' defaultChecked = {appt.lunch} checked = {appt.lunch} label = 'Lunch' 
                                onChange = {e => handleUpdateMealMeds(e)}/> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formLunchQuant'> 
                            <Form.Label> Lunch Quantity </Form.Label>
                            <Form.Control name = 'lunch_quant' type = 'text' value = {appt.lunch_quant}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formDinnerBoolean'> 
                            <Form.Check name = 'dinner' defaultChecked = {appt.dinner} checked = {appt.dinner} label = 'Dinner' 
                                onChange = {e => handleUpdateMealMeds(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formBreakfastQuant'> 
                            <Form.Label> Dinner Quantity </Form.Label>
                            <Form.Control name = 'dinner_quant' type = 'text' value = {appt.dinner_quant}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as = {Col} controlId = 'formMorningMeds'> 
                            <Form.Check name = 'morn_meds' defaultChecked = {appt.morn_meds} checked = {appt.morn_meds} label = 'Morning Meds' 
                                onChange = {e => handleUpdateMealMeds(e)}/> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formMornMedsDir'> 
                            <Form.Label> Morning Meds Directions </Form.Label>
                            <Form.Control name = 'morn_meds_dir' type = 'text' as = 'textarea' rows = {3}value = {appt.morn_meds_dir}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formNoonMeds'> 
                            <Form.Check name = 'noon_meds' defaultChecked = {appt.noon_meds} checked = {appt.noon_meds} label = 'Noon Meds' 
                                onChange = {e => handleUpdateMealMeds(e)}/> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formNoonMedsDir'> 
                            <Form.Label> Noon Meds Directions </Form.Label>
                            <Form.Control name = 'noon_meds_dir' type = 'text' as = 'textarea' rows = {3}value = {appt.noon_meds_dir}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formDinnerMeds'> 
                            <Form.Check name = 'dinner_meds' defaultChecked = {appt.dinner_meds} checked = {appt.dinner_meds} label = 'Dinner Meds' 
                                onChange = {e => handleUpdateMealMeds(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col} controlId = 'formDinnerMedsDir'> 
                            <Form.Label> Dinner Meds Directions </Form.Label>
                            <Form.Control name = 'dinner_meds_dir' type = 'text' as = 'textarea' rows = {3} value = {appt.dinner_meds_dir}
                                onChange = {e => handleUpdateMealMedsInstructions(e)} /> 
                        </Form.Group>
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as = {Col}> 
                            <Form.Label> Special Instructions </Form.Label>
                            <Form.Control name = 'special_instructions' type = 'text' as = 'textarea' rows = {4} value = {appt.special_instructions}
                                onChange = {e => handleSetApptProp(e)} /> 
                        </Form.Group>
                        <Form.Group as = {Col}> 
                            <Form.Label> Belongings</Form.Label>
                            <Form.Control name = 'belongings' type = 'text' as = 'textarea' rows = {4} value = {appt.belongings} 
                                onChange = {e => handleSetApptProp(e)} /> 
                        </Form.Group>
                    </Form.Row>
                    <Button onClick = {manageAppointmentSubmission}> Submit </Button>                
                    </Form> 
            </Container>   
        </div> 
    )
}


export default AppointmentForm; 