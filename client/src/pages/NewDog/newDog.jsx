import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';


const NewDog = () => {
    return (
        <section className="main mt-3">
            <Container>
                <h2 className="display-4">Add New Dog:</h2>

                
                <Form className="mt-3">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Dog's Name</Form.Label>
                            <Form.Control name = 'dog_name' type="text" placeholder="Rex, Jupiter, etc" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Owner's Name</Form.Label>
                            <Form.Control name = 'owner_first_name' type="text" placeholder="John Smith" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
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

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        <Form.Text>Format: 123-456-7890</Form.Text>
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="0"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Black"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Breed</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="" placeholder="M"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Neutered/Spayed</Form.Label>
                            <Form.Control type="text" placeholder="Black"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Do you agree to the terms and conditons of service." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Dog
                    </Button>
                </Form>
                
            </Container>
        </section>
    )
}

export default NewDog;