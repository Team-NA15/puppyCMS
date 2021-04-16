import React, { useEffect, useState } from 'react'; 
import { Table } from 'react-bootstrap'; 

const AppointmentTable = props => { 
    const dropOff = new Date(props.arrival_date); 
    const pickUp = new Date(props.depart_date); 
    useEffect(() => {
        console.log(props.night_meds_dir);    
    })
    const ApptInfo = () => (
        <Table response='xl'>
        <thead>
            <tr>
                <th>#Cubby</th>
                <th> Name </th>
                <th> Last Name </th>
                <th> Breed </th>
                <th> Service </th>
                <th> Drop Off </th>
                <th> Pick Up </th>
            </tr>
            <tr>
                <td>{props.cubby}</td>
                <td> {props.dog_name} </td>
                <td> {props.owner_last_name} </td>
                <td> {props.breed} </td>
                <td> {props.service} </td>
                <td> {dropOff.toDateString()} <br /> {dropOff.toLocaleTimeString()}</td>
                <td> {pickUp.toDateString()} <br /> {pickUp.toLocaleTimeString()}</td>
            </tr>
        </thead>
        <tbody>
        <tr>
                <th>Breakfast</th>
                <th> Lunch </th>
                <th> Dinner </th>
                <th> Medicine AM </th>
                <th> Medicine Noon </th>
                <th> Medicine PM </th>
                <th> Belongings </th>
            </tr>
            <tr>
                <td>{props.breakfast ? props.breakfast_quant : 'X'}</td>
                <td> {props.lunch ? props.lunch_quant : 'X'} </td>
                <td> {props.dinner ? props.dinner_quant : 'X'} </td>
                <td> {props.morn_meds ? props.morn_meds_dir : 'X'} </td>
                <td> {props.noon_meds ? props.noon_meds_dir : 'X'} </td>               
                <td> {props.night_meds ? props.night_meds_dir : 'X'} </td>   
                <td> {props.belongings} </td>          
            </tr>
        </tbody>
    </Table>
    )

    return (
        <div>
            <ApptInfo /> 
        </div> 
    )
}

export default AppointmentTable; 