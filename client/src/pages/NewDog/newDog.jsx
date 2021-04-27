import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DogInfoForm from '../../components/Dogs/dogInfoForm'; 
import { useDispatch, useSelector } from 'react-redux'; 
import Actions from '../../reducers/reducers'; 
import BasicModal from '../../components/Generics/basicModal'; 

const NewDog = props => {
    const [submissionSent, setSubmissionSent] = useState(false); 
    const dispatch = useDispatch(); 
    let success = useSelector(state => state.session.newDogSignUpSuccess); 

    const submitNewDogForm = async dog => {
        await dispatch(Actions.actionNewDogSignUpRequest(dog)); 
        setSubmissionSent(true);  
    }

    const submissionStateHandler = () => setSubmissionSent(false); 

    return (
        <Container> 
            <DogInfoForm submitForm = {submitNewDogForm} /> 
            <BasicModal show = {submissionSent} handleShowModal = {submissionStateHandler} title = {success ? 'Success' : 'Failure'}
                body = {success ? 'Dog Saved Successfully!' : 'Something went wrong.'} 
                    handleFailure = {submissionStateHandler} failureText = {'Close'} 
            /> 
        </Container> 
    )
}

export default NewDog;