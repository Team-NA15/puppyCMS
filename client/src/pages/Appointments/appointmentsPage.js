import React from 'react';
import { Container } from 'react-bootstrap';
import { Appointment } from '../../components/components'
import './appointments.scss'

const AppointmentPage = () => {
    const doggos = [
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

    return (
        <section className="main mt-3 mb-4">
            <Container>
                <h2 className="display-4">All Appointments</h2>

                {doggos.map(dog => {
                    return <Appointment name={dog.name} type={dog.type} checkin={dog.checkin} dropoff={dog.dropoff} pickup={dog.pickup} />
                })}
            </Container>
        </section>
    )
}
export default AppointmentPage;
