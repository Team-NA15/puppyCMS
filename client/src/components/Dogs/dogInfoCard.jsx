import React, {useRef} from 'react'; 
import { Card, Row, Col, Table, } from 'react-bootstrap'; 
import './dogInfo.scss'; 

const DogInfoCard = ({clickAction, ...props}) => {
    const {dog_name, owner_first_name, owner_last_name, breed, color, gender } = props; 
    const dogCard = useRef(null); 
    
    const enterHover = () => {
        dogCard.current.style.backgroundColor = 'rgba(0,0,0,0.3)'; 
    }


    const exitHover = () => {
        dogCard.current.style.backgroundColor = '#fff'; 
    }

    return (
        <div> 
            <a style = {{cursor: 'pointer', }} onClick = {clickAction ? clickAction : () => {}}> 
                <Card ref = {dogCard} onMouseEnter = {enterHover} onMouseLeave = {exitHover} border = 'light'> 
                    <Card.Header> <b> {dog_name} </b> </Card.Header>
                    <Card.Body> 
                        <Table bordered> 
                            <thead> 
                                <tr> 
                                    <th> Owner </th>
                                    <th> Breed </th>
                                    <th> Color </th>
                                    <th> Gender </th>
                                </tr> 
                            </thead> 
                            <tbody> 
                                <tr> 
                                    <td> {owner_first_name} {owner_last_name} </td> 
                                    <td> {breed} </td> 
                                    <td> {color} </td> 
                                    <td> {gender} </td> 
                                </tr> 
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card> 
            </a> 
        </div> 
    )
}

export default DogInfoCard; 