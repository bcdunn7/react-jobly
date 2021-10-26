import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import UserContext from '../UserContext';


describe('Home', () => {
    test('it renders without crashing', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <Home/>
            </UserContext.Provider>  
            );
    });
    
    test('it displays anon welcome message', () => {
        const { getByText } = render(
            <UserContext.Provider value={{user: null}}>
                <Home/>
            </UserContext.Provider>        );

        const message = getByText(/Welcome/);
        expect(message).toBeInTheDocument();
    })

    test('it displays user welcome', () => {
        const user = {
            username: 'testuser',
            firstName: 'testFirstName'
        }
        const { getByText } = render(
            <UserContext.Provider value={{user: user}}>
                <Home/>
            </UserContext.Provider>
        )

        expect(getByText('Welcome back!')).toBeInTheDocument();
    })
})
