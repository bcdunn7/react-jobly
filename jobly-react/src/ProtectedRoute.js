import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

const ProtectedRoute = ({ exact, path, children }) => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user
                ? <Route exact={exact} path={path}>
                    {children}
                </Route>
                : <Redirect to="/login" />
            }
        </>
    )
}

export default ProtectedRoute;