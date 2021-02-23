import React from 'react';
import './appointments.scss'

const Appointment = () => {
    return (
        <section className="main">
            <h2>All Appointments</h2>
            <label for="date">Date:</label>
            <input type="date" id="date"/>
            <label for="name">Name:</label>
            <input type="text" id="name" />
            
        </section>
    )
}
export default Appointment;
