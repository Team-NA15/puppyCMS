import React, { useRef, useState, useEffect } from 'react';
import { ButtonGroup, InputGroup, Button, Container, Form } from 'react-bootstrap';
import { Appointment } from '../../components/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss';


function date() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format();
}

const Dashboard = () => {

    const doggos = [
        {
            "name": "Xander Bliss",
            "type": "boarding",
            "dropoff": "03/06/21 4:30PM",
            "pickup": "03/06/21 6:00PM",
            "checkin": true
        },
        {
            "name": "Charlie Boone",
            "type": "boarding",
            "dropoff": "03/05/21 4:30PM",
            "pickup": "03/06/21 12:00PM",
            "checkin": false
        },
        {
            "name": "Rex Reese",
            "type": "grooming",
            "dropoff": "03/03/21 2:30PM",
            "pickup": "03/06/21 1:00PM",
            "checkin": true
        }, 
        {
            "name": "Simon Dog",
            "type": "daycare",
            "dropoff": "03/05/21 4:30PM",
            "pickup": "03/06/21 11:00PM",
            "checkin": false
        },
        {
            "name": "Charlie Peck",
            "type": "boarding",
            "dropoff": "03/05/21 4:30PM",
            "pickup": "03/06/21 12:00PM",
            "checkin": false
        },
        {
            "name": "Rex Reese",
            "type": "grooming",
            "dropoff": "03/03/21 2:30PM",
            "pickup": "04/01/21 1:00PM",
            "checkin": true
        }, 
        {
            "name": "Simon Dog Land",
            "type": "daycare",
            "dropoff": "03/06/21 4:30PM",
            "pickup": "03/06/21 11:00PM",
            "checkin": false
        }
    ]

    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState();
    const [filteredList, setFilteredList] = useState()

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


    }, [filterBy, setFilterBy])

    useEffect(() => {
        console.log("Filtered List: " + filteredList)
    }, [filteredList, setFilteredList])

    const filterApts = (filterKey) => {
        let filteredList ;
        
        if (filterBy == 'B') {
            filteredList = doggos.filter((dog) => {
                return dog.type == 'boarding';
            })
        } else if ( filterBy == 'D') {
            filteredList = doggos.filter((dog) => {
                return dog.type == 'daycare'
            })
        } else if ( filterBy == 'G') {
            filteredList = doggos.filter((dog) => {
                return dog.type == 'grooming'
            }) 
        }

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

                {doggos.map(dog => {
                    return <Appointment name={dog.name} type={dog.type} checkin={dog.checkin} dropoff={dog.dropoff} pickup={dog.pickup} />
                })}
            </Container>
        </section>
    )
}
export default Dashboard;