import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
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
            <InputGroup size="lg">
                <FormControl placeholder="Find a Dog" aria-label="Enter the name of the dog." />
                <InputGroup.Append>
                    <Button id="searchbtn" variant="dark">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            <h2 className="display-4 mt-3">{date()}</h2>
        </section>
    )
}
export default Dashboard;