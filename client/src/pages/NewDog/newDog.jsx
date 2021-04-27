import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import DogInfoForm from '../../components/Dogs/dogInfoForm'; 
import { useDispatch, useSelector } from 'react-redux'; 
import Actions from '../../reducers/reducers'; 

const NewDog = props => {
    const [submissionSuccess, setSubmissionSuccess] = useState(false); 
    const dispatch = useDispatch(); 
    const session = useSelector(state => state.session); 

    const submitNewDogForm = dog => {
        dispatch(Actions.actionNewDogSignUpRequest(dog)); 
    }

    useEffect(() => {
        const success = session.newDogSignUpSuccess; 
        const failure = session.newDogSignUpFailure; 
        if (success === true && failure === false) setSubmissionSuccess(true); 
        else setSubmissionSuccess(false); 
    },[session.newDogSignUpSuccess, session.newDogSignUpFailure])

    return (
        <Container> 
            <DogInfoForm submitForm = {submitNewDogForm} /> 
        </Container> 
    )
}

export default NewDog;