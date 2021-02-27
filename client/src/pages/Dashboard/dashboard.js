import React from 'react';
import { FormControl, InputGroup, Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss';


function date() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format();
}

const Dashboard = () => {
    return (
        <section className="main mt-3">
            <Container>
                <InputGroup>
                    <Form.Control type="text" placeholder="Find a Dog"/>
                    <InputGroup.Append>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <h2 className="display-4 mt-3">{date()}</h2>

                        
                
            </Container>
        </section>
    )
}
export default Dashboard;