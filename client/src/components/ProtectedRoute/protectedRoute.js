import React, { useState } from 'react'; 
import { Route, Redirect } from 'react-router-dom'; 
import {useSelector} from 'react-redux'; 

const ProtectedRoute = ({component, ...rest}) => {
    const token = useSelector((state) => state.session.access_token); 
    if (token) {
        return <Route {...rest} component={component} />
    } else {
        return <Redirect to="/login" />
    }
}
export default ProtectedRoute;