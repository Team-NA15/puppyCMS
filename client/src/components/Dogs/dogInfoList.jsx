import React from 'react'; 
import { CardColumns } from 'react-bootstrap'; 
import DogInfoCard from './dogInfoCard'; 

const DogInfoList = ({ dogs, clickAction }) => {
    return (
        <CardColumns> 
            { dogs.map(dog => <DogInfoCard {...dog} clickAction = {clickAction} /> ) }
        </CardColumns> 
    )
}

export default DogInfoList; 