import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

const ProtectedRoute = ({ children, path }) => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user
                ? <Route exact path={path}>
                    {children}
                    </Route>
                : <Redirect to="/login" />
            }
        </>
    )
}

export default ProtectedRoute;