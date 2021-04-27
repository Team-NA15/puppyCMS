import React, {useEffect, useState } from 'react'; 
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const DogInfoForm = ({submitForm, resetForm = true, ...props}) => {
    const dogData = {
        dog_name: props.dog_name || '', 
        owner_first_name: props.owner_first_name || '', 
        owner_last_name: props.owner_last_name || '', 
        address: props.address || '', 
        city: props.city || '', 
        state: props.state || '', 
        zip: props.zip || '', 
        phone_number: props.phone_number || '', 
        email: props.email || '', 
        color: props.color || '', 
        breed: props.breed || '', 
        gender: props.gender || '', 
        weight: props.weight || '', 
        age: props.age || '', 
        neutered_spayed: props.neutered_spayed || false, 
    }

    const [dog, setDog] = useState(dogData); 

    const dogHandler = (name, value) => setDog(prev => ({...prev, [name]: value})); 

    const handleNeuteredSpayed = e => {
        let {name, value} = e.target; 
        value = 'true' === value ? true : false; 
        dogHandler(name, value); 
    }

    const updateDog = e => {
        const {name, value} = e.target; 
        dogHandler(name, value); 
    }

    const submitDogForm = e => {
        e.preventDefault(); 
        if (submitForm === undefined) alert('cannot submit form'); 
        else submitForm(dog); 
        if (resetForm === true) {
            setDog({}); 
            Array.from(document.querySelectorAll('input')).forEach(input => input.value = ''); 
            Array.from(document.querySelectorAll('select')).forEach(input => input.value = ''); 
        } 
    }  

    
    return (
        <section className="main mt-3">
            <Container>
                <h2 className="display-4">New Dog:</h2>

                <Form className="mt-3" onSubmit = {submitDogForm}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Dog's Name</Form.Label>
                            <Form.Control name = 'dog_name' type="text" placeholder="Rex, Jupiter, etc" 
                                defaultValue = {dog.dog_name}  onChange = {updateDog} required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Owner First Name</Form.Label>
                            <Form.Control name = 'owner_first_name' type="text" placeholder = 'John' 
                                defaultValue = {dog.owner_first_name} onChange = {updateDog} required/>
                        </Form.Group>
                        <Form.Group as={Col}> 
                            <Form.Label>Owner Last Name </Form.Label>
                            <Form.Control name = 'owner_last_name' type = 'text' placeholder = 'Smith' 
                                defaultValue = {dog.owner_last_name} onChange = {updateDog} required/> 
                        </Form.Group>
                    </Form.Row>

                    <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control name = 'address' placeholder="1234 Main St" onChange = {updateDog} 
                            defaultValue = {dog.address} required/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control name = 'city' placeholder="City" defaultValue = {dog.city} onChange = {updateDog} required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control name = 'state' as="select" defaultValue="Choose..." onChange = {updateDog} required>
                                <option value="">Choose a state...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA" >Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AS">American Samoa</option>
                                <option value="GU">Guam</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="VI">Virgin Islands</option>
                                <option value="AA">Armed Forces Americas</option>
                                <option value="AP">Armed Forces Pacific</option>
                                <option value="AE">Armed Forces Others</option>	
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control name = 'zip' type="text" pattern="[0-9]*" placeholder = '58794' 
                                defaultValue = {dog.zip} onChange = {updateDog} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row> 
                        <Form.Group as ={Col}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name = 'phone_number' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder = '111-222-3333'
                                defaultValue = {dog.phone_number} onChange = {updateDog} required/>
                            <Form.Text>Format: 123-456-7890</Form.Text>
                        </Form.Group>
                        <Form.Group as = {Col}> 
                            <Form.Label> Email </Form.Label>
                            <Form.Control name = 'email' type = 'email' placeholder = 'john@test.com' 
                                defaultValue = {dog.email} onChange = {updateDog} required/> 
                        </Form.Group> 
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control name = 'weight' type="number" placeholder = '0' defaultValue = {dog.weight} 
                                onChange = {updateDog} required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control name = 'age' type="text" placeholder="0" defaultValue = {dog.age} onChange = {updateDog} required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Color</Form.Label>
                            <Form.Control name = 'color' type="text" placeholder="Black" defaultValue = {dog.color} onChange = {updateDog} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Breed</Form.Label>
                            <Form.Control name = 'breed' type="text" placeholder = 'German Shephard' value = {dog.breed} 
                                defaultValue = {dog.breed} onChange = {updateDog} required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as = 'select' name = 'gender' type='text' defaultValue = 'Choose...' onChange = {updateDog} required = {true}>
                                <option value = '' hidden>Choose...</option> 
                                <option> female </option> 
                                <option> male </option>  
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label> Neutered/Spayed </Form.Label>
                            <Form.Control as = 'select' name = 'neutered_spayed' type='text' defaultValue = 'Choose...' 
                                onChange = {handleNeuteredSpayed} required>
                                <option value = '' hidden>Choose...</option> 
                                <option value = {true}> Yes </option> 
                                <option value = {false}> No </option>  
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Check name = 'neutered_spayed' type="checkbox" label="Do you agree to the terms and conditons of service." required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
            </Container>
        </section>
    )
}

export default DogInfoForm;  