import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: component, ...rest}) => {
    const [isAuth, setIsAuth] = useState(true)

    if (isAuth) {
        return <Route {...rest} component={component} />
    } else {
        return <Redirect to="/login" />
    }
}
export default ProtectedRoute;